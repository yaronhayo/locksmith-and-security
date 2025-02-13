
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Routes from "./Routes";
import CookieConsent from "./components/CookieConsent";
import { Toaster } from "./components/ui/toaster";
import "./App.css";

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
      <BrowserRouter>
        <Routes />
        <CookieConsent />
        <Toaster />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
