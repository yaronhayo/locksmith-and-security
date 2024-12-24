import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import CookieConsent from "@/components/CookieConsent";
import ScrollToTop from "@/components/ScrollToTop";
import Routes from './Routes';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes />
      <Toaster />
      <CookieConsent />
    </Router>
  );
}

export default App;