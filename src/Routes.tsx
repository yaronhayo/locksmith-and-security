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
      <Route path="/" element={<PageLayout title="Home" description="24/7 Locksmith & Security Services"><Index /></PageLayout>} />
      <Route path="/about" element={<PageLayout title="About Us" description="Learn about our locksmith services and expertise"><About /></PageLayout>} />
      <Route path="/contact" element={<PageLayout title="Contact Us" description="Get in touch with our professional locksmith team"><Contact /></PageLayout>} />
      <Route path="/services" element={<PageLayout title="Our Services" description="Explore our comprehensive locksmith services"><Services /></PageLayout>} />
      <Route path="/reviews" element={<PageLayout title="Customer Reviews" description="See what our customers say about our services"><Reviews /></PageLayout>} />
      <Route path="/faq" element={<PageLayout title="FAQ" description="Frequently asked questions about our locksmith services"><FAQ /></PageLayout>} />
      <Route path="/book-online" element={<PageLayout title="Book Online" description="Schedule your locksmith service appointment online"><BookOnline /></PageLayout>} />
      <Route path="/service-areas" element={<PageLayout title="Service Areas" description="Areas we serve with our locksmith services"><ServiceAreas /></PageLayout>} />
      <Route path="/privacy-policy" element={<PageLayout title="Privacy Policy" description="Our privacy policy and data protection practices"><PrivacyPolicy /></PageLayout>} />
      <Route path="/terms-conditions" element={<PageLayout title="Terms & Conditions" description="Terms and conditions for using our services"><TermsConditions /></PageLayout>} />

      {/* Service Routes */}
      <Route path="/services/business-lockout" element={<PageLayout title="Business Lockout Services" description="Professional business lockout solutions"><BusinessLockout /></PageLayout>} />
      <Route path="/services/car-key-program" element={<PageLayout title="Car Key Programming" description="Expert car key programming services"><CarKeyProgram /></PageLayout>} />
      <Route path="/services/car-lockout" element={<PageLayout title="Car Lockout Services" description="24/7 car lockout assistance"><CarLockout /></PageLayout>} />
      <Route path="/services/house-lockout" element={<PageLayout title="House Lockout Services" description="Emergency house lockout solutions"><HouseLockout /></PageLayout>} />
      <Route path="/services/lock-change" element={<PageLayout title="Lock Change Services" description="Professional lock change and replacement"><LockChange /></PageLayout>} />
      <Route path="/services/lock-rekey" element={<PageLayout title="Lock Rekey Services" description="Expert lock rekeying solutions"><LockRekey /></PageLayout>} />
      <Route path="/services/new-car-key" element={<PageLayout title="New Car Key Services" description="New car key cutting and programming"><NewCarKey /></PageLayout>} />

      {/* Service Area Routes */}
      <Route path="/service-areas/north-bergen" element={<PageLayout title="North Bergen Locksmith" description="Locksmith services in North Bergen"><NorthBergen /></PageLayout>} />
      <Route path="/service-areas/union-city" element={<PageLayout title="Union City Locksmith" description="Locksmith services in Union City"><UnionCity /></PageLayout>} />
      <Route path="/service-areas/west-new-york" element={<PageLayout title="West New York Locksmith" description="Locksmith services in West New York"><WestNewYork /></PageLayout>} />
      <Route path="/service-areas/guttenberg" element={<PageLayout title="Guttenberg Locksmith" description="Locksmith services in Guttenberg"><Guttenberg /></PageLayout>} />
      <Route path="/service-areas/weehawken" element={<PageLayout title="Weehawken Locksmith" description="Locksmith services in Weehawken"><Weehawken /></PageLayout>} />
      <Route path="/service-areas/jersey-city" element={<PageLayout title="Jersey City Locksmith" description="Locksmith services in Jersey City"><JerseyCity /></PageLayout>} />
      <Route path="/service-areas/hoboken" element={<PageLayout title="Hoboken Locksmith" description="Locksmith services in Hoboken"><Hoboken /></PageLayout>} />
      <Route path="/service-areas/secaucus" element={<PageLayout title="Secaucus Locksmith" description="Locksmith services in Secaucus"><Secaucus /></PageLayout>} />

      {/* 404 Route */}
      <Route path="*" element={<PageLayout title="Page Not Found" description="The page you're looking for doesn't exist"><NotFound /></PageLayout>} />
    </RouterRoutes>
  );
};

export default Routes;