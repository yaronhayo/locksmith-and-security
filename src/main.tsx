
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './components/ErrorFallback'
import LoadingSpinner from './components/LoadingSpinner'

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
  });
};

// Initialize hasRendered property
if (typeof window !== 'undefined') {
  window.hasRendered = false;
}

// Add global error handler to log any unhandled errors
if (typeof window !== 'undefined') {
  window.addEventListener('error', (event) => {
    logError(event.error, 'Global error caught');
  });

  window.addEventListener('unhandledrejection', (event) => {
    logError(event.reason, 'Unhandled promise rejection');
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
          </div>
        `;
      }
    }
  }, 5000);
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
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; font-family: system-ui, sans-serif;">
        <h1 style="color: #E11D48; margin-bottom: 1rem;">Application Error</h1>
        <p style="margin-bottom: 1rem;">We're sorry, but something went wrong.</p>
        <p style="margin-bottom: 1rem; font-size: 0.875rem; color: #6B7280;">Technical details: ${error instanceof Error ? error.message : 'Unknown error'}</p>
        <button style="background: #2563EB; color: white; padding: 0.5rem 1rem; border: none; border-radius: 0.25rem; cursor: pointer;" onclick="location.reload()">Reload Page</button>
      </div>
    `;
  }
};

// Execute the render function
console.log('Initializing application...');
renderApp();
