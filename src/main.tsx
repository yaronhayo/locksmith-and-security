
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
const handleGlobalError = (event: ErrorEvent) => {
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
      renderErrorUI("Root element not found");
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

// Mount the app when the DOM is fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  mountApp();
}
