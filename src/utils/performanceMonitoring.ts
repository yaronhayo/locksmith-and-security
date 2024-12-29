export const setupPerformanceMonitoring = () => {
  // Monitor Largest Contentful Paint
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      const lcp = entry as LargestContentfulPaintEntry;
      console.log('LCP:', lcp.startTime, 'Element:', lcp.element);
      
      // Mark for performance tracking
      performance.mark('lcp-detected');
    }
  }).observe({ entryTypes: ['largest-contentful-paint'] });

  // Monitor First Input Delay
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      const fid = entry as FirstInputEntry;
      const delay = fid.processingStart - fid.startTime;
      console.log('FID:', delay, 'ms');
      
      // Mark for performance tracking
      performance.mark('fid-detected');
    }
  }).observe({ entryTypes: ['first-input'] });

  // Monitor Cumulative Layout Shift
  let cumulativeLayoutShift = 0;
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      const cls = entry as LayoutShiftEntry;
      if (!cls.hadRecentInput) {
        cumulativeLayoutShift += cls.value;
        console.log('CLS:', cumulativeLayoutShift);
      }
    }
  }).observe({ entryTypes: ['layout-shift'] });

  // Monitor long tasks
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      console.log('Long Task:', entry.duration, 'ms');
    }
  }).observe({ entryTypes: ['longtask'] });

  // Monitor resource timing
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      const resource = entry as PerformanceResourceTiming;
      if (resource.initiatorType === 'script' || resource.initiatorType === 'css') {
        console.log(`Resource ${resource.name} took ${resource.duration}ms to load`);
      }
    }
  }).observe({ entryTypes: ['resource'] });
};