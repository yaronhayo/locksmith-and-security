import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import CookieConsent from "@/components/CookieConsent";
import ScrollToTop from "@/components/ScrollToTop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Routes from '@/Routes';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes />
      <Footer />
      <Toaster />
      <CookieConsent />
    </Router>
  );
}

export default App;