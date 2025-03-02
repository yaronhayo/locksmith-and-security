
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
    
    // Listen for unhandled errors
    const handleError = (event: ErrorEvent) => {
      console.error('Unhandled error:', event.error);
    };
    
    window.addEventListener('error', handleError);
    
    return () => {
      window.removeEventListener('error', handleError);
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
