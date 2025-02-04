import { Suspense, lazy } from 'react';
import PageLayout from "@/components/layouts/PageLayout";
import HeroSection from "@/components/sections/HeroSection";
import LoadingSpinner from "@/components/LoadingSpinner";
import { setupPerformanceMonitoring } from "@/utils/performanceMonitoring";
import { checkAnalytics } from "@/utils/analytics";
import { homePageSchema } from "@/schemas/homePageSchema";

// Lazy load sections to improve initial page load
const TrustBadgesSection = lazy(() => import("@/components/sections/TrustBadgesSection"));
const ServicesSection = lazy(() => import("@/components/sections/ServicesSection"));
const EmergencyServicesSection = lazy(() => import("@/components/sections/EmergencyServicesSection"));
const ProcessSection = lazy(() => import("@/components/sections/ProcessSection"));
const AboutSection = lazy(() => import("@/components/sections/AboutSection"));
const ServiceAreasSection = lazy(() => import("@/components/sections/ServiceAreasSection"));
const ReviewsSection = lazy(() => import("@/components/sections/ReviewsSection"));
const FAQSection = lazy(() => import("@/components/sections/FAQSection"));

const Index = () => {
  // Set up performance monitoring and analytics checking
  if (typeof window !== 'undefined') {
    setupPerformanceMonitoring();
    checkAnalytics();
  }

  return (
    <PageLayout
      title="24/7 Locksmith Services in North Bergen"
      description="Professional locksmith services in North Bergen. Available 24/7 for residential, commercial, and automotive locksmith needs. Fast response and reliable service."
      schema={homePageSchema}
      keywords="locksmith, emergency locksmith, car lockout, house lockout, business lockout, lock change, lock rekey, North Bergen locksmith"
    >
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
    </PageLayout>
  );
};

export default Index;