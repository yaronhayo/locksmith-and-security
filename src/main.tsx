
import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import * as ReactDOM from 'react-dom'
import App from './App.tsx'
import './index.css'
import { setupIframeObserver } from './utils/iframeUtils'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Create a new QueryClient instance with more robust error handling and timeouts
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes
      // Set reasonable timeouts to prevent hanging requests
      retryDelay: attempt => Math.min(1000 * 2 ** attempt, 30000),
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

// Safer DOM patching - only if needed
const patchReactDOMRemoveChild = () => {
  try {
    // Only patch if not already patched
    if ((Node.prototype as any)._originalRemoveChild) {
      console.log('removeChild already patched, skipping');
      return;
    }
    
    // Store original method
    (Node.prototype as any)._originalRemoveChild = Node.prototype.removeChild;
    
    // Replace with safer version
    Node.prototype.removeChild = function(child) {
      if (!child) {
        console.warn('Prevented removeChild error - child is null or undefined');
        return null;
      }
      
      try {
        if (child && this.contains && this.contains(child)) {
          return (this as any)._originalRemoveChild.call(this, child);
        } else {
          console.warn('Prevented removeChild error - node is not a child of parent');
          return child;
        }
      } catch (e) {
        console.warn('Safely handled removeChild error:', e);
        return child;
      }
    };
    
    console.log('React DOM removeChild patched for error prevention');
  } catch (e) {
    console.error('Failed to patch removeChild, continuing without patch:', e);
  }
};

