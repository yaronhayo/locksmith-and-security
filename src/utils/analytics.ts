export const checkAnalytics = () => {
  try {
    // Check Google Tag Manager
    if (window.dataLayer) {
      console.log('GTM initialized successfully');
    }

    // Check Microsoft Clarity
    if (typeof window.clarity === 'function') {
      console.log('Clarity initialized successfully');
    }

    // Check Google Analytics
    if (typeof window.gtag === 'function') {
      console.log('GA4 initialized successfully');
    }
  } catch (error) {
    console.error('Analytics initialization error:', error);
  }
};

export const trackEvent = (eventName: string, eventData: Record<string, any>) => {
  try {
    // Push to Google Tag Manager
    if (window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        ...eventData
      });
    }

    // Track in Microsoft Clarity
    if (typeof window.clarity === 'function') {
      window.clarity('track', eventName, eventData);
    }

    // Track in Google Analytics
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, eventData);
    }
  } catch (error) {
    console.error('Error tracking event:', error);
  }
};