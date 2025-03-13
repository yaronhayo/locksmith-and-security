// Polyfill for requestIdleCallback for older browsers
export const setupRequestIdleCallback = () => {
  if (typeof window !== 'undefined') {
    if (!window.requestIdleCallback) {
      window.requestIdleCallback = function(cb) {
        const start = Date.now();
        return setTimeout(function() {
          cb({
            didTimeout: false,
            timeRemaining: function() {
              return Math.max(0, 50 - (Date.now() - start));
            }
          });
        }, 1);
      } as Window['requestIdleCallback'];
    }

    if (!window.cancelIdleCallback) {
      window.cancelIdleCallback = function(id) {
        clearTimeout(id);
      } as Window['cancelIdleCallback'];
    }
  }
};

// Polyfill for IntersectionObserver for older browsers
export const setupIntersectionObserver = () => {
  if (typeof window !== 'undefined' && !('IntersectionObserver' in window)) {
    import('intersection-observer').then(() => {
      console.log('IntersectionObserver polyfill loaded');
    });
  }
};

// Initialize all polyfills
export const initPolyfills = () => {
  setupRequestIdleCallback();
  setupIntersectionObserver();
};
