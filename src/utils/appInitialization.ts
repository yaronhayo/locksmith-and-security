
/**
 * Application initialization utilities
 * Handles the rendering of the React application
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../components/ErrorFallback';
import LoadingSpinner from '../components/LoadingSpinner';
import { Toaster } from '../components/ui/sonner';
import { logError } from './errorHandlers';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
});

// Render the application with error boundaries
export const renderApp = () => {
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
      (window as any).hasRendered = true;
    }
  } catch (error) {
    logError(error, 'Failed to render application');
    
    // Attempt to render a minimal error message if regular rendering fails
    if (rootElement) {
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
  }
};

// Initialize the application
export const initializeApp = () => {
  // Wait for DOM to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderApp);
  } else {
    // Execute the render function
    console.log('Initializing application...');
    renderApp();
  }
};
