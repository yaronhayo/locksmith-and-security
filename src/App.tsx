
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import { RouteErrorBoundary } from "./components/layouts/RouteErrorBoundary";
import { Toaster } from "./components/ui/sonner";
import CookieConsent from "./components/CookieConsent";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <RouteErrorBoundary>
        <ScrollToTop />
        <Routes />
        <Toaster />
        <CookieConsent />
      </RouteErrorBoundary>
    </Router>
  );
}

export default App;
