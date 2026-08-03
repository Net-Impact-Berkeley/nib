/**
 * Concurrency-limited image loader.
 *
 * The site is hosted on OCF, which refuses requests past a concurrency ceiling
 * (measured: 24 simultaneous requests succeed, 60 return HTTP 429, while 40
 * sequential requests all succeed). The members page references over a hundred
 * images, so a browser left to itself opens far too many HTTP/2 streams at once
 * and most photos fail to load. Total volume is not the problem, so throttling
 * in-flight requests fixes it without dropping any image.
 *
 * Requests are served first-in-first-out. Components enqueue from an effect, and
 * React runs sibling effects in mount order, so the queue order matches document
 * order and the page fills top to bottom.
 *
 * The ceiling is discovered rather than hard-coded: the limit climbs while
 * requests succeed and halves on failure, so a slow day degrades instead of
 * stalling.
 */

const MAX_IN_FLIGHT = 16; // stays clear of the measured 24-request ceiling
const MIN_IN_FLIGHT = 3;
const RAMP_AFTER_SUCCESSES = 4;
const MAX_RETRIES = 2;

let limit = 8;
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
