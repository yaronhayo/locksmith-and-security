
// Consolidated performance monitoring utilities
type LogLevel = 'info' | 'warn' | 'error';

// Use a throttled logging mechanism to avoid too many logs
const logQueue: Array<{level: LogLevel, message: string, data?: any}> = [];
let isProcessingQueue = false;
const PROCESS_INTERVAL = 1000; // Process logs every second

export const logToService = (level: LogLevel, message: string, data?: any) => {
  // For development, log immediately
  if (process.env.NODE_ENV !== 'production') {
    console[level](`[Performance] ${message}`, data);
    return;
  }
  
  // For production, queue logs and process them in batches
  logQueue.push({ level, message, data });
  
  if (!isProcessingQueue) {
    isProcessingQueue = true;
    setTimeout(processLogQueue, PROCESS_INTERVAL);
  }
};

function processLogQueue() {
  // Take up to 10 logs at a time
  const batch = logQueue.splice(0, 10);
  
  if (batch.length > 0) {
    // Log them all at once
    batch.forEach(item => {
      console[item.level](`[Performance] ${item.message}`, item.data);
      // Could be extended to send to monitoring service
    });
  }
  
  if (logQueue.length > 0) {
    // More logs to process
    setTimeout(processLogQueue, PROCESS_INTERVAL);
  } else {
    isProcessingQueue = false;
  }
}

// Component rendering performance tracking with debounce
const renderTimings = new Map<string, number>();
export const trackComponentRender = (componentName: string) => {
  const startTime = performance.now();
  
  return () => {
    const duration = performance.now() - startTime;
    
    // Only log if the render takes more than 16ms (roughly 60fps)
    if (duration > 16) {
      // Debounce logging for the same component
      const lastLog = renderTimings.get(componentName) || 0;
      const now = Date.now();
      
      if (now - lastLog > 5000) { // Only log once every 5 seconds for the same component
        logToService('info', `Component Render: ${componentName}`, { duration });
        renderTimings.set(componentName, now);
      }
    }
    
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
  private lastLogTime = 0;

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
    const now = Date.now();
    
    // Only log once every 10 seconds to avoid spam
    if (now - this.lastLogTime > 10000) {
      logToService('info', `Map Performance - ${event}:`, this.metrics);
      this.lastLogTime = now;
    }
  }
}

export const mapPerformance = MapPerformanceTracker.getInstance();

// General performance monitoring with debouncing
const measurementTimers = new Map<string, number>();
export const measurePerformance = <T>(label: string, callback: () => T): T => {
  // Check if we've logged this measurement recently
  const lastLog = measurementTimers.get(label) || 0;
  const now = Date.now();
  
  if (now - lastLog < 5000) {
    // Skip detailed measurement if called frequently
    return callback();
  }
  
  // Track this measurement
  measurementTimers.set(label, now);
  
  const start = performance.now();
  try {
    const result = callback();
    const duration = performance.now() - start;
    
    // Only log if it took more than 10ms
    if (duration > 10) {
      logToService('info', `Performance measurement: ${label}`, { duration });
    }
    
    return result;
  } catch (error) {
    const duration = performance.now() - start;
    logToService('error', `Performance measurement error: ${label}`, { duration, error });
    throw error;
  }
};

// Image loading performance tracker with IntersectionObserver optimization
const imageLoadTimes = new Map<string, number>();
export const trackImageLoad = (imageUrl: string, element?: HTMLImageElement) => {
  const startTime = performance.now();
  
  const onLoad = () => {
    const duration = performance.now() - startTime;
    
    // Only log slow image loads (> 200ms) or once per session per image
    if (duration > 200 && !imageLoadTimes.has(imageUrl)) {
      logToService('info', 'Image loaded', { url: imageUrl, duration });
      imageLoadTimes.set(imageUrl, duration);
    }
  };
  
  const onError = (error: any) => {
    const duration = performance.now() - startTime;
    logToService('error', 'Image load failed', { url: imageUrl, duration, error });
  };
  
  if (element) {
    element.addEventListener('load', onLoad, { once: true });
    element.addEventListener('error', onError, { once: true });
    
    // Use IntersectionObserver to start loading only when near viewport
    if ('IntersectionObserver' in window && !element.src) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && element) {
            element.src = imageUrl;
            observer.disconnect();
          }
        });
      }, {
        rootMargin: '200px', // Load when image is 200px from viewport
        threshold: 0
      });
      
      observer.observe(element);
    }
  }
  
  return { onLoad, onError };
};
