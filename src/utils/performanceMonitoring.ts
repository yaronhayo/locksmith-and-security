interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  startTime: number;
}

interface LargestContentfulPaintEntry extends PerformanceEntry {
  element: Element;
  id: string;
  loadTime: number;
  renderTime: number;
  size: number;
  startTime: number;
  url: string;
}

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
      if (entry.initiatorType === 'script' || entry.initiatorType === 'css') {
        console.log(`Resource ${entry.name} took ${entry.duration}ms to load`);
      }
    }
  }).observe({ entryTypes: ['resource'] });
};