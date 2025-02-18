
import { motion } from "framer-motion";
import { Suspense, lazy } from 'react';
import LoadingSpinner from "@/components/LoadingSpinner";

// Lazy load sections
const TrustBadgesSection = lazy(() => import("@/components/sections/TrustBadgesSection"));
const ServicesSection = lazy(() => import("@/components/sections/ServicesSection"));
const EmergencyServicesSection = lazy(() => import("@/components/sections/EmergencyServicesSection"));
const ProcessSection = lazy(() => import("@/components/sections/ProcessSection"));
const AboutSection = lazy(() => import("@/components/sections/AboutSection"));
const ServiceAreasSection = lazy(() => import("@/components/sections/ServiceAreasSection"));
const ReviewsSection = lazy(() => import("@/components/reviews/ReviewsSection"));
const FAQSection = lazy(() => import("@/components/sections/FAQSection"));

const HomeContent = () => {
  return (
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
        className="bg-gray-50"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ProcessSection />
      </motion.div>
      
      <motion.div 
        className="bg-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AboutSection />
      </motion.div>
      
      <motion.div 
        className="bg-gray-50"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ServiceAreasSection />
      </motion.div>
      
      <motion.div 
        className="bg-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ReviewsSection />
      </motion.div>
      
      <motion.div 
        className="bg-gray-50 pb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FAQSection />
      </motion.div>
    </Suspense>
  );
};

export default HomeContent;
