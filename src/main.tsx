
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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
