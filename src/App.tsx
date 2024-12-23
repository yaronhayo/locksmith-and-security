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
import BookingPage from "./pages/booking";
import HouseLockoutPage from "./pages/services/house-lockout";
import CarLockoutPage from "./pages/services/car-lockout";
import BusinessLockoutPage from "./pages/services/business-lockout";
import LockChangePage from "./pages/services/lock-change";
import LockRepairPage from "./pages/services/lock-repair";
import SecuritySystemsPage from "./pages/services/security-systems";
import KeyDuplicationPage from "./pages/services/key-duplication";
import LockInstallationPage from "./pages/services/lock-installation";

// Service Area Pages
import NorthBergenArea from "./pages/service-areas/north-bergen";
import JerseyCityArea from "./pages/service-areas/jersey-city";
import UnionCityArea from "./pages/service-areas/union-city";
import WestNewYorkArea from "./pages/service-areas/west-new-york";
import SecaucusArea from "./pages/service-areas/secaucus";
import WeehawkenArea from "./pages/service-areas/weehawken";
import HobokenArea from "./pages/service-areas/hoboken";
import GuttenbergArea from "./pages/service-areas/guttenberg";

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
          <Route path="/booking" element={<BookingPage />} />
          
          {/* Service Routes */}
          <Route path="/services/house-lockout" element={<HouseLockoutPage />} />
          <Route path="/services/car-lockout" element={<CarLockoutPage />} />
          <Route path="/services/business-lockout" element={<BusinessLockoutPage />} />
          <Route path="/services/lock-change" element={<LockChangePage />} />
          <Route path="/services/lock-repair" element={<LockRepairPage />} />
          <Route path="/services/security-systems" element={<SecuritySystemsPage />} />
          <Route path="/services/key-duplication" element={<KeyDuplicationPage />} />
          <Route path="/services/lock-installation" element={<LockInstallationPage />} />
          
          {/* Service Area Routes */}
          <Route path="/service-areas/north-bergen" element={<NorthBergenArea />} />
          <Route path="/service-areas/jersey-city" element={<JerseyCityArea />} />
          <Route path="/service-areas/union-city" element={<UnionCityArea />} />
          <Route path="/service-areas/west-new-york" element={<WestNewYorkArea />} />
          <Route path="/service-areas/secaucus" element={<SecaucusArea />} />
          <Route path="/service-areas/weehawken" element={<WeehawkenArea />} />
          <Route path="/service-areas/hoboken" element={<HobokenArea />} />
          <Route path="/service-areas/guttenberg" element={<GuttenbergArea />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;