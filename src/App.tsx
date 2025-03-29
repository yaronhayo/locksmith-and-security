
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import { RouteErrorBoundary } from "./components/layouts/RouteErrorBoundary";
import { Toaster } from "./components/ui/sonner";
import CookieConsent from "./components/CookieConsent";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { NavigationProvider } from "./contexts/NavigationContext";
import { ScriptsProvider } from "./components/providers/ScriptsProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";

// Create a query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

// Loading fallback
const LoadingFallback = lazy(() => import('@/components/layouts/PageLoading'));

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <RouteErrorBoundary>
          <ScrollToTop />
          <ScriptsProvider>
            <NavigationProvider>
              <Header />
              <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
                <Routes />
              </Suspense>
              <Footer />
            </NavigationProvider>
          </ScriptsProvider>
          <Toaster />
          <CookieConsent />
        </RouteErrorBoundary>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
