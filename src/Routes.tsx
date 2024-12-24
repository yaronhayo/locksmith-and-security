import { Routes as RouterRoutes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import PageLayout from "@/components/layouts/PageLayout";
import Index from "@/pages/Index";
import { Loader2 } from "lucide-react";

// Lazy load pages
const About = lazy(() => import("@/pages/about"));
const Contact = lazy(() => import("@/pages/contact"));
const Services = lazy(() => import("@/pages/services"));
const Reviews = lazy(() => import("@/pages/reviews"));
const FAQ = lazy(() => import("@/pages/faq"));
const BookOnline = lazy(() => import("@/pages/book-online"));
const ServiceAreas = lazy(() => import("@/pages/service-areas"));
const PrivacyPolicy = lazy(() => import("@/pages/privacy-policy"));
const TermsConditions = lazy(() => import("@/pages/terms-conditions"));
const NotFound = lazy(() => import("@/pages/404"));

// Lazy load service pages
const BusinessLockout = lazy(() => import("@/pages/services/business-lockout"));
const CarKeyProgram = lazy(() => import("@/pages/services/car-key-program"));
const CarLockout = lazy(() => import("@/pages/services/car-lockout"));
const HouseLockout = lazy(() => import("@/pages/services/house-lockout"));
const LockChange = lazy(() => import("@/pages/services/lock-change"));
const LockRekey = lazy(() => import("@/pages/services/lock-rekey"));
const NewCarKey = lazy(() => import("@/pages/services/new-car-key"));

// Lazy load service area pages
const NorthBergen = lazy(() => import("@/pages/service-areas/north-bergen"));
const UnionCity = lazy(() => import("@/pages/service-areas/union-city"));
const WestNewYork = lazy(() => import("@/pages/service-areas/west-new-york"));
const Guttenberg = lazy(() => import("@/pages/service-areas/guttenberg"));
const Weehawken = lazy(() => import("@/pages/service-areas/weehawken"));
const JerseyCity = lazy(() => import("@/pages/service-areas/jersey-city"));
const Hoboken = lazy(() => import("@/pages/service-areas/hoboken"));
const Secaucus = lazy(() => import("@/pages/service-areas/secaucus"));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <Loader2 className="h-8 w-8 animate-spin text-primary" />
  </div>
);

