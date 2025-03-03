
import React, { useEffect, Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import { RouteErrorBoundary } from "./components/layouts/RouteErrorBoundary";
import CookieConsent from "./components/CookieConsent";
import { NavigationProvider } from "./contexts/NavigationContext";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import LoadingSpinner from "@/components/LoadingSpinner";
import GoogleMapsProvider from "@/components/providers/GoogleMapsProvider";
import ErrorBoundaryProvider from "@/components/providers/ErrorBoundaryProvider";

function App() {
  // Log when the app is mounted for debugging purposes
  useEffect(() => {
    console.log('App mounted');
    console.log('App running at:', window.location.href);
    console.log('App domain:', window.location.hostname);
  }, []);
  
  return (
    <ErrorBoundaryProvider>
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
    </ErrorBoundaryProvider>
  );
}

export default App;
