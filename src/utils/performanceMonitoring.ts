export const setupPerformanceMonitoring = () => {
  // Observe CLS
  const clsObserver = new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries() as LayoutShiftEntry[]) {
      console.log('CLS:', entry.value, entry);
    }
  });
  
  clsObserver.observe({ entryTypes: ['layout-shift'] });

  // Observe LCP
  const lcpObserver = new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries() as LargestContentfulPaint[]) {
      console.log('LCP:', entry.startTime, entry);
    }
  });
  
  lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

  // Observe FID
  const fidObserver = new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries() as FirstInputEntry[]) {
      const duration = entry.processingStart - entry.startTime;
      console.log('FID:', duration, entry);
    }
  });
  
  fidObserver.observe({ entryTypes: ['first-input'] });
};