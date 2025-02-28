
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import { RouteErrorBoundary } from "./components/layouts/RouteErrorBoundary";
import { Toaster } from "./components/ui/sonner";
import CookieConsent from "./components/CookieConsent";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

function App() {
  return (
    <Router>
      <RouteErrorBoundary>
        <ScrollToTop />
        <Header />
        <Routes />
        <Footer />
        <Toaster />
        <CookieConsent />
      </RouteErrorBoundary>
    </Router>
  );
}

export default App;

