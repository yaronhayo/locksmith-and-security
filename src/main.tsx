
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
      <div style="padding: 20px; font-family: system-ui, -apple-system, sans-serif; text-align: center;">
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

// Check if React is available
if (!React || typeof React.createElement !== 'function') {
  console.error('React is not properly loaded');
  renderErrorUI("React initialization failed. Please try refreshing the page.");
  
  // Try to load React from CDN as fallback
  const reactScript = document.createElement('script');
  reactScript.src = 'https://unpkg.com/react@18/umd/react.production.min.js';
  reactScript.crossOrigin = 'anonymous';
  document.head.appendChild(reactScript);
  
  const reactDOMScript = document.createElement('script');
  reactDOMScript.src = 'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js';
  reactDOMScript.crossOrigin = 'anonymous';
  document.head.appendChild(reactDOMScript);
  
  // Attempt to mount after a delay
  setTimeout(mountApp, 1000);
} else {
  // Function to safely mount the React app
  mountApp();
}

// Function to safely mount the React app
function mountApp() {
  try {
    const rootElement = document.getElementById('root');
    if (!rootElement) {
      console.error('Root element not found');
      renderErrorUI("Root element not found");
      return;
    }
    
    // Check if React is available
    if (!React || typeof React.createElement !== 'function') {
      console.error('React is not properly loaded');
      renderErrorUI("React initialization failed. Please try refreshing the page.");
      return;
    }
    
    // Check if ReactDOM is available and has createRoot
    if (!ReactDOM || typeof ReactDOM.createRoot !== 'function') {
      console.error('ReactDOM.createRoot is not available');
      renderErrorUI("React DOM initialization failed. Please try refreshing the page.");
      return;
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
};

// Add a failsafe timeout to detect if the app doesn't render at all
setTimeout(() => {
  const rootElement = document.getElementById('root');
  if (rootElement && (!rootElement.childNodes.length || rootElement.innerHTML.trim() === '')) {
    console.error('Application failed to render in time');
    renderErrorUI("Application failed to render in time");
  }
}, 10000); // 10 second timeout

// Expose React to window for debugging
if (typeof window !== 'undefined') {
  window.React = React;
}
