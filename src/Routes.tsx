import { Routes as RouterRoutes, Route } from 'react-router-dom';
import PageLayout from "@/components/layouts/PageLayout";

// Pages
import Index from "@/pages/Index";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Services from "@/pages/services";
import Reviews from "@/pages/reviews";
import FAQ from "@/pages/faq";
import BookOnline from "@/pages/book-online";
import ServiceAreas from "@/pages/service-areas";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsConditions from "@/pages/terms-conditions";
import NotFound from "@/pages/404";

// Service Pages
import BusinessLockout from "@/pages/services/business-lockout";
import CarKeyProgram from "@/pages/services/car-key-program";
import CarLockout from "@/pages/services/car-lockout";
import HouseLockout from "@/pages/services/house-lockout";
import LockChange from "@/pages/services/lock-change";
import LockRekey from "@/pages/services/lock-rekey";
import NewCarKey from "@/pages/services/new-car-key";

// Service Area Pages
import NorthBergen from "@/pages/service-areas/north-bergen";
import UnionCity from "@/pages/service-areas/union-city";
import WestNewYork from "@/pages/service-areas/west-new-york";
import Guttenberg from "@/pages/service-areas/guttenberg";
import Weehawken from "@/pages/service-areas/weehawken";
import JerseyCity from "@/pages/service-areas/jersey-city";
import Hoboken from "@/pages/service-areas/hoboken";
import Secaucus from "@/pages/service-areas/secaucus";

const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<PageLayout><Index /></PageLayout>} />
      <Route path="/about" element={<PageLayout><About /></PageLayout>} />
      <Route path="/contact" element={<PageLayout><Contact /></PageLayout>} />
      <Route path="/services" element={<PageLayout><Services /></PageLayout>} />
      <Route path="/reviews" element={<PageLayout><Reviews /></PageLayout>} />
      <Route path="/faq" element={<PageLayout><FAQ /></PageLayout>} />
      <Route path="/book-online" element={<PageLayout><BookOnline /></PageLayout>} />
      <Route path="/service-areas" element={<PageLayout><ServiceAreas /></PageLayout>} />
      <Route path="/privacy-policy" element={<PageLayout><PrivacyPolicy /></PageLayout>} />
      <Route path="/terms-conditions" element={<PageLayout><TermsConditions /></PageLayout>} />

      {/* Service Routes */}
      <Route path="/services/business-lockout" element={<PageLayout><BusinessLockout /></PageLayout>} />
      <Route path="/services/car-key-program" element={<PageLayout><CarKeyProgram /></PageLayout>} />
      <Route path="/services/car-lockout" element={<PageLayout><CarLockout /></PageLayout>} />
      <Route path="/services/house-lockout" element={<PageLayout><HouseLockout /></PageLayout>} />
      <Route path="/services/lock-change" element={<PageLayout><LockChange /></PageLayout>} />
      <Route path="/services/lock-rekey" element={<PageLayout><LockRekey /></PageLayout>} />
      <Route path="/services/new-car-key" element={<PageLayout><NewCarKey /></PageLayout>} />

      {/* Service Area Routes */}
      <Route path="/service-areas/north-bergen" element={<PageLayout><NorthBergen /></PageLayout>} />
      <Route path="/service-areas/union-city" element={<PageLayout><UnionCity /></PageLayout>} />
      <Route path="/service-areas/west-new-york" element={<PageLayout><WestNewYork /></PageLayout>} />
      <Route path="/service-areas/guttenberg" element={<PageLayout><Guttenberg /></PageLayout>} />
      <Route path="/service-areas/weehawken" element={<PageLayout><Weehawken /></PageLayout>} />
      <Route path="/service-areas/jersey-city" element={<PageLayout><JerseyCity /></PageLayout>} />
      <Route path="/service-areas/hoboken" element={<PageLayout><Hoboken /></PageLayout>} />
      <Route path="/service-areas/secaucus" element={<PageLayout><Secaucus /></PageLayout>} />

      {/* 404 Route */}
      <Route path="*" element={<PageLayout><NotFound /></PageLayout>} />
    </RouterRoutes>
  );
};

export default Routes;