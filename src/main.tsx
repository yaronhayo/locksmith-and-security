
import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import LoadingSpinner from './components/LoadingSpinner.tsx'
import { toast, Toaster } from 'sonner'
import { logToService } from './utils/performanceMonitoring.ts'

// Track active toasts for error deduplication
const activeToasts = new Set<string>();

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
      meta: {
        onError: (error: Error) => {
          // Global default error handler for queries
          console.error('Query error:', error);
          
          // Log the error
          logToService('error', 'Query Error', { 
            error: error instanceof Error ? error.message : String(error),
            stack: error instanceof Error ? error.stack : undefined
          });
          
          // Only show one toast notification for errors
          const toastId = 'query-error';
          if (!activeToasts.has(toastId)) {
            activeToasts.add(toastId);
            toast.error('Failed to load data. Please try again later.', {
              id: toastId,
              duration: 4000,
              onDismiss: () => {
                activeToasts.delete(toastId);
              }
            });
          }
        }
      }
    },
    mutations: {
      meta: {
        onError: (error: Error) => {
          // Global default error handler for mutations
          console.error('Mutation error:', error);
          
          // Log the error
          logToService('error', 'Mutation Error', { 
            error: error instanceof Error ? error.message : String(error),
            stack: error instanceof Error ? error.stack : undefined
          });
          
          // Only show one toast notification for errors
          const toastId = 'mutation-error';
          if (!activeToasts.has(toastId)) {
            activeToasts.add(toastId);
            toast.error('Failed to update data. Please try again later.', {
              id: toastId,
              duration: 4000,
              onDismiss: () => {
                activeToasts.delete(toastId);
              }
            });
          }
        }
      }
    }
  },
})

// Detect if browser supports intersection observer for better lazy loading
const supportsIntersectionObserver = 'IntersectionObserver' in window;

// Add performance monitoring
if (process.env.NODE_ENV === 'production') {
  // Dynamically import the performance monitoring module
  import('./utils/performanceMonitoring.ts').then(({ trackCoreWebVitals }) => {
    // Report web vitals on mount
    window.addEventListener('load', () => {
      setTimeout(() => {
        trackCoreWebVitals();
        const { CLS, FID, LCP } = performance.getEntriesByType('navigation')[0] as any;
        if (CLS) console.log('CLS:', CLS);
        if (FID) console.log('FID:', FID);
        if (LCP) console.log('LCP:', LCP);
      }, 2000);
    });
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
