import { Suspense, lazy } from 'react';
import PageLayout from "@/components/layouts/PageLayout";
import HeroSection from "@/components/sections/HeroSection";
import LoadingSpinner from "@/components/LoadingSpinner";
import { setupPerformanceMonitoring } from "@/utils/performanceMonitoring";
import { checkAnalytics } from "@/utils/analytics";

// Lazy load sections to improve initial page load
const TrustBadgesSection = lazy(() => import("@/components/sections/TrustBadgesSection"));
const ServicesSection = lazy(() => import("@/components/sections/ServicesSection"));
const EmergencyServicesSection = lazy(() => import("@/components/sections/EmergencyServicesSection"));
const ProcessSection = lazy(() => import("@/components/sections/ProcessSection"));
const AboutSection = lazy(() => import("@/components/sections/AboutSection"));
const ServiceAreasSection = lazy(() => import("@/components/sections/ServiceAreasSection"));
const ReviewsSection = lazy(() => import("@/components/sections/ReviewsSection"));
const FAQSection = lazy(() => import("@/components/sections/FAQSection"));

const faqSchema = [
  {
    question: "What areas do you serve?",
    answer: "We serve North Bergen, Jersey City, Union City, West New York, Secaucus, Weehawken, Hoboken, and Guttenberg."
  },
  {
    question: "Are you available 24/7?",
    answer: "Yes, we provide 24/7 emergency locksmith services for all residential, commercial, and automotive needs."
  },
  {
    question: "How quickly can you arrive?",
    answer: "We typically arrive within 15-30 minutes for emergency calls in our service area."
  }
];

const breadcrumbs = [
  { name: "Home", item: "/" }
];

const Index = () => {
  // Set up performance monitoring and analytics checking
  if (typeof window !== 'undefined') {
    setupPerformanceMonitoring();
    checkAnalytics();
  }

  return (
    <PageLayout
      title="24/7 Emergency Locksmith Services North Bergen NJ | Professional Locksmith"
      description="Expert 24/7 locksmith services in North Bergen, NJ. Fast 15-30 minute response for residential, commercial & automotive locksmith needs. Licensed & insured professionals serving Hudson County."
      schema={{
        "@type": "WebPage",
        "@id": "https://247locksmithandsecurity.com/",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://247locksmithandsecurity.com/#website",
          "name": "Locksmith & Security LLC",
          "description": "Professional Locksmith Services in North Bergen, NJ",
          "publisher": {
            "@type": "Organization",
            "name": "Locksmith & Security LLC",
            "logo": {
              "@type": "ImageObject",
              "url": "/lovable-uploads/950b5c4c-f0b8-4d22-beb0-66a7d7554476.png"
            }
          }
        }
      }}
      keywords="emergency locksmith, 24/7 locksmith, North Bergen locksmith, car lockout, house lockout, business lockout, lock change, lock rekey, commercial locksmith, residential locksmith, automotive locksmith"
      faqSchema={faqSchema}
      breadcrumbs={breadcrumbs}
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