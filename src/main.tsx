
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './components/ErrorFallback'
import LoadingSpinner from './components/LoadingSpinner'
import { toast } from 'sonner'
import { Toaster } from './components/ui/sonner'

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
})

// Enhanced error logging function
const logError = (error: any, info: string) => {
  console.error(`[Error] ${info}:`, error);
  
  // Log additional information that might help debug
  if (error?.stack) {
    console.error('[Stack]:', error.stack);
  }
  
  // Check for specific error types
  if (error?.name === 'ChunkLoadError' || (error?.message && error.message.includes('Loading chunk'))) {
    console.error('[ChunkLoadError] This might be a code splitting issue');
  }

  // Log browser information for cross-domain debugging
  console.error('[Browser Info]', {
    userAgent: navigator.userAgent,
    location: window.location.toString(),
    host: window.location.host,
    protocol: window.location.protocol,
    pathname: window.location.pathname,
    search: window.location.search,
    href: window.location.href,
    origin: window.location.origin
  });
}

// Initialize hasRendered property
if (typeof window !== 'undefined') {
  window.hasRendered = false;
}

// Add global error handler to log any unhandled errors
if (typeof window !== 'undefined') {
  window.addEventListener('error', (event) => {
    logError(event.error, 'Global error caught');
    
    // Show toast notification for errors
    toast.error('An error occurred. Please try refreshing the page.');
  });

  window.addEventListener('unhandledrejection', (event) => {
    logError(event.reason, 'Unhandled promise rejection');
    
    // Show toast notification for promise rejections
    toast.error('An error occurred with a background task. Please try refreshing the page.');
  });
  
  // Try to detect if we're in a white screen situation
  setTimeout(() => {
    if (window.hasRendered === false) {
      console.error('Potential white screen detected - application did not render within 5 seconds');
      
      // Try to render a basic message if possible
      const rootElement = document.getElementById('root');
      if (rootElement) {
        rootElement.innerHTML = `
          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; font-family: system-ui, sans-serif;">
            <h1 style="color: #E11D48; margin-bottom: 1rem;">Application Loading Error</h1>
            <p style="margin-bottom: 1rem;">We're having trouble loading the application. Please try refreshing the page.</p>
            <p style="margin-bottom: 1rem; font-size: 0.875rem; color: #6B7280;">If the problem persists, please try clearing your browser cache.</p>
            <button style="background: #2563EB; color: white; padding: 0.5rem 1rem; border: none; border-radius: 0.25rem; cursor: pointer;" onclick="location.reload()">Reload Page</button>
            <p style="margin-top: 1rem; font-size: 0.75rem; color: #6B7280;">Technical info: ${window.location.toString()}</p>
            <p style="margin-top: 0.5rem; font-size: 0.75rem; color: #6B7280;">CSP issues may prevent scripts from loading. Check console for details.</p>
          </div>
        `;
      }
    }
  }, 5000);
}

// Check for CSP issues that might prevent scripts from loading
console.log('Checking for potential CSP issues at startup...');
try {
  // Try to detect if there are elements or resources that might be blocked by CSP
  if (document.querySelector('script[src*="googletagmanager.com"]') ||
      document.querySelector('script[src*="clarity.ms"]') ||
      document.querySelector('script[src*="gpteng.co"]')) {
    console.log('External scripts are present in the document, checking if they loaded...');
    
    // Create a test function to see if external scripts are accessible
    if (typeof window.dataLayer === 'undefined' || 
        typeof window.clarity === 'undefined') {
      console.warn('External analytics scripts appear to be blocked. This may indicate CSP issues.');
    }
  }
} catch (error) {
  console.error('Error while checking for CSP issues:', error);
}

// Render the application with error boundaries
const renderApp = () => {
  console.log('Starting application render...');
  const rootElement = document.getElementById('root');
  
  if (!rootElement) {
    console.error('Root element not found');
    return;
  }
  
  try {
    console.log('Creating React root...');
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <ErrorBoundary 
          FallbackComponent={ErrorFallback}
          onError={(error, info) => {
            logError(error, `Error boundary caught error: ${info.componentStack}`);
          }}
        >
          <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center"><LoadingSpinner size="lg" text="Loading application..." /></div>}>
            <QueryClientProvider client={queryClient}>
              <App />
              <Toaster />
            </QueryClientProvider>
          </React.Suspense>
        </ErrorBoundary>
      </React.StrictMode>,
    );
    
    console.log('Application rendered successfully');
    if (typeof window !== 'undefined') {
      window.hasRendered = true;
    }
  } catch (error) {
    logError(error, 'Failed to render application');
    
    // Attempt to render a minimal error message if regular rendering fails
    rootElement.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center; justify-center; height: 100vh; font-family: system-ui, sans-serif;">
        <h1 style="color: #E11D48; margin-bottom: 1rem;">Application Error</h1>
        <p style="margin-bottom: 1rem;">We're sorry, but something went wrong.</p>
        <p style="margin-bottom: 1rem; font-size: 0.875rem; color: #6B7280;">Technical details: ${error instanceof Error ? error.message : 'Unknown error'}</p>
        <button style="background: #2563EB; color: white; padding: 0.5rem 1rem; border: none; border-radius: 0.25rem; cursor: pointer;" onclick="location.reload()">Reload Page</button>
        <p style="margin-top: 1rem; font-size: 0.75rem; color: #6B7280;">URL: ${window.location.toString()}</p>
      </div>
    `;
  }
};

// Execute the render function
console.log('Initializing application...');
renderApp();
