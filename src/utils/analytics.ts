export const checkAnalytics = () => {
  console.log('Analytics and tracking check:', {
    gtmAvailable: typeof window.dataLayer !== 'undefined',
    gaAvailable: typeof window.gtag !== 'undefined',
    clarityAvailable: typeof window.clarity !== 'undefined'
  });
};