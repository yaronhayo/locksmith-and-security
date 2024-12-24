import React, { Suspense } from 'react';
import PageLayout from "@/components/layouts/PageLayout";
import HeroSection from "@/components/sections/HeroSection";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Loader2 } from "lucide-react";

// Lazy load components that are not immediately visible
const AboutSection = React.lazy(() => import("@/components/sections/AboutSection"));
const ServicesSection = React.lazy(() => import("@/components/sections/ServicesSection"));
const EmergencyServicesSection = React.lazy(() => import("@/components/sections/EmergencyServicesSection"));
const ProcessSection = React.lazy(() => import("@/components/sections/ProcessSection"));
const ServiceAreasSection = React.lazy(() => import("@/components/sections/ServiceAreasSection"));
const ReviewsSection = React.lazy(() => import("@/components/sections/ReviewsSection"));
const FAQSection = React.lazy(() => import("@/components/sections/FAQSection"));
const TrustBadgesSection = React.lazy(() => import("@/components/sections/TrustBadgesSection"));

// Loading component for Suspense fallback
const SectionLoader = () => (
  <div className="w-full h-[400px] flex items-center justify-center">
    <Loader2 className="w-8 h-8 animate-spin text-primary" />
  </div>
);

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "24/7 Locksmith Services in North Bergen",
  "description": "Professional locksmith services in North Bergen. Available 24/7 for residential, commercial, and automotive locksmith needs. Fast response and reliable service.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Locksmith & Security LLC",
    "image": "/og-image.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main Street",
      "addressLocality": "North Bergen",
      "addressRegion": "NJ",
      "postalCode": "07047",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.7795",
      "longitude": "-74.0324"
    },
    "url": "https://247locksmithandsecurity.com",
    "telephone": "+15513037874",
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  }
};

const Index = () => {
  return (
    <>
      <Helmet>
        <link 
          rel="preload" 
          href="/lovable-uploads/9b00adf3-451e-4d1c-a118-6a6f06293ec0.png" 
          as="image"
          fetchPriority="high"
        />
        <link 
          rel="preconnect" 
          href="https://fonts.googleapis.com" 
        />
        <link 
          rel="preconnect" 
          href="https://fonts.gstatic.com" 
          crossOrigin="anonymous"
        />
      </Helmet>
      <PageLayout
        title="24/7 Locksmith Services in North Bergen"
        description="Professional locksmith services in North Bergen. Available 24/7 for residential, commercial, and automotive locksmith needs. Fast response and reliable service."
        schema={schema}
        keywords="locksmith, emergency locksmith, car lockout, house lockout, business lockout, lock change, lock rekey, North Bergen locksmith"
      >
        <motion.div 
          className="flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          role="main"
          aria-label="Main content"
        >
          {/* Hero section is not lazy loaded as it's above the fold */}
          <HeroSection />
          
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
        </motion.div>
      </PageLayout>
    </>
  );
};

export default Index;