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
import { MobileMenuProvider } from "@/contexts/MobileMenuContext";

declare global {
  interface Window {
    google: any;
  }
}

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Router>
        <MobileMenuProvider>
          <ScrollToTop />
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow">
              <Routes />
            </main>
            <Footer />
          </div>
          <Toaster />
          <CookieConsent />
          <Analytics />
        </MobileMenuProvider>
      </Router>
    </ErrorBoundary>
  );
}

export default App;