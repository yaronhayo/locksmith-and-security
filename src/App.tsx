
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Routes from "./Routes";
import "./App.css";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CookieConsent } from "@/components/CookieConsent";
import { Toaster } from "@/components/ui/toaster";
import { ScriptsProvider } from "@/components/providers/ScriptsProvider";

// Create a react-query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ScriptsProvider>
          <ScrollToTop />
          <Routes />
          <CookieConsent />
          <Toaster />
        </ScriptsProvider>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
