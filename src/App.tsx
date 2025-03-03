
import React, { useEffect, Suspense, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import { RouteErrorBoundary } from "./components/layouts/RouteErrorBoundary";
import CookieConsent from "./components/CookieConsent";
import { NavigationProvider } from "./contexts/NavigationContext";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import LoadingSpinner from "@/components/LoadingSpinner";
import GoogleMapsProvider from "@/components/providers/GoogleMapsProvider";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";

function App() {
  const [isInitialized, setIsInitialized] = useState(false);
  
  // Log when the app is mounted for debugging purposes
  useEffect(() => {
    console.log('App mounted');
    
    // Mark app as initialized
    setTimeout(() => {
      setIsInitialized(true);
      console.log('App fully initialized');
      
      // Remove any error message that might be showing
      const errorUI = document.querySelector('.error-fallback');
      if (errorUI && errorUI.parentNode) {
        try {
          errorUI.parentNode.removeChild(errorUI);
        } catch (e) {
          console.error("Error removing error UI:", e);
        }
      }
      
      // Remove loading class
      document.body.classList.remove('loading');
    }, 100);
    
    // Listen for unhandled errors
    const handleError = (event: ErrorEvent) => {
      console.error('Unhandled error in App component:', event.error);
    };
    
    window.addEventListener('error', handleError);
    
    return () => {
      window.removeEventListener('error', handleError);
      console.log('App unmounted');
    };
  }, []);
  
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // Force remove loading state
        document.body.classList.remove('loading');
        
        // Force reload the page on critical app-level errors
        window.location.reload();
      }}
    >
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
    </ErrorBoundary>
  );
}

export default App;
