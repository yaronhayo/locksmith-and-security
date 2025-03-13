
/**
 * Web Vitals monitoring utility
 * Helps track Core Web Vitals metrics in production
 */

type MetricName = 'LCP' | 'FID' | 'CLS' | 'INP' | 'TTFB' | 'FCP';

interface PerformanceMetric {
  name: MetricName;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  navigationType?: string;
}

// Thresholds based on Google Web Vitals recommendations
const thresholds = {
  LCP: { good: 2500, poor: 4000 }, // ms
  FID: { good: 100, poor: 300 },   // ms
  CLS: { good: 0.1, poor: 0.25 },  // score
  INP: { good: 200, poor: 500 },   // ms
  TTFB: { good: 800, poor: 1800 }, // ms
  FCP: { good: 1800, poor: 3000 }  // ms
};

// Get rating based on metric value and thresholds
const getRating = (name: MetricName, value: number): 'good' | 'needs-improvement' | 'poor' => {
  if (value <= thresholds[name].good) return 'good';
  if (value <= thresholds[name].poor) return 'needs-improvement';
  return 'poor';
};

// Report metrics to analytics (only in production)
const reportMetric = (metric: PerformanceMetric) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`[WebVitals] ${metric.name}: ${metric.value} (${metric.rating})`);
    return;
  }
  
  // Send to analytics
  try {
    // Only log to console in production, would normally send to analytics service
    console.log(`[WebVitals] ${metric.name}: ${metric.value} (${metric.rating})`);
    
    // Example of sending to Google Analytics (if available)
    if (window.gtag) {
      window.gtag('event', 'web_vitals', {
        event_category: 'Web Vitals',
        event_label: metric.name,
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value), // CLS values are typically < 1
        metric_rating: metric.rating,
        non_interaction: true,
      });
    }
  } catch (e) {
    console.error('Error reporting web vitals:', e);
  }
};

// Initialize web vitals monitoring
export const initWebVitals = () => {
  if (!('PerformanceObserver' in window)) return;
  
  try {
    // Largest Contentful Paint
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1] as PerformanceEntry;
      
      if (lastEntry) {
        const value = lastEntry.startTime;
        const metric: PerformanceMetric = {
          name: 'LCP',
          value,
          rating: getRating('LCP', value)
        };
        reportMetric(metric);
      }
    }).observe({ type: 'largest-contentful-paint', buffered: true });
    
    // Cumulative Layout Shift
    let clsValue = 0;
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        // Only include if not caused by user input
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
      
      const metric: PerformanceMetric = {
        name: 'CLS',
        value: clsValue,
        rating: getRating('CLS', clsValue)
      };
      reportMetric(metric);
    }).observe({ type: 'layout-shift', buffered: true });
    
    // First Input Delay / Interaction to Next Paint
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        const value = (entry as any).processingStart - entry.startTime;
        const metric: PerformanceMetric = {
          name: 'FID',
          value,
          rating: getRating('FID', value)
        };
        reportMetric(metric);
      }
    }).observe({ type: 'first-input', buffered: true });
    
    // Time to First Byte
    new PerformanceObserver((entryList) => {
      const [entry] = entryList.getEntries();
      if (entry) {
        const value = (entry as any).responseStart;
        const metric: PerformanceMetric = {
          name: 'TTFB',
          value,
          rating: getRating('TTFB', value)
        };
        reportMetric(metric);
      }
    }).observe({ type: 'navigation', buffered: true });
    
  } catch (e) {
    console.error('Error setting up web vitals:', e);
  }
};

// Initialize monitoring when imported
if (typeof window !== 'undefined') {
  // Wait for page load to avoid competing with critical resources
  if (document.readyState === 'complete') {
    setTimeout(initWebVitals, 0);
  } else {
    window.addEventListener('load', () => setTimeout(initWebVitals, 0));
  }
}

// Types for Google Analytics
declare global {
  interface Window {
    gtag?: (command: string, action: string, params: object) => void;
  }
}

export default initWebVitals;
