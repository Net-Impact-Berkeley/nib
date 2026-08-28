/**
 * Recover images the host refused.
 *
 * OCF throttles by request rate, not by volume. A page that asks for sixty
 * logos at once has the tail of them answered with HTTP 429, and the browser
 * paints those as broken and never tries again. On the homepage that costs
 * eight images, on the projects page nine.
 *
 * The members grid already avoids this by pacing requests through imageQueue,
 * but pacing every page would delay images that load fine today. Instead this
 * listens for the failures and re-requests only those, so nothing that already
 * works is held back.
 *
 * The retry needs a URL the browser has not just cached a failure for, hence
 * the counter in the query string. Build filenames are content-hashed, so the
 * extra parameter costs one uncached fetch of an image that was not going to
 * appear at all.
 */

const MAX_ATTEMPTS = 4;
const BASE_DELAY_MS = 500;

// Only retry what this site serves; a third-party image failing is not ours to
// paper over, and retrying it could hammer someone else's host.
function isOwnImage(img) {
  try {
    return new URL(img.currentSrc || img.src, window.location.href).origin === window.location.origin;
  } catch {
    return false;
  }
}

function retry(img) {
  const attempts = Number(img.dataset.retryAttempt || 0) + 1;
  if (attempts > MAX_ATTEMPTS) return;
  img.dataset.retryAttempt = String(attempts);

  // Exponential backoff, jittered so a grid of failures does not retry in
  // lockstep and reproduce the burst that caused the refusal.
  const delay = BASE_DELAY_MS * 2 ** (attempts - 1) * (0.5 + Math.random());

  const base = (img.dataset.retrySrc ||= img.getAttribute('src') || '');
  if (!base) return;

  setTimeout(() => {
    if (!img.isConnected) return;
    const sep = base.includes('?') ? '&' : '?';
    img.setAttribute('src', `${base}${sep}retry=${attempts}`);
  }, delay);
}

export default function installImageRetry() {
  // Capture phase: image load errors do not bubble, so a listener on the
  // document only sees them on the way down.
  document.addEventListener(
    'error',
    (event) => {
      const el = event.target;
      if (el instanceof HTMLImageElement && isOwnImage(el)) retry(el);
    },
    true
  );
}
