export const setupPerformanceMonitoring = () => {
  if (typeof window !== 'undefined') {
    // Create observer for CLS
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        console.log('Cumulative Layout Shift:', (entry as LayoutShiftEntry).value);
      }
    }).observe({ entryTypes: ['layout-shift'] });

    // Create observer for LCP
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        console.log('Largest Contentful Paint:', (entry as LargestContentfulPaintEntry).startTime);
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // Create observer for FID
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        console.log('First Input Delay:', 
          (entry as FirstInputEntry).processingStart - (entry as FirstInputEntry).startTime
        );
      }
    }).observe({ entryTypes: ['first-input'] });
  }
};