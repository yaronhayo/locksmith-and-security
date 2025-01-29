import { Suspense, lazy } from 'react';
import LoadingSpinner from "@/components/LoadingSpinner";
import HeroSection from "@/components/sections/HeroSection";

const TrustBadgesSection = lazy(() => import("@/components/sections/TrustBadgesSection"));
const ServicesSection = lazy(() => import("@/components/sections/ServicesSection"));
const EmergencyServicesSection = lazy(() => import("@/components/sections/EmergencyServicesSection"));
const ProcessSection = lazy(() => import("@/components/sections/ProcessSection"));
const AboutSection = lazy(() => import("@/components/sections/AboutSection"));
const ServiceAreasSection = lazy(() => import("@/components/sections/ServiceAreasSection"));
const ReviewsSection = lazy(() => import("@/components/sections/ReviewsSection"));
const FAQSection = lazy(() => import("@/components/sections/FAQSection"));

const HomeContent = () => {
  return (
    <main className="flex flex-col" role="main" aria-label="Main content">
      <HeroSection />
      
      <Suspense fallback={<LoadingSpinner />}>
        <TrustBadgesSection />
        
        <div className="bg-white">
          <ServicesSection />
        </div>
        
        <div className="bg-gray-50">
          <EmergencyServicesSection />
        </div>
        
        <div className="bg-white">
          <ProcessSection />
        </div>
        
        <div className="bg-gray-50">
          <AboutSection />
        </div>
        
        <div className="bg-white">
          <ServiceAreasSection />
        </div>
        
        <div className="bg-gray-50">
          <ReviewsSection />
        </div>
        
        <div className="bg-white pb-20">
          <FAQSection />
        </div>
      </Suspense>
    </main>
  );
};

export default HomeContent;