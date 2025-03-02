
import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import { RouteErrorBoundary } from "./components/layouts/RouteErrorBoundary";
import { Toaster } from "./components/ui/sonner";
import CookieConsent from "./components/CookieConsent";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { NavigationProvider } from "./contexts/NavigationContext";

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
        <ScrollToTop />
        <NavigationProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow">
              <Routes />
            </main>
            <Footer />
          </div>
        </NavigationProvider>
        <Toaster />
        <CookieConsent />
      </RouteErrorBoundary>
    </Router>
  );
}

export default App;
