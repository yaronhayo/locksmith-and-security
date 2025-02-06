import { Suspense, lazy, useEffect } from 'react';
import PageLayout from "@/components/layouts/PageLayout";
import HeroSection from "@/components/sections/HeroSection";
import LoadingSpinner from "@/components/LoadingSpinner";
import { setupPerformanceMonitoring } from "@/utils/performanceMonitoring";
import { checkAnalytics } from "@/utils/analytics";
import { homePageSchema } from "@/schemas/homePageSchema";
import { motion, AnimatePresence } from "framer-motion";

// Lazy load sections
const TrustBadgesSection = lazy(() => import("@/components/sections/TrustBadgesSection"));
const ServicesSection = lazy(() => import("@/components/sections/ServicesSection"));
const EmergencyServicesSection = lazy(() => import("@/components/sections/EmergencyServicesSection"));
const ProcessSection = lazy(() => import("@/components/sections/ProcessSection"));
const AboutSection = lazy(() => import("@/components/sections/AboutSection"));
const ServiceAreasSection = lazy(() => import("@/components/sections/ServiceAreasSection"));
const ReviewsSection = lazy(() => import("@/components/sections/ReviewsSection"));
const FAQSection = lazy(() => import("@/components/sections/FAQSection"));

// Enhanced schema with more specific data
const enhancedSchema = {
  ...homePageSchema,
  "@type": ["WebPage", "LocalBusiness"],
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "Locksmith & Security LLC",
    "image": "/lovable-uploads/950b5c4c-f0b8-4d22-beb0-66a7d7554476.png",
    "priceRange": "$$",
    "telephone": "+12017482070",
    "email": "info@247locksmithandsecurity.com",
    "areaServed": [
      {
        "@type": "City",
        "name": "North Bergen",
        "sameAs": "https://en.wikipedia.org/wiki/North_Bergen,_New_Jersey"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  }
};

const Index = () => {
  useEffect(() => {
    // Set up performance monitoring and analytics
    if (typeof window !== 'undefined') {
      setupPerformanceMonitoring();
      checkAnalytics();
    }

    // Prefetch common routes
    const prefetchRoutes = ['/services', '/contact', '/about'];
    prefetchRoutes.forEach(route => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = route;
      document.head.appendChild(link);
    });
  }, []);

  return (
    <PageLayout
      title="24/7 Emergency Locksmith Services in North Bergen, NJ | Licensed & Insured"
      description="Professional locksmith services in North Bergen. Available 24/7 for residential, commercial, and automotive locksmith needs. Fast response and reliable service. Licensed (#13VH13153100) & insured."
      schema={enhancedSchema}
      keywords="locksmith, emergency locksmith, car lockout, house lockout, business lockout, lock change, lock rekey, North Bergen locksmith, 24/7 locksmith, automotive locksmith, residential locksmith, commercial locksmith"
      ogImage="/lovable-uploads/950b5c4c-f0b8-4d22-beb0-66a7d7554476.png"
    >
      <AnimatePresence mode="wait">
        <motion.main 
          className="flex flex-col" 
          role="main" 
          aria-label="Main content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <HeroSection />
          
          <Suspense fallback={
            <div className="flex justify-center items-center min-h-[200px]">
              <LoadingSpinner />
            </div>
          }>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <TrustBadgesSection />
            </motion.div>
            
            <motion.div 
              className="bg-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ServicesSection />
            </motion.div>
            
            <motion.div 
              className="bg-gray-50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <EmergencyServicesSection />
            </motion.div>
            
            <motion.div 
              className="bg-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProcessSection />
            </motion.div>
            
            <motion.div 
              className="bg-gray-50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <AboutSection />
            </motion.div>
            
            <motion.div 
              className="bg-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ServiceAreasSection />
            </motion.div>
            
            <motion.div 
              className="bg-gray-50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ReviewsSection />
            </motion.div>
            
            <motion.div 
              className="bg-white pb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FAQSection />
            </motion.div>
          </Suspense>
        </motion.main>
      </AnimatePresence>
    </PageLayout>
  );
};

export default Index;