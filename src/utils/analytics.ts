
export const checkAnalytics = () => {
  // Check if tracking scripts are loaded
  const analyticsState = {
    gtmAvailable: typeof window.dataLayer !== 'undefined',
    gaAvailable: typeof window.gtag !== 'undefined',
    clarityAvailable: typeof window.clarity !== 'undefined'
  };

  console.log('Analytics and tracking check:', analyticsState);

  // If GA script is not loaded, load it first
  if (!document.getElementById('ga-script')) {
    console.log('Loading Google Analytics script...');
    const script = document.createElement('script');
    script.id = 'ga-script';
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-ZE9WV5PLTD';
    document.head.appendChild(script);

    script.onload = () => {
      console.log('Google Analytics script loaded, initializing...');
      // Initialize GA after script loads
      window.dataLayer = window.dataLayer || [];
      window.gtag = function(){window.dataLayer.push(arguments);};
      window.gtag('js', new Date());
      window.gtag('config', 'G-ZE9WV5PLTD', {
        send_page_view: true,
        page_path: window.location.pathname
      });

      // Send a test event
      window.gtag('event', 'analytics_check', {
        event_category: 'system',
        event_label: 'Analytics Verification',
        value: 1
      });
      console.log('Test event sent to Google Analytics');
    };
  } else if (!analyticsState.gaAvailable) {
    console.warn('Google Analytics script present but not initialized, attempting to reinitialize...');
    
    // Reinitialize GA
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){window.dataLayer.push(arguments);};
    window.gtag('js', new Date());
    window.gtag('config', 'G-ZE9WV5PLTD', {
      send_page_view: true,
      page_path: window.location.pathname
    });
  }

  return analyticsState;
};

// Initialize analytics check on page load
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    checkAnalytics();
  });
}

// Type definitions for global window object
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    clarity?: (...args: any[]) => void;
  }
}
