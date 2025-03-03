
// Consolidated performance monitoring utilities
type LogLevel = 'info' | 'warn' | 'error';

export const logToService = (level: LogLevel, message: string, data?: any) => {
  console[level](`[Performance] ${message}`, data);
  
  // Can be extended to send to monitoring service
  if (process.env.NODE_ENV === 'production') {
    // Send to monitoring service if needed
  }
};

// Component rendering performance tracking
export const trackComponentRender = (componentName: string) => {
  const startTime = performance.now();
  
  return () => {
    const duration = performance.now() - startTime;
    logToService('info', `Component Render: ${componentName}`, { duration });
    return duration;
  };
};

// Core Web Vitals tracking
export const trackCoreWebVitals = () => {
  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
    // Track Largest Contentful Paint (LCP)
    try {
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        logToService('info', 'LCP Observed:', { 
          value: lastEntry.startTime,
          element: (lastEntry as any).element
        });
      }).observe({ type: 'largest-contentful-paint', buffered: true });
    } catch (e) {
      logToService('error', 'LCP tracking error', e);
    }
    
    // Track First Input Delay (FID) / Interaction to Next Paint (INP)
    try {
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach(entry => {
          logToService('info', 'Input Delay Observed:', {
            value: (entry as PerformanceEventTiming).processingStart - entry.startTime
          });
        });
      }).observe({ type: 'first-input', buffered: true });
    } catch (e) {
      logToService('error', 'FID tracking error', e);
    }
    
    // Track Cumulative Layout Shift (CLS)
    try {
      let clsValue = 0;
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach(entry => {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
            logToService('info', 'CLS Updated:', { currentValue: clsValue });
          }
        });
      }).observe({ type: 'layout-shift', buffered: true });
    } catch (e) {
      logToService('error', 'CLS tracking error', e);
    }
  }
};

// Map specific performance monitoring
interface MapLoadMetrics {
  scriptLoadTime: number;
  instanceLoadTime: number;
  markersCount: number;
}

class MapPerformanceTracker {
  private static instance: MapPerformanceTracker;
  private metrics: MapLoadMetrics = {
    scriptLoadTime: 0,
    instanceLoadTime: 0,
    markersCount: 0
  };

  private constructor() {}

  static getInstance(): MapPerformanceTracker {
    if (!MapPerformanceTracker.instance) {
      MapPerformanceTracker.instance = new MapPerformanceTracker();
    }
    return MapPerformanceTracker.instance;
  }

  trackScriptLoad(startTime: number) {
    this.metrics.scriptLoadTime = performance.now() - startTime;
    this.logMetrics('Script Load');
  }

  trackInstanceLoad(startTime: number) {
    this.metrics.instanceLoadTime = performance.now() - startTime;
    this.logMetrics('Instance Load');
  }

  setMarkersCount(count: number) {
    this.metrics.markersCount = count;
    this.logMetrics('Markers Update');
  }

  private logMetrics(event: string) {
    logToService('info', `Map Performance - ${event}:`, this.metrics);
  }
}

export const mapPerformance = MapPerformanceTracker.getInstance();

// General performance monitoring
export const measurePerformance = <T>(label: string, callback: () => T): T => {
  const start = performance.now();
  try {
    const result = callback();
    const duration = performance.now() - start;
    logToService('info', `Performance measurement: ${label}`, { duration });
    return result;
  } catch (error) {
    const duration = performance.now() - start;
    logToService('error', `Performance measurement error: ${label}`, { duration, error });
    throw error;
  }
};

// Image loading performance tracker with preload hint
export const trackImageLoad = (imageUrl: string, element?: HTMLImageElement) => {
  const startTime = performance.now();
  
  // Add preload hint for important images
  if (imageUrl && typeof document !== 'undefined' && !element) {
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'image';
    preloadLink.href = imageUrl;
    document.head.appendChild(preloadLink);
  }
  
  const onLoad = () => {
    const duration = performance.now() - startTime;
    logToService('info', 'Image loaded', { url: imageUrl, duration });
  };
  
  const onError = (error: any) => {
    const duration = performance.now() - startTime;
    logToService('error', 'Image load failed', { url: imageUrl, duration, error });
  };
  
  if (element) {
    element.addEventListener('load', onLoad, { once: true });
    element.addEventListener('error', onError, { once: true });
  }
  
  return { onLoad, onError };
};

// New: API call performance monitoring
export interface ApiCallMetrics {
  url: string;
  method: string;
  duration: number;
  status?: number;
  cacheHit?: boolean;
  retryCount?: number;
  success: boolean;
}

export const trackApiCall = (metrics: ApiCallMetrics) => {
  logToService('info', 'API Call Performance', metrics);
  
  // Report slow API calls
  if (metrics.duration > 2000) {
    logToService('warn', 'Slow API Call', {
      ...metrics,
      threshold: 2000
    });
  }
  
  return metrics;
};

// New: React Query performance hooks
export const queryLoadingMiddleware = <T>(
  queryFn: () => Promise<T>,
  name: string
): (() => Promise<T>) => {
  return async () => {
    const startTime = performance.now();
    try {
      const result = await queryFn();
      const duration = performance.now() - startTime;
      
      trackApiCall({
        url: name,
        method: 'GET', // Most queries are GET
        duration,
        success: true
      });
      
      return result;
    } catch (error) {
      const duration = performance.now() - startTime;
      
      trackApiCall({
        url: name,
        method: 'GET',
        duration,
        success: false
      });
      
      throw error;
    }
  };
};

// Cache control utilities
export const createCacheKey = (prefix: string, params?: Record<string, any>): string => {
  if (!params) return prefix;
  
  const sortedKeys = Object.keys(params).sort();
  const paramsString = sortedKeys
    .map(key => `${key}:${JSON.stringify(params[key])}`)
    .join('|');
    
  return `${prefix}|${paramsString}`;
};

// Optimistic update tracking
export const trackOptimisticUpdate = (operation: string, startTime: number, success: boolean) => {
  const duration = performance.now() - startTime;
  logToService(success ? 'info' : 'error', 'Optimistic Update', {
    operation,
    duration,
    success
  });
};

// Initialize Core Web Vitals tracking
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    // Use setTimeout to ensure we measure after initial rendering is complete
    setTimeout(() => trackCoreWebVitals(), 0);
  });
}
