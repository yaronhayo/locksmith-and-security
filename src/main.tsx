
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { setupIframeDocTypeFixer } from './utils/iframeUtils'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Create a global error handler to catch initialization errors
const handleGlobalError = (event: ErrorEvent) => {
  console.error('Global error caught:', event.error);
  // Prevent the error from causing a white screen if possible
  event.preventDefault();
  
  // Try to render a basic error message if the app fails to start
  const rootElement = document.getElementById('root');
  if (rootElement && !rootElement.hasChildNodes()) {
    rootElement.innerHTML = `
      <div style="padding: 20px; font-family: system-ui, -apple-system, sans-serif; text-align: center;">
        <h1 style="color: #e63946;">Something went wrong</h1>
        <p>We're having trouble loading the application. Please try refreshing the page.</p>
        <button onclick="window.location.reload()" style="padding: 8px 16px; background: #457b9d; color: white; border: none; border-radius: 4px; cursor: pointer; margin-top: 16px;">
          Refresh Page
        </button>
      </div>
    `;
  }
};

// Add global error handler
window.addEventListener('error', handleGlobalError);

// Create a new QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
})

// Create a callback function that will be triggered when reCAPTCHA is loaded
window.onRecaptchaLoaded = () => {
  console.log("reCAPTCHA API loaded successfully");
};

// Initialize iframe DOCTYPE fixer
const cleanup = setupIframeDocTypeFixer();

// Add an event listener to clean up when the window is closed
window.addEventListener('beforeunload', () => {
  cleanup();
});

// Function to safely mount the React app
const mountApp = () => {
  try {
    const rootElement = document.getElementById('root');
    if (!rootElement) {
      console.error('Root element not found');
      return;
    }
    
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </React.StrictMode>,
    );
  } catch (error) {
    console.error('Error mounting React app:', error);
  }
};

// Mount the app when the DOM is fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  mountApp();
}
