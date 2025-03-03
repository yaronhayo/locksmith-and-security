
import React, { useEffect, Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import { RouteErrorBoundary } from "./components/layouts/RouteErrorBoundary";
import CookieConsent from "./components/CookieConsent";
import { NavigationProvider } from "./contexts/NavigationContext";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import LoadingSpinner from "@/components/LoadingSpinner";
import GoogleMapsProvider from "@/components/providers/GoogleMapsProvider";

function App() {
  // Log when the app is mounted for debugging purposes
  useEffect(() => {
    console.log('App mounted');
    console.log('App running at:', window.location.href);
    console.log('App domain:', window.location.hostname);
    
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
  
  return (
    <Router>
      <RouteErrorBoundary>
        <NavigationProvider>
          <GoogleMapsProvider>
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><LoadingSpinner size="lg" text="Loading content..." /></div>}>
              <Routes />
            </Suspense>
            <ScrollToTopButton />
          </GoogleMapsProvider>
        </NavigationProvider>
        <CookieConsent />
      </RouteErrorBoundary>
    </Router>
  );
}

export default App;
