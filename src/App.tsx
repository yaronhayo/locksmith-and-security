import { BrowserRouter as Router } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from "@/components/ui/toaster";
import CookieConsent from "@/components/CookieConsent";
import ScrollToTop from "@/components/ScrollToTop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Routes from '@/Routes';
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@/components/ErrorFallback";
import { useEffect } from 'react';
import { initClarity, initGoogleAnalytics } from '@/utils/analytics';

function App() {
  useEffect(() => {
    // Initialize analytics tools
    initClarity();
    initGoogleAnalytics();
  }, []);

  const handleError = (error: Error) => {
    // Log to error tracking service
    console.error("Application Error:", error);
    // Send error to Google Analytics
    if (window.gtag) {
      window.gtag('event', 'error', {
        error_name: error.name,
        error_message: error.message,
        error_stack: error.stack,
      });
    }
  };

  return (
    <ErrorBoundary 
      FallbackComponent={ErrorFallback}
      onError={handleError}
      onReset={() => {
        window.location.href = '/';
      }}
    >
      <Router>
        <ScrollToTop />
        <Header />
        <Routes />
        <Footer />
        <Toaster />
        <CookieConsent />
        <Analytics />
      </Router>
    </ErrorBoundary>
  );
}

export default App;