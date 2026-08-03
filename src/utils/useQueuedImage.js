import { useEffect, useState } from 'react';
import { loadImage } from './imageQueue';

/**
 * Hold back an image until the shared queue reaches it, so the page cannot open
 * more connections than OCF will accept. Returns the src once it is cached and
 * safe to paint, and undefined before that.
 *
 * Callers must not also set loading="lazy" on the element: that defers the fetch
 * until the element nears the viewport, which would keep the queue slot occupied
 * for an image the browser has decided not to request yet.
 */
export default function useQueuedImage(src) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let active = true;
    setReady(false);
    loadImage(src).then(() => {
      // Paint even on failure so the browser shows its own broken-image state
      // rather than an element that never resolves.
      if (active) setReady(true);
    });
    return () => {
      active = false;
    };
  }, [src]);

  return ready ? src : undefined;
}
