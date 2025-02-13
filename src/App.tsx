
import { BrowserRouter as Router } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 2,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