const Routes = () => {
  return (
    <RouterRoutes>
      {/* Index route - not lazy loaded */}
      <Route path="/" element={<PageLayout title="Home" description="24/7 Locksmith & Security Services"><Index /></PageLayout>} />
      
      {/* Lazy loaded routes */}
      <Route path="/about" element={
        <Suspense fallback={<LoadingSpinner />}>
          <PageLayout title="About Us" description="Learn about our locksmith services and expertise">
            <About />
          </PageLayout>
        </Suspense>
      } />
      <Route path="/contact" element={
        <Suspense fallback={<LoadingSpinner />}>
          <PageLayout title="Contact Us" description="Get in touch with our professional locksmith team">
            <Contact />
          </PageLayout>
        </Suspense>
      } />
      <Route path="/services" element={
        <Suspense fallback={<LoadingSpinner />}>
          <PageLayout title="Our Services" description="Explore our comprehensive locksmith services">
            <Services />
          </PageLayout>
        </Suspense>
      } />
      <Route path="/reviews" element={
        <Suspense fallback={<LoadingSpinner />}>
          <PageLayout title="Customer Reviews" description="See what our customers say about our services">
            <Reviews />
          </PageLayout>
        </Suspense>
      } />
      <Route path="/faq" element={
        <Suspense fallback={<LoadingSpinner />}>
          <PageLayout title="FAQ" description="Frequently asked questions about our locksmith services">
            <FAQ />
          </PageLayout>
        </Suspense>
      } />
      <Route path="/book-online" element={
        <Suspense fallback={<LoadingSpinner />}>
          <PageLayout title="Book Online" description="Schedule your locksmith service appointment online">
            <BookOnline />
          </PageLayout>
        </Suspense>
      } />
      <Route path="/service-areas" element={
        <Suspense fallback={<LoadingSpinner />}>
          <PageLayout title="Service Areas" description="Areas we serve with our locksmith services">
            <ServiceAreas />
          </PageLayout>
        </Suspense>
      } />
      <Route path="/privacy-policy" element={
        <Suspense fallback={<LoadingSpinner />}>
          <PageLayout title="Privacy Policy" description="Our privacy policy and data protection practices">
            <PrivacyPolicy />
          </PageLayout>
        </Suspense>
      } />
      <Route path="/terms-conditions" element={
        <Suspense fallback={<LoadingSpinner />}>
          <PageLayout title="Terms & Conditions" description="Terms and conditions for using our services">
            <TermsConditions />
          </PageLayout>
        </Suspense>
      } />

      {/* Service Routes */}
      <Route path="/services/business-lockout" element={
        <Suspense fallback={<LoadingSpinner />}>
          <PageLayout title="Business Lockout Services" description="Professional business lockout solutions">
            <BusinessLockout />
          </PageLayout>
        </Suspense>
      } />
      <Route path="/services/car-key-program" element={
        <Suspense fallback={<LoadingSpinner />}>
          <PageLayout title="Car Key Programming" description="Expert car key programming services">
            <CarKeyProgram />
          </PageLayout>
        </Suspense>
      } />
      <Route path="/services/car-lockout" element={
        <Suspense fallback={<LoadingSpinner />}>
          <PageLayout title="Car Lockout Services" description="24/7 car lockout assistance">
            <CarLockout />
          </PageLayout>
        </Suspense>
      } />
      <Route path="/services/house-lockout" element={
        <Suspense fallback={<LoadingSpinner />}>
          <PageLayout title="House Lockout Services" description="Emergency house lockout solutions">
            <HouseLockout />
          </PageLayout>
        </Suspense>
      } />
      <Route path="/services/lock-change" element={
        <Suspense fallback={<LoadingSpinner />}>
          <PageLayout title="Lock Change Services" description="Professional lock change and replacement">
            <LockChange />
          </PageLayout>
        </Suspense>
      } />
      <Route path="/services/lock-rekey" element={
        <Suspense fallback={<LoadingSpinner />}>
          <PageLayout title="Lock Rekey Services" description="Expert lock rekeying solutions">
            <LockRekey />
          </PageLayout>
        </Suspense>
      } />
      <Route path="/services/new-car-key" element={
        <Suspense fallback={<LoadingSpinner />}>
          <PageLayout title="New Car Key Services" description="New car key cutting and programming">
            <NewCarKey />
          </PageLayout>
        </Suspense>
      } />

      {/* Service Area Routes */}
      <Route path="/service-areas/north-bergen" element={
        <Suspense fallback={<LoadingSpinner />}>
          <PageLayout title="North Bergen Locksmith" description="Locksmith services in North Bergen">
            <NorthBergen />
          </PageLayout>
        </Suspense>
      } />
      <Route path="/service-areas/union-city" element={
        <Suspense fallback={<LoadingSpinner />}>
          <PageLayout title="Union City Locksmith" description="Locksmith services in Union City">
            <UnionCity />
          </PageLayout>
        </Suspense>
      } />
      <Route path="/service-areas/west-new-york" element={
        <Suspense fallback={<LoadingSpinner />}>
          <PageLayout title="West New York Locksmith" description="Locksmith services in West New York">
            <WestNewYork />
          </PageLayout>
        </Suspense>
      } />
      <Route path="/service-areas/guttenberg" element={
        <Suspense fallback={<LoadingSpinner />}>
          <PageLayout title="Guttenberg Locksmith" description="Locksmith services in Guttenberg">
            <Guttenberg />
          </PageLayout>
        </Suspense>
      } />
      <Route path="/service-areas/weehawken" element={
        <Suspense fallback={<LoadingSpinner />}>
          <PageLayout title="Weehawken Locksmith" description="Locksmith services in Weehawken">
            <Weehawken />
          </PageLayout>
        </Suspense>
      } />
      <Route path="/service-areas/jersey-city" element={
        <Suspense fallback={<LoadingSpinner />}>
          <PageLayout title="Jersey City Locksmith" description="Locksmith services in Jersey City">
            <JerseyCity />
          </PageLayout>
        </Suspense>
      } />
      <Route path="/service-areas/hoboken" element={
        <Suspense fallback={<LoadingSpinner />}>
          <PageLayout title="Hoboken Locksmith" description="Locksmith services in Hoboken">
            <Hoboken />
          </PageLayout>
        </Suspense>
      } />
      <Route path="/service-areas/secaucus" element={
        <Suspense fallback={<LoadingSpinner />}>
          <PageLayout title="Secaucus Locksmith" description="Locksmith services in Secaucus">
            <Secaucus />
          </PageLayout>
        </Suspense>
      } />

      {/* 404 Route */}
      <Route path="*" element={
        <Suspense fallback={<LoadingSpinner />}>
          <PageLayout title="Page Not Found" description="The page you're looking for doesn't exist">
            <NotFound />
          </PageLayout>
        </Suspense>
      } />
    </RouterRoutes>
  );
};

export default Routes;