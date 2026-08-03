/**
 * Concurrency-limited image loader.
 *
 * The site is hosted on OCF, which throttles by request rate: 40 sequential
 * requests all succeed, while 60 simultaneous ones return HTTP 429. The members
 * page references over a hundred images, so a browser left to itself opens far
 * more HTTP/2 streams than the host accepts and everything past roughly the
 * twentieth fails. Total volume is not the problem, so pacing requests fixes it
 * without dropping any image.
 *
 * Requests are served first-in-first-out. Components enqueue from an effect, and
 * React runs sibling effects in mount order, so the queue order matches document
 * order and the page fills top to bottom.
 *
 * The ceiling is discovered rather than hard-coded: the limit climbs while
 * requests succeed and halves on failure, so a slow day degrades instead of
 * stalling.
 */

// Measured by replaying all 223 site images against the live host at fixed
// concurrency: 8 and 6 both completed 223/223, 12 lost 8 to HTTP 429, and 4 still
// lost 2. Failures are therefore possible at any rate and retrying matters more
// than the exact ceiling, but 8 is the fastest setting observed to come back
// clean, at roughly eleven requests per second.
const MAX_IN_FLIGHT = 8;
const MIN_IN_FLIGHT = 2;
const RAMP_AFTER_SUCCESSES = 6;
const MAX_RETRIES = 3;

let limit = 6;
let inFlight = 0;
let successStreak = 0;
const pending = [];

function onSettled(ok) {
  inFlight -= 1;
  if (ok) {
    successStreak += 1;
    if (successStreak >= RAMP_AFTER_SUCCESSES && limit < MAX_IN_FLIGHT) {
      limit += 1;
      successStreak = 0;
    }
  } else {
    limit = Math.max(MIN_IN_FLIGHT, Math.floor(limit / 2));
    successStreak = 0;
  }
  pump();
}

function start(task) {
  inFlight += 1;
  const img = new Image();
  img.onload = () => {
    task.resolve(true);
    onSettled(true);
  };
  img.onerror = () => {
    if (task.attempts < MAX_RETRIES) {
      task.attempts += 1;
      // Back off before retrying so a rejected request is not immediately repeated.
      setTimeout(() => {
        pending.push(task);
        pump();
      }, 400 * task.attempts);
    } else {
      task.resolve(false);
    }
    onSettled(false);
  };
  img.src = task.src;
}

function pump() {
  while (inFlight < limit && pending.length > 0) {
    start(pending.shift());
  }
}

/**
 * Queue `src` for loading. Resolves true once decoded, false if it never loaded.
 * Resolving warms the HTTP cache, so assigning the same src to an <img> paints
 * immediately.
 */
export function loadImage(src) {
  if (!src) return Promise.resolve(false);
  return new Promise((resolve) => {
    pending.push({ src, resolve, attempts: 0 });
    pump();
  });
}
