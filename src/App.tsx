import { BrowserRouter } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import { lazy, Suspense } from 'react';
import LoadingSpinner from "./components/LoadingSpinner";
import "./App.css";

// Lazy load components
const Routes = lazy(() => import("./Routes"));
const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));
const CookieConsent = lazy(() => import("./components/CookieConsent"));

// Configure React Query with performance optimizations
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
      refetchOnWindowFocus: false, // Disable automatic refetching
      cacheTime: 1000 * 60 * 30, // 30 minutes cache
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Suspense fallback={<LoadingSpinner />}>
            <Header />
            <main className="flex-grow">
              <Routes />
            </main>
            <Footer />
            <ScrollToTop />
            <CookieConsent />
            <Toaster position="top-right" />
          </Suspense>
        </div>
        <Analytics 
          mode="production"
          debug={false}
        />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;