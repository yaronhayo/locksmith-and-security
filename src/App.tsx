
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

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <RouteErrorBoundary>
          <ScrollToTop />
          <ScriptsProvider>
            <NavigationProvider>
              <Header />
              <Routes />
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
