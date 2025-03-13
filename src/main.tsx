
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { initSessionTracking } from './utils/sessionTracker.ts'
import initWebVitals from './utils/webVitalsMonitoring.ts'

// Preload critical fonts and resources
const preloadCriticalResources = () => {
  // Preload logo (critical for LCP)
  const logoPreload = document.createElement('link');
  logoPreload.rel = 'preload';
  logoPreload.as = 'image';
  logoPreload.href = 'https://mtbgayqzjrxjjmsjikcg.supabase.co/storage/v1/object/public/uploads//Locksmithandsecuritylogo.jpg';
  document.head.appendChild(logoPreload);
  
  // Preload critical font
  const fontPreload = document.createElement('link');
  fontPreload.rel = 'preload';
  fontPreload.as = 'font';
  fontPreload.href = 'https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700&display=swap';
  fontPreload.type = 'font/woff2';
  fontPreload.crossOrigin = 'anonymous';
  document.head.appendChild(fontPreload);
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
preloadCriticalResources();
saveUtmParams();

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
