
import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import { RouteErrorBoundary } from "./components/layouts/RouteErrorBoundary";
import { Toaster } from "./components/ui/sonner";
import CookieConsent from "./components/CookieConsent";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { NavigationProvider } from "./contexts/NavigationContext";
import ScrollToTopButton from "@/components/ScrollToTopButton";

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
          <Header />
          <Routes />
          <Footer />
          <ScrollToTopButton />
        </NavigationProvider>
        <Toaster />
        <CookieConsent />
      </RouteErrorBoundary>
    </Router>
  );
}

export default App;
