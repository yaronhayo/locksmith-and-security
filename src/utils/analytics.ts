
export const checkAnalytics = () => {
  // Check if tracking scripts are loaded
  const analyticsState = {
    gtmAvailable: typeof window.dataLayer !== 'undefined',
    gaAvailable: typeof window.gtag !== 'undefined',
    clarityAvailable: typeof window.clarity !== 'undefined'
  };

  console.log('Analytics and tracking check:', analyticsState);

  // If GA not available, try to reinitialize
  if (!analyticsState.gaAvailable) {
    console.warn('Google Analytics not detected, attempting to reinitialize...');
    
    // Reinitialize GA
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){window.dataLayer.push(arguments);};
    window.gtag('js', new Date());
    window.gtag('config', 'G-ZE9WV5PLTD', {
      send_page_view: true,
      page_path: window.location.pathname
    });
  }

  // Send a test event to verify GA is working
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'analytics_check', {
      event_category: 'system',
      event_label: 'Analytics Verification',
      value: 1
    });
    console.log('Test event sent to Google Analytics');
  }

  return analyticsState;
};

// Initialize analytics check on page load
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    setTimeout(checkAnalytics, 2000); // Check after 2s to ensure scripts have loaded
  });
}

