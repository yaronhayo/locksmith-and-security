import { BrowserRouter } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import Routes from "./Routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import CookieConsent from "./components/CookieConsent";
import "./App.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes />
          </main>
          <Footer />
          <ScrollToTop />
          <CookieConsent />
          <Toaster position="top-right" />
        </div>
        <Analytics />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;