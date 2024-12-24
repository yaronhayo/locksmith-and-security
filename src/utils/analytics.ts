import { Analytics } from '@vercel/analytics/react';

// Web Vitals reporting
export const reportWebVitals = (metric: any) => {
  console.log(metric);
  
  // Send to Google Analytics
  if (window.gtag) {
    window.gtag('event', metric.name, {
      event_category: metric.entryType,
      value: Math.round(metric.value),
      event_label: metric.id,
      non_interaction: true,
    });
  }
};

// Microsoft Clarity setup
export const initClarity = () => {
  if (typeof window !== 'undefined') {
    const clarity = document.createElement('script');
    clarity.async = true;
    clarity.src = 'https://www.clarity.ms/tag/YOUR_CLARITY_ID';
    document.head.appendChild(clarity);
  }
};

// Google Analytics setup
export const initGoogleAnalytics = () => {
  if (typeof window !== 'undefined') {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', 'YOUR_GA_ID');
  }
};

// Type declaration for window object
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const AnalyticsProvider = Analytics;