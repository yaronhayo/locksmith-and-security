interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
}

interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  startTime: number;
}

interface LargestContentfulPaintEntry extends PerformanceEntry {
  startTime: number;
}

export const setupPerformanceMonitoring = () => {
  // Monitor Largest Contentful Paint
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      console.log('LCP:', (entry as LargestContentfulPaintEntry).startTime, entry);
    }
  }).observe({ entryTypes: ['largest-contentful-paint'] });

  // Monitor First Input Delay
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      console.log('FID:', (entry as FirstInputEntry).processingStart - (entry as FirstInputEntry).startTime, entry);
    }
  }).observe({ entryTypes: ['first-input'] });

  // Monitor Cumulative Layout Shift
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      console.log('CLS:', (entry as LayoutShiftEntry).value, entry);
    }
  }).observe({ entryTypes: ['layout-shift'] });

  // Monitor long tasks
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      console.log('Long task:', entry.duration, entry);
    }
  }).observe({ entryTypes: ['longtask'] });
};