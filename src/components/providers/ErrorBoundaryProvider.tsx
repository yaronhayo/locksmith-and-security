
import React, { useEffect, ReactNode } from 'react';

interface ErrorBoundaryProviderProps {
  children: ReactNode;
}

const ErrorBoundaryProvider: React.FC<ErrorBoundaryProviderProps> = ({ children }) => {
  useEffect(() => {
    // Listen for unhandled errors
    const handleError = (event: ErrorEvent) => {
      console.error('Unhandled error:', event.error);
      
      // Check if the error is related to CORS or CSP
      const errorStr = event.error?.toString() || event.message;
      if (errorStr.includes('CORS') || errorStr.includes('Content Security Policy')) {
        console.error('Possible CORS or CSP issue detected. Check network tab for blocked resources.');
      }
    };
    
    // Track network errors
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error('Unhandled promise rejection:', event.reason);
      
      // Check for network failures that might indicate domain issues
      if (event.reason instanceof TypeError && 
          event.reason.message.includes('Failed to fetch')) {
        console.error('Network request failed. This might be due to CORS policy or network connectivity.');
      }
    };
    
    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    
    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);
  
  return <>{children}</>;
};

export default ErrorBoundaryProvider;
