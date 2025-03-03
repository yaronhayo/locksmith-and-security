import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import * as ReactDOM from 'react-dom'
import App from './App.tsx'
import './index.css'
import { setupIframeObserver } from './utils/iframeUtils'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Create a new QueryClient instance with more robust error handling
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      meta: {
        onError: (error: Error) => {
          console.error('Query error:', error);
          // This prevents global error handler from catching query errors
        }
      }
    },
    mutations: {
      meta: {
        onError: (error: Error) => {
          console.error('Mutation error:', error);
          // This prevents global error handler from catching mutation errors
        }
      }
    }
  },
})

// Ensure console.error is working properly
const originalConsoleError = console.error;
console.error = (...args) => {
  originalConsoleError(...args);
  // If running in development, log additional info
  if (import.meta.env.DEV) {
    originalConsoleError('Error details for debugging:', args);
  }
};

// Function to render the error UI directly into the DOM when React fails to mount
const renderErrorUI = (errorMessage = "Application failed to load properly") => {
  console.error('Rendering fallback error UI:', errorMessage);
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = `
      <div class="error-fallback" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; padding: 20px; max-width: 500px; margin: 100px auto; text-align: center; border: 1px solid #e1e1e1; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
        <h1 style="color: #e63946; margin-bottom: 16px;">Something went wrong</h1>
        <p style="margin-bottom: 12px; color: #333;">${errorMessage}</p>
        <p style="margin-bottom: 24px; color: #666;">We're having trouble loading the application. Please try refreshing the page.</p>
        <button onclick="window.location.reload()" style="padding: 8px 16px; background: #457b9d; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 16px;">
          Refresh Page
        </button>
      </div>
    `;
  }
};

// Create a global error handler to catch initialization errors
const handleGlobalError = (event) => {
  console.error('Global error caught:', event.error);
  // Prevent the error from causing a white screen if possible
  event.preventDefault();
  
  // Render the error UI
  renderErrorUI(event.error?.message || "An unexpected error occurred");
};

// Add global error handler for regular errors
window.addEventListener('error', handleGlobalError);

// Add unhandled promise rejection handler
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
  // Prevent the error from causing a white screen if possible
  event.preventDefault();
  
  renderErrorUI(event.reason?.message || "An unexpected promise rejection occurred");
});

// Initialize iframe DOCTYPE fixer
const cleanup = setupIframeObserver();

// Add an event listener to clean up when the window is closed
window.addEventListener('beforeunload', () => {
  cleanup();
  
  // Ensure any pending promises are handled
  if (queryClient) {
    try {
      queryClient.clear();
    } catch (e) {
      console.error('Error clearing query client:', e);
    }
  }
});

// Enhanced function to load React from CDN as a fallback
const loadReactFromCDN = () => {
  console.warn('Loading React from CDN as fallback');
  return new Promise((resolve) => {
    // Check if React is already available (could have been loaded in index.html)
    if (typeof window.React !== 'undefined' && typeof window.ReactDOM !== 'undefined') {
      console.log('React and ReactDOM already available from window');
      // Assign them to the module scope
      window.React = window.React;
      window.ReactDOM = window.ReactDOM;
      resolve(true);
      return;
    }

    // Load React
    const reactScript = document.createElement('script');
    reactScript.src = 'https://unpkg.com/react@18/umd/react.production.min.js';
    reactScript.crossOrigin = 'anonymous';
    reactScript.onload = () => {
      console.log('React loaded from CDN');
      
      // Load ReactDOM
      const reactDOMScript = document.createElement('script');
      reactDOMScript.src = 'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js';
      reactDOMScript.crossOrigin = 'anonymous';
      reactDOMScript.onload = () => {
        console.log('ReactDOM loaded from CDN');
        
        // Make sure they're accessible on window
        if (typeof React !== 'undefined') window.React = React;
        if (typeof ReactDOM !== 'undefined') window.ReactDOM = ReactDOM;
        
        resolve(true);
      };
      reactDOMScript.onerror = (e) => {
        console.error('Failed to load ReactDOM from CDN', e);
        resolve(false);
      };
      document.head.appendChild(reactDOMScript);
    };
    reactScript.onerror = (e) => {
      console.error('Failed to load React from CDN', e);
      resolve(false);
    };
    document.head.appendChild(reactScript);
  });
};

// Function to safely mount the React app
async function mountApp() {
  try {
    console.log('Starting to mount app...');
    
    const rootElement = document.getElementById('root');
    if (!rootElement) {
      console.error('Root element not found');
      renderErrorUI("Root element not found");
      return;
    }
    
    // Set React on window for debugging and to make it accessible to the app
    // This is important to prevent "React is not defined" errors
    if (typeof window !== 'undefined') {
      if (typeof React !== 'undefined') {
        window.React = React;
        console.log('React set on window from import');
      }
      if (typeof ReactDOM !== 'undefined') {
        window.ReactDOM = ReactDOM;
        console.log('ReactDOM set on window from import');
      }
    }
    
    // Check if React is available
    if (typeof React === 'undefined' || typeof React.createElement !== 'function') {
      console.warn('React is not properly loaded, attempting to load from CDN');
      const success = await loadReactFromCDN();
      if (!success) {
        renderErrorUI("React initialization failed. Please try refreshing the page.");
        return;
      }
    }
    
    // Double-check React availability after potential CDN loading
    if (typeof React === 'undefined' || typeof React.createElement !== 'function') {
      console.error('React is still not available after CDN loading attempt');
      renderErrorUI("React could not be loaded. Please check your internet connection and try again.");
      return;
    }
    
    // Try creating the root
    try {
      console.log('Creating React root...');
      
      // Create React 18 root using ReactDOMClient
      const root = ReactDOMClient.createRoot(rootElement);
      
      // Try rendering the app
      console.log('Rendering app...');
      root.render(
        <React.StrictMode>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </React.StrictMode>,
      );
      
      console.info('App rendered successfully');
    } catch (renderError) {
      console.error('Error rendering React app:', renderError);
      renderErrorUI(renderError instanceof Error ? renderError.message : "Failed to render application");
    }
  } catch (error) {
    console.error('Critical error mounting React app:', error);
    renderErrorUI(error instanceof Error ? error.message : "Failed to mount application");
  }
}

// Start the mounting process
console.log('Initializing application...');
mountApp().catch(error => {
  console.error('Unhandled error in mountApp:', error);
  renderErrorUI(error instanceof Error ? error.message : "Failed during application initialization");
});

// Add a failsafe timeout to detect if the app doesn't render at all
setTimeout(() => {
  const rootElement = document.getElementById('root');
  if (rootElement && 
      (rootElement.innerHTML.trim() === '' || 
       rootElement.innerHTML.includes('loading-fallback'))) {
    console.error('Application failed to render in time');
    renderErrorUI("Application failed to render in time. This might be due to network issues or script loading errors.");
  }
}, 10000); // 10 second timeout

// Expose React to window for debugging
if (typeof window !== 'undefined') {
  window.React = React;
}
