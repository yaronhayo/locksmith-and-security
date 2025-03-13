
// Performance monitoring utilities

/**
 * Tracks image load performance
 * @param src Image source URL
 * @param width Natural width of the image
 * @param height Natural height of the image
 */
export const trackImageLoad = (src: string, width: number, height: number) => {
  // Only track in production
  if (process.env.NODE_ENV !== 'production') return;
  
  try {
    // Check if image is properly sized for its display
    const isLargeImage = width > 1200 || height > 1200;
    const fileName = src.split('/').pop() || src;
    
    // Log to console in development
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
    // @ts-ignore - web-vitals is loaded globally
    if (window.webVitals) {
      const { getCLS, getFID, getLCP } = window.webVitals;
      
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
