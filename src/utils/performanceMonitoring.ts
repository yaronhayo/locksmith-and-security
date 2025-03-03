
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

// Image loading performance tracker
export const trackImageLoad = (imageUrl: string, element?: HTMLImageElement) => {
  const startTime = performance.now();
  
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
