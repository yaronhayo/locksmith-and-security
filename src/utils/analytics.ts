
export const checkAnalytics = () => {
  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];

  // Track page view
  const trackPageView = () => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page: {
          path: window.location.pathname,
          title: document.title
        }
      });
      console.log('Page view tracked:', window.location.pathname);
    }
  };

  // Initial page view
  trackPageView();

  // Track subsequent navigation
  const handleRouteChange = () => {
    trackPageView();
  };

  // Listen for route changes
  window.addEventListener('popstate', handleRouteChange);

  // Track errors
  window.addEventListener('error', (event) => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'javascript_error',
        error_message: event.message,
        error_url: event.filename,
        error_line: event.lineno,
        error_column: event.colno
      });
      console.log('Error tracked:', event.message);
    }
  });

  return () => {
    window.removeEventListener('popstate', handleRouteChange);
  };
};

// Initialize analytics check on page load
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    checkAnalytics();
  });
}
