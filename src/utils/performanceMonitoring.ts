
// Performance monitoring utilities

/**
 * Tracks image load performance
 * @param src Image source URL
 * @param width Natural width of the image
 * @param height Natural height of the image
 */
export const trackImageLoad = (src: string, width?: number, height?: number) => {
  // Only track in production
  if (process.env.NODE_ENV !== 'production') return;
  
  try {
    // Skip if no dimensions are provided
    if (!width || !height) return;
    
    // Check if image is properly sized for its display
    const isLargeImage = width > 1200 || height > 1200;
    const fileName = src.split('/').pop() || src;
    
    // Log to console in development (fixing type comparison)
    if (process.env.NODE_ENV === 'development' && isLargeImage) {
      console.warn(`Large image detected: ${fileName} (${width}x${height}px). Consider resizing for better performance.`);
    }
    
    // Send to analytics in production
    if (typeof window !== 'undefined' && window.gtag && isLargeImage) {
      window.gtag('event', 'large_image_loaded', {
        image_url: src,
        image_size: `${width}x${height}`,
        page_path: window.location.pathname
      });
    }
  } catch (error) {
    console.error('Error tracking image performance:', error);
  }
};

/**
 * Tracks Core Web Vitals
 */
export const trackCoreWebVitals = () => {
  if (typeof window === 'undefined') return;
  
  try {
    // Safe access to web vitals if loaded globally
    const webVitals = (window as any).webVitals;
    if (webVitals) {
      const { getCLS, getFID, getLCP } = webVitals;
      
      getCLS((metric: any) => {
        console.log('CLS:', metric.value);
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'CLS',
            value: Math.round(metric.value * 1000) / 1000,
            non_interaction: true,
          });
        }
      });
      
      getFID((metric: any) => {
        console.log('FID:', metric.value);
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'FID', 
            value: Math.round(metric.value),
            non_interaction: true,
          });
        }
      });
      
      getLCP((metric: any) => {
        console.log('LCP:', metric.value);
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'LCP',
            value: Math.round(metric.value),
            non_interaction: true,
          });
        }
      });
    }
  } catch (error) {
    console.error('Error tracking web vitals:', error);
  }
};

/**
 * Tracks component render time
 * @param componentName Name of the component being tracked
 * @returns Function to call when component has finished rendering
 */
export const trackComponentRender = (componentName: string) => {
  const startTime = performance.now();
  
  return () => {
    const duration = performance.now() - startTime;
    if (process.env.NODE_ENV === 'development') {
      console.debug(`Component render time [${componentName}]: ${duration.toFixed(2)}ms`);
    }
    
    // Only send to analytics if render time is significant (>100ms)
    if (duration > 100 && window.gtag) {
      window.gtag('event', 'component_render', {
        component_name: componentName,
        render_time: Math.round(duration),
        non_interaction: true
      });
    }
    
    return duration;
  };
};

/**
 * Measures performance of a function
 * @param label Label for the performance measurement
 * @param fn Function to measure
 * @returns Result of the function
 */
export const measurePerformance = <T>(label: string, fn: () => T): T => {
  const startTime = performance.now();
  const result = fn();
  const duration = performance.now() - startTime;
  
  if (process.env.NODE_ENV === 'development') {
    console.debug(`Performance [${label}]: ${duration.toFixed(2)}ms`);
  }
  
  return result;
};

/**
 * Logs performance data to monitoring service
 * @param level Log level
 * @param message Log message
 * @param data Additional data to log
 */
export const logToService = (level: 'info' | 'warn' | 'error', message: string, data?: Record<string, any>) => {
  if (process.env.NODE_ENV !== 'production') {
    console[level](`[${level.toUpperCase()}] ${message}`, data || '');
    return;
  }
  
  if (window.gtag) {
    window.gtag('event', 'performance_log', {
      level,
      message,
      ...data
    });
  }
};

/**
 * Track image load performance (new version with proper return type)
 * @param src Image source URL
 * @param imgElement Image element or null
 * @returns Object with onLoad and onError callbacks
 */
export const trackImageLoad2 = (src: string, imgElement: HTMLImageElement | null) => {
  const startTime = performance.now();
  
  const onLoad = () => {
    const loadTime = performance.now() - startTime;
    
    if (imgElement) {
      const { naturalWidth, naturalHeight } = imgElement;
      const size = `${naturalWidth}x${naturalHeight}`;
      
      if (process.env.NODE_ENV === 'development') {
        console.debug(`Image loaded: ${src} (${size}) in ${loadTime.toFixed(2)}ms`);
      }
      
      if (window.gtag && loadTime > 300) {
        window.gtag('event', 'image_load', {
          image_url: src,
          image_size: size,
          load_time: Math.round(loadTime),
          page_path: window.location.pathname
        });
      }
    }
  };
  
  const onError = (error: any) => {
    console.error(`Failed to load image: ${src}`, error);
    
    if (window.gtag) {
      window.gtag('event', 'image_error', {
        image_url: src,
        error_message: error?.message || 'Unknown error',
        page_path: window.location.pathname
      });
    }
  };
  
  return { onLoad, onError };
};

/**
 * Map performance tracking function
 */
export const mapPerformance = {
  trackInitialization: (duration: number) => {
    if (process.env.NODE_ENV === 'development') {
      console.debug(`Map initialization: ${duration.toFixed(2)}ms`);
    }
    
    if (window.gtag && duration > 1000) {
      window.gtag('event', 'map_performance', {
        event_type: 'initialization',
        duration: Math.round(duration)
      });
    }
  },
  
  trackInteraction: (type: string, duration: number) => {
    if (process.env.NODE_ENV === 'development') {
      console.debug(`Map interaction [${type}]: ${duration.toFixed(2)}ms`);
    }
    
    if (window.gtag && duration > 300) {
      window.gtag('event', 'map_performance', {
        event_type: 'interaction',
        interaction_type: type,
        duration: Math.round(duration)
      });
    }
  },
  
  // Adding the missing trackInstanceLoad method
  trackInstanceLoad: (startTime: number) => {
    const duration = performance.now() - startTime;
    if (process.env.NODE_ENV === 'development') {
      console.debug(`Map instance loaded in: ${duration.toFixed(2)}ms`);
    }
    
    if (window.gtag && duration > 500) {
      window.gtag('event', 'map_performance', {
        event_type: 'instance_load',
        duration: Math.round(duration)
      });
    }
  }
};
