import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import ServicesPage from "./pages/services";
import ServiceAreasPage from "./pages/service-areas";
import FAQPage from "./pages/faq";
import ReviewsPage from "./pages/reviews";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import HouseLockoutPage from "./pages/services/house-lockout";
import CarLockoutPage from "./pages/services/car-lockout";
import BusinessLockoutPage from "./pages/services/business-lockout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/service-areas" element={<ServiceAreasPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services/house-lockout" element={<HouseLockoutPage />} />
          <Route path="/services/car-lockout" element={<CarLockoutPage />} />
          <Route path="/services/business-lockout" element={<BusinessLockoutPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;