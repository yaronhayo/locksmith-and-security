export const checkAnalytics = () => {
  console.log('Analytics and tracking check:', {
    gtmAvailable: typeof window !== 'undefined' && 'dataLayer' in window,
    gaAvailable: typeof window !== 'undefined' && 'gtag' in window,
    clarityAvailable: typeof window !== 'undefined' && 'clarity' in window
  });
};