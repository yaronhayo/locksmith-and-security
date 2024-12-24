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

function App() {
  const handleError = (error: Error) => {
    // Log to your error tracking service
    console.error("Application Error:", error);
  };

  return (
    <ErrorBoundary 
      FallbackComponent={ErrorFallback}
      onError={handleError}
      onReset={() => {
        // Reset application state if needed
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