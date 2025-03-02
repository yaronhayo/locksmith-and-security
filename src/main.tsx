
import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import LoadingSpinner from './components/LoadingSpinner.tsx'

// Create Query Client with optimized settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
      refetchOnWindowFocus: false, // Reduce unnecessary refetches
      refetchOnMount: true,
      gcTime: 1000 * 60 * 30, // 30 minutes (previously cacheTime)
    },
  },
})

// Detect if browser supports intersection observer for better lazy loading
const supportsIntersectionObserver = 'IntersectionObserver' in window;

// Add performance monitoring
if (process.env.NODE_ENV === 'production') {
  // Report web vitals on mount
  window.addEventListener('load', () => {
    setTimeout(() => {
      const { CLS, FID, LCP } = performance.getEntriesByType('navigation')[0] as any;
      if (CLS) console.log('CLS:', CLS);
      if (FID) console.log('FID:', FID);
      if (LCP) console.log('LCP:', LCP);
    }, 2000);
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<LoadingSpinner size="lg" />}>
        <App />
      </Suspense>
    </QueryClientProvider>
  </React.StrictMode>,
)
