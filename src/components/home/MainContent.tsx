import { Suspense } from 'react';
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import EmergencyServicesSection from "@/components/sections/EmergencyServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ServiceAreasSection from "@/components/sections/ServiceAreasSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FAQSection from "@/components/sections/FAQSection";
import TrustBadgesSection from "@/components/sections/TrustBadgesSection";

const SectionLoader = () => (
  <div className="w-full h-[400px] flex items-center justify-center">
    <Loader2 className="w-8 h-8 animate-spin text-primary" />
  </div>
);

const MainContent = () => {
  return (
    <>
      <Suspense fallback={<SectionLoader />}>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          role="complementary"
          aria-label="Trust badges and certifications"
        >
          <TrustBadgesSection />
        </motion.section>
      </Suspense>
      
      <div className="bg-white">
        <Suspense fallback={<SectionLoader />}>
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            role="region"
            aria-label="Our services"
          >
            <ServicesSection />
          </motion.section>
        </Suspense>
      </div>
      
      <div className="bg-gray-50">
        <Suspense fallback={<SectionLoader />}>
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            role="region"
            aria-label="Emergency services"
          >
            <EmergencyServicesSection />
          </motion.section>
        </Suspense>
      </div>
      
      <div className="bg-white">
        <Suspense fallback={<SectionLoader />}>
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            role="region"
            aria-label="Our process"
          >
            <ProcessSection />
          </motion.section>
        </Suspense>
      </div>
      
      <div className="bg-gray-50">
        <Suspense fallback={<SectionLoader />}>
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            role="region"
            aria-label="About us"
          >
            <AboutSection />
          </motion.section>
        </Suspense>
      </div>
      
      <div className="bg-white">
        <Suspense fallback={<SectionLoader />}>
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            role="region"
            aria-label="Service areas"
          >
            <ServiceAreasSection />
          </motion.section>
        </Suspense>
      </div>
      
      <div className="bg-gray-50">
        <Suspense fallback={<SectionLoader />}>
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            role="region"
            aria-label="Customer reviews"
          >
            <ReviewsSection />
          </motion.section>
        </Suspense>
      </div>
      
      <div className="bg-white pb-20">
        <Suspense fallback={<SectionLoader />}>
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            role="region"
            aria-label="Frequently asked questions"
          >
            <FAQSection />
          </motion.section>
        </Suspense>
      </div>
    </>
  );
};

export default MainContent;