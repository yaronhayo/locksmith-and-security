
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { initSessionTracking } from './utils/sessionTracker.ts'
import initWebVitals from './utils/webVitalsMonitoring.ts'
import { initPolyfills } from './utils/polyfills.ts'

// Initialize polyfills first
initPolyfills();

// Check for DOCTYPE to prevent Quirks Mode
const detectQuirksMode = () => {
  if (document.compatMode === 'BackCompat') {
    console.warn('Page is running in Quirks Mode! This may cause layout and rendering issues.');
  }
};

// Detect and handle iframes in quirks mode
const handleThirdPartyIframes = () => {
  try {
    // Monitor for iframes that might be loaded in quirks mode
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeName === 'IFRAME') {
              // Add proper attributes to help with standards mode
              node.setAttribute('loading', 'lazy');
              node.setAttribute('frameBorder', '0');
              if (!node.hasAttribute('title')) {
                node.setAttribute('title', 'Third-party content');
              }
            }
          });
        }
      });
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => observer.disconnect();
  } catch (error) {
    console.error('Error setting up iframe observer:', error);
  }
};

// Preload critical fonts and resources
const preloadCriticalResources = () => {
  // Preload logo (critical for LCP)
  const logoPreload = document.createElement('link');
  logoPreload.rel = 'preload';
  logoPreload.as = 'image';
  logoPreload.href = 'https://mtbgayqzjrxjjmsjikcg.supabase.co/storage/v1/object/public/uploads//Locksmithandsecuritylogo.jpg';
  logoPreload.fetchPriority = 'high';
  document.head.appendChild(logoPreload);
  
  // Preload critical font
  const fontPreload = document.createElement('link');
  fontPreload.rel = 'preload';
  fontPreload.as = 'font';
  fontPreload.href = 'https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700&display=swap';
  fontPreload.type = 'font/woff2';
  fontPreload.crossOrigin = 'anonymous';
  document.head.appendChild(fontPreload);
  
  // DNS prefetch for external domains
  const domains = [
    'fonts.googleapis.com',
    'fonts.gstatic.com',
    'mtbgayqzjrxjjmsjikcg.supabase.co',
    'maps.googleapis.com',
    'static.cloudflareinsights.com'
  ];
  
  domains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = `https://${domain}`;
    document.head.appendChild(link);
    
    // Also add preconnect for critical domains
    const preconnect = document.createElement('link');
    preconnect.rel = 'preconnect';
    preconnect.href = `https://${domain}`;
    preconnect.crossOrigin = 'anonymous';
    document.head.appendChild(preconnect);
  });
};

// Save UTM parameters to localStorage for tracking throughout the session
const saveUtmParams = () => {
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get('utm_source');
    const utmMedium = urlParams.get('utm_medium');
    const utmCampaign = urlParams.get('utm_campaign');
    const utmTerm = urlParams.get('utm_term');
    
    if (utmSource) localStorage.setItem('utm_source', utmSource);
    if (utmMedium) localStorage.setItem('utm_medium', utmMedium);
    if (utmCampaign) localStorage.setItem('utm_campaign', utmCampaign);
    if (utmTerm) localStorage.setItem('utm_term', utmTerm);
  }
};

// Execute performance optimizations immediately
detectQuirksMode();
preloadCriticalResources();
saveUtmParams();
handleThirdPartyIframes();

// Initialize web vitals monitoring to gather performance metrics
initWebVitals();

// Initialize session tracking once DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSessionTracking);
} else {
  initSessionTracking();
}

// Configure React Query for optimal performance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
      refetchOnWindowFocus: false, // Disable refetching on window focus for better performance
      refetchOnMount: false, // Only fetch when needed
      gcTime: 1000 * 60 * 30, // Cache for 30 minutes (previously cacheTime)
    },
  },
})

// Use createRoot for better hydration performance
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
