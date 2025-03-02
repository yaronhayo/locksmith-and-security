
import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import LoadingSpinner from './components/LoadingSpinner.tsx'
import { toast } from 'sonner'
import { logToService } from './utils/performanceMonitoring.ts'

// Create Query Client with optimized settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: (failureCount, error) => {
        // Don't retry on 404s or other client errors
        if (error instanceof Error && 'status' in error && (error as any).status < 500) {
          return false;
        }
        // Retry server errors and network failures up to 3 times
        return failureCount < 3;
      },
      retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000), // Exponential backoff
      refetchOnWindowFocus: false, // Reduce unnecessary refetches
      refetchOnMount: true,
      gcTime: 1000 * 60 * 30, // 30 minutes (previously cacheTime)
      onError: (error) => {
        // Global default error handler for queries
        console.error('Query error:', error);
        
        // Log the error
        logToService('error', 'Query Error', { 
          error: error instanceof Error ? error.message : String(error),
          stack: error instanceof Error ? error.stack : undefined
        });
        
        // Only show one toast notification for errors
        if (!toast.isActive('query-error')) {
          toast.error('Failed to load data. Please try again later.', {
            id: 'query-error',
            duration: 4000
          });
        }
      }
    },
    mutations: {
      onError: (error) => {
        // Global default error handler for mutations
        console.error('Mutation error:', error);
        
        // Log the error
        logToService('error', 'Mutation Error', { 
          error: error instanceof Error ? error.message : String(error),
          stack: error instanceof Error ? error.stack : undefined
        });
        
        // Only show one toast notification for errors
        if (!toast.isActive('mutation-error')) {
          toast.error('Failed to update data. Please try again later.', {
            id: 'mutation-error',
            duration: 4000
          });
        }
      }
    }
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