// Improved UI rendering function with more error checking
const renderErrorUI = (errorMessage = "Application failed to load properly") => {
  try {
    console.error('Rendering fallback error UI:', errorMessage);
    const rootElement = document.getElementById('root');
    if (!rootElement) {
      console.error('Root element not found, cannot render error UI');
      return;
    }
    
    // Only modify if the element isn't already showing an error and the error is severe
    if (!rootElement.querySelector('.error-fallback') && 
        !errorMessage.includes('ResizeObserver') && 
        !errorMessage.includes('loading chunk') &&
        !errorMessage.includes('Network request failed') && // Ignore network errors
        !errorMessage.includes('Failed to fetch')) {
      
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
  } catch (e) {
    console.error('Failed to render error UI:', e);
  }
};

// Improved global error handler with better filtering
const handleGlobalError = (event) => {
  try {
    console.error('Global error caught:', event.error);
    
    // Prevent the error from causing a white screen if possible
    if (event.preventDefault) event.preventDefault();
    
    // Skip rendering error UI for non-fatal errors
    const errorMsg = String(event.error?.message || '');
    if (errorMsg.includes('ResizeObserver') || 
        errorMsg.includes('loading chunk') ||
        errorMsg.includes('Network request failed') ||
        errorMsg.includes('Failed to fetch') ||
        errorMsg.includes('NetworkError') ||
        errorMsg.includes('404')) {
      console.warn('Ignoring non-fatal error:', errorMsg);
      return;
    }
    
    // Only render error UI for real errors
    renderErrorUI(errorMsg || "An unexpected error occurred");
  } catch (e) {
    console.error('Error in error handler (ironic):', e);
  }
};

// Improved unhandled rejection handler with better filtering
const handleUnhandledRejection = (event) => {
  try {
    console.error('Unhandled promise rejection caught:', event.reason);
    
    // Prevent the error from causing a white screen if possible
    if (event.preventDefault) event.preventDefault();
    
    // Skip non-fatal errors
    const errorMsg = String(event.reason?.message || event.reason || '');
    if (errorMsg.includes('ResizeObserver') || 
        errorMsg.includes('loading chunk') ||
        errorMsg.includes('Network request failed') ||
        errorMsg.includes('Failed to fetch') ||
        errorMsg.includes('NetworkError') ||
        errorMsg.includes('404')) {
      console.warn('Ignoring non-fatal error:', errorMsg);
      return;
    }
    
    // Handle invalidating queries
    if (queryClient) {
      try {
        queryClient.invalidateQueries({ queryKey: ['map_config'] });
      } catch (e) {
        console.warn('Error invalidating queries:', e);
      }
    }
    
    renderErrorUI(errorMsg || "An unexpected promise rejection occurred");
  } catch (e) {
    console.error('Error in unhandled rejection handler:', e);
  }
};

// Add global error handlers with improved safety
window.addEventListener('error', handleGlobalError);
window.addEventListener('unhandledrejection', handleUnhandledRejection);

// Initialize iframe DOCTYPE fixer - with safer setup
let cleanup = () => {};
try {
  cleanup = setupIframeObserver() || (() => {});
} catch (e) {
  console.error('Error setting up iframe observer:', e);
  cleanup = () => {};
}

// Use a more reliable window unload event
window.addEventListener('beforeunload', () => {
  try {
    cleanup();
    
    if (queryClient) {
      queryClient.clear();
    }
  } catch (e) {
    console.error('Error during cleanup:', e);
  }
});

// Use a safer timeout approach - INCREASE TIMEOUT and make it more robust
let globalAppTimeout = 0;
try {
  // Clear any existing timeout
  if (globalAppTimeout) clearTimeout(globalAppTimeout);
  
  // Set a longer timeout (30 seconds)
  globalAppTimeout = window.setTimeout(() => {
    console.warn('Application initialization timeout - 30 seconds elapsed');
    // Check if app is actually loaded before showing error
    const appContent = document.querySelector('main');
    if (!appContent || !appContent.children || appContent.children.length === 0) {
      renderErrorUI("Timeout while loading the application. Please try refreshing the page.");
    }
  }, 30000);
} catch (e) {
  console.error('Error setting up timeout:', e);
}

// Enhanced React CDN loading function - more resilient
const loadReactFromCDN = async () => {
  console.warn('Loading React from CDN as fallback');
  
  // Check if React is already available
  if (typeof window.React !== 'undefined' && typeof window.ReactDOM !== 'undefined') {
    console.log('React and ReactDOM already available from window');
    return true;
  }

  try {
    // Load React
    await new Promise((resolve, reject) => {
      const reactScript = document.createElement('script');
      reactScript.src = 'https://unpkg.com/react@18/umd/react.production.min.js';
      reactScript.crossOrigin = 'anonymous';
      reactScript.onload = resolve;
      reactScript.onerror = reject;
      document.head.appendChild(reactScript);
    });
    
    // Load ReactDOM
    await new Promise((resolve, reject) => {
      const reactDOMScript = document.createElement('script');
      reactDOMScript.src = 'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js';
      reactDOMScript.crossOrigin = 'anonymous';
      reactDOMScript.onload = resolve;
      reactDOMScript.onerror = reject;
      document.head.appendChild(reactDOMScript);
    });
    
    // Make sure they're accessible on window
    if (typeof React !== 'undefined') window.React = React;
    if (typeof ReactDOM !== 'undefined') window.ReactDOM = ReactDOM;
    
    return true;
  } catch (e) {
    console.error('Failed to load React from CDN:', e);
    return false;
  }
};

// Safer app mounting function with better error handling
async function mountApp() {
  try {
    console.log('Starting to mount app...');
    
    const rootElement = document.getElementById('root');
    if (!rootElement) {
      console.error('Root element not found');
      return;
    }
    
    // Set React on window for debugging
    if (typeof window !== 'undefined') {
      if (typeof React !== 'undefined') {
        window.React = React;
      }
      if (typeof ReactDOM !== 'undefined') {
        window.ReactDOM = ReactDOM;
      }
    }
    
    // Check if React is properly loaded
    if (typeof React === 'undefined' || typeof React.createElement !== 'function') {
      console.warn('React is not properly loaded, attempting to load from CDN');
      const success = await loadReactFromCDN();
      if (!success) {
        renderErrorUI("React initialization failed. Please try refreshing the page.");
        return;
      }
    }
    
    try {
      console.log('Creating React root...');
      const root = ReactDOMClient.createRoot(rootElement);
      
      console.log('Rendering app...');
      root.render(
        <React.StrictMode>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </React.StrictMode>,
      );
      
      console.info('App rendered successfully');
      
      // Clear the global timeout
      if (globalAppTimeout) {
        clearTimeout(globalAppTimeout);
        globalAppTimeout = 0;
      }
    } catch (renderError) {
      console.error('Error rendering React app:', renderError);
      renderErrorUI(renderError instanceof Error ? renderError.message : "Failed to render application");
    }
  } catch (error) {
    console.error('Critical error mounting React app:', error);
    renderErrorUI(error instanceof Error ? error.message : "Failed to mount application");
  }
}

// Start the mounting process safely
console.log('Initializing application...');
mountApp().catch(error => {
  console.error('Unhandled error in mountApp:', error);
  renderErrorUI(error instanceof Error ? error.message : "Failed during application initialization");
}).finally(() => {
  // Clear the global timeout as the promise has settled
  if (globalAppTimeout) {
    clearTimeout(globalAppTimeout);
    globalAppTimeout = 0;
  }
});

// Add a more focused loading cleanup mechanism
document.body.classList.add('loading');
window.addEventListener('load', () => {
  document.body.classList.remove('loading');
});

// Final safety timeout - clean up loading state if it persists
setTimeout(() => {
  document.body.classList.remove('loading');
}, 10000);
