
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

// Declare hasRendered at the top level so it's accessible everywhere
let hasRendered = false;

// Add global error handler to log any unhandled errors
if (typeof window !== 'undefined') {
  window.addEventListener('error', (event) => {
    console.error('Global error caught:', event.error);
  });

  window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
  });
  
  // Try to detect if we're in a white screen situation
  setTimeout(() => {
    if (!hasRendered) {
      console.error('Potential white screen detected - application did not render within 5 seconds');
    }
  }, 5000);
}

// Render the application with error boundaries
const renderApp = () => {
  const rootElement = document.getElementById('root');
  
  if (!rootElement) {
    console.error('Root element not found');
    return;
  }
  
  try {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <ErrorBoundary 
          FallbackComponent={ErrorFallback}
          onError={(error, info) => {
            console.error('Caught error:', error, info);
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
    hasRendered = true;
  } catch (error) {
    console.error('Failed to render application:', error);
    
    // Attempt to render a minimal error message if regular rendering fails
    rootElement.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; font-family: system-ui, sans-serif;">
        <h1 style="color: #E11D48; margin-bottom: 1rem;">Application Error</h1>
        <p style="margin-bottom: 1rem;">We're sorry, but something went wrong.</p>
        <button style="background: #2563EB; color: white; padding: 0.5rem 1rem; border: none; border-radius: 0.25rem; cursor: pointer;" onclick="location.reload()">Reload Page</button>
      </div>
    `;
  }
};

// Execute the render function
renderApp();
