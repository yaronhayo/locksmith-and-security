
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastMessage } from '@/types/toast';
import { toast } from 'sonner';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
    mutations: {
      retry: 1,
      meta: {
        onError: (error: Error) => {
          // Display error message
          const errorMessage = error.message || 'An unexpected error occurred';
          
          // Using sonner toast library which doesn't have isActive method
          toast.error(errorMessage, {
            id: errorMessage, // This prevents duplicate toasts with the same message
            duration: 5000
          });
        },
        onSuccess: (data: any) => {
          // Check if the response contains a toast message
          if (data && (data as ToastMessage).message) {
            const { message, type = 'success' } = data as ToastMessage;
            
            if (type === 'success') {
              toast.success(message, {
                id: message,
                duration: 3000
              });
            } else if (type === 'error') {
              toast.error(message, {
                id: message,
                duration: 5000
              });
            } else {
              toast(message, {
                id: message,
                duration: 3000
              });
            }
          }
        }
      }
    }
  }
});

// Add enhanced console logging to debug rendering issues
console.log('Initializing app render');

// Function to render the app with better error handling
const renderApp = () => {
  try {
    const rootElement = document.getElementById('root');
    if (!rootElement) {
      console.error('Root element not found in DOM');
      document.body.innerHTML = '<div style="color: red; padding: 20px;">Root element not found. Please check your HTML structure.</div>';
      return;
    }
    
    console.log('Root element found, attempting to render app');
    
    const root = ReactDOM.createRoot(rootElement);
    
    // Wrap the app render in a try/catch to catch any React rendering errors
    try {
      root.render(
        <React.StrictMode>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </React.StrictMode>
      );
      console.log('App rendered successfully');
    } catch (renderError) {
      console.error('Error during React rendering:', renderError);
      rootElement.innerHTML = `
        <div style="color: red; padding: 20px; font-family: sans-serif; text-align: center;">
          <h2>React Rendering Error</h2>
          <p>${renderError instanceof Error ? renderError.message : 'Unknown error during rendering'}</p>
          <button onclick="window.location.reload()" style="padding: 10px 20px; background: #1E3A8A; color: white; border: none; border-radius: 4px; cursor: pointer;">
            Reload Page
          </button>
        </div>
      `;
    }
  } catch (error) {
    console.error('Critical error initializing the app:', error);
    document.body.innerHTML = `
      <div style="color: red; padding: 20px; font-family: sans-serif; text-align: center;">
        <h2>Application Failed to Initialize</h2>
        <p>${error instanceof Error ? error.message : 'An unexpected error occurred while initializing the application.'}</p>
        <button onclick="window.location.reload()" style="padding: 10px 20px; background: #1E3A8A; color: white; border: none; border-radius: 4px; cursor: pointer;">
          Reload Page
        </button>
      </div>
    `;
  }
};

// Add window error handler to catch any unhandled errors
window.addEventListener('error', (event) => {
  console.error('Unhandled window error:', event.error || event.message);
});

// Add unhandled promise rejection handler
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});

// Execute the renderApp function
renderApp();
