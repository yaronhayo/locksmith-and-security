interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  fcp: number;
}

const sendMetricsToAnalytics = (metrics: Partial<PerformanceMetrics>) => {
  if (window.gtag) {
    Object.entries(metrics).forEach(([metric, value]) => {
      window.gtag('event', `web_vital_${metric}`, {
        value: Math.round(value),
        metric_id: metric,
        metric_value: value,
        metric_delta: 0,
      });
    });
  }
};

export const setupPerformanceMonitoring = () => {
  if (typeof window === 'undefined') return;

  // Create observer for CLS
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries() as LayoutShiftEntry[];
    entries.forEach(entry => {
      if (!entry.hadRecentInput) {
        sendMetricsToAnalytics({ cls: entry.value });
      }
    });
  }).observe({ entryTypes: ['layout-shift'] });

  // Create observer for LCP
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries() as LargestContentfulPaintEntry[];
    const lastEntry = entries[entries.length - 1];
    sendMetricsToAnalytics({ lcp: lastEntry.startTime });
  }).observe({ entryTypes: ['largest-contentful-paint'] });

  // Create observer for FID
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries() as FirstInputEntry[];
    entries.forEach(entry => {
      const fid = entry.processingStart - entry.startTime;
      sendMetricsToAnalytics({ fid });
    });
  }).observe({ entryTypes: ['first-input'] });

  // Monitor resource timing
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries() as PerformanceResourceTiming[];
    entries.forEach(entry => {
      if (entry.initiatorType === 'fetch' || entry.initiatorType === 'xmlhttprequest') {
        const duration = entry.duration;
        if (duration > 1000) {
          console.warn(`Slow ${entry.initiatorType} request: ${entry.name} took ${duration}ms`);
        }
      }
    });
  }).observe({ entryTypes: ['resource'] });

  // Monitor long tasks
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    entries.forEach(entry => {
      if (entry.duration > 50) {
        console.warn(`Long task detected: ${entry.duration}ms`);
      }
    });
  }).observe({ entryTypes: ['longtask'] });

  // Calculate and report TTFB
  window.addEventListener('load', () => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      const ttfb = navigation.responseStart - navigation.requestStart;
      sendMetricsToAnalytics({ ttfb });
    }
  });
};