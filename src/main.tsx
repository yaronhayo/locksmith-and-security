
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { setupIframeDocTypeFixer } from './utils/iframeUtils'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Create a new QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
})

// Function to render the error UI directly into the DOM when React fails to mount
const renderErrorUI = (errorMessage = "Application failed to load properly") => {
  console.error('Rendering fallback error UI:', errorMessage);
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = `
      <div class="error-fallback">
        <h1 style="color: #e63946;">Something went wrong</h1>
        <p>${errorMessage}</p>
        <p>We're having trouble loading the application. Please try refreshing the page.</p>
        <button onclick="window.location.reload()" style="padding: 8px 16px; background: #457b9d; color: white; border: none; border-radius: 4px; cursor: pointer; margin-top: 16px;">
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
  renderErrorUI(event.reason?.message || "An unexpected promise rejection occurred");
});

// Initialize iframe DOCTYPE fixer
const cleanup = setupIframeDocTypeFixer();

// Add an event listener to clean up when the window is closed
window.addEventListener('beforeunload', () => {
  cleanup();
});

// Function to try loading React from CDN as a fallback
const loadReactFromCDN = () => {
  console.warn('Loading React from CDN as fallback');
  return new Promise((resolve) => {
    // Check if React is already available
    if (typeof React !== 'undefined' && typeof ReactDOM !== 'undefined') {
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
        resolve(true);
      };
      reactDOMScript.onerror = () => {
        console.error('Failed to load ReactDOM from CDN');
        resolve(false);
      };
      document.head.appendChild(reactDOMScript);
    };
    reactScript.onerror = () => {
      console.error('Failed to load React from CDN');
      resolve(false);
    };
    document.head.appendChild(reactScript);
  });
};

// Function to safely mount the React app
async function mountApp() {
  try {
    const rootElement = document.getElementById('root');
    if (!rootElement) {
      console.error('Root element not found');
      renderErrorUI("Root element not found");
      return;
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
    
    // Check if ReactDOM is available and has createRoot
    if (typeof ReactDOM === 'undefined' || typeof ReactDOM.createRoot !== 'function') {
      console.error('ReactDOM.createRoot is not available');
      renderErrorUI("React DOM initialization failed. Please try refreshing the page.");
      return;
    }
    
    // Remove loading fallback content
    while (rootElement.firstChild) {
      rootElement.removeChild(rootElement.firstChild);
    }
    
    // Try creating the root
    try {
      const root = ReactDOM.createRoot(rootElement);
      
      // Try rendering the app
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
mountApp();

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
