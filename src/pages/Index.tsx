import PageLayout from "@/components/layouts/PageLayout";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import EmergencyServicesSection from "@/components/sections/EmergencyServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ServiceAreasSection from "@/components/sections/ServiceAreasSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FAQSection from "@/components/sections/FAQSection";
import TrustBadgesSection from "@/components/sections/TrustBadgesSection";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { setupPerformanceMonitoring } from "@/utils/performanceMonitoring";
import { checkAnalytics } from "@/utils/analytics";

// Add console logging for performance monitoring
console.log('Index page render started:', new Date().toISOString());
console.time('Index page render');

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
  // Set up performance monitoring and analytics checking
  if (typeof window !== 'undefined') {
    setupPerformanceMonitoring();
    checkAnalytics();
  }

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
          onAnimationComplete={() => {
            console.timeEnd('Index page render');
            console.log('Index page render completed:', new Date().toISOString());
          }}
        >
          <HeroSection />
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
          
          <div className="bg-white">
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
          </div>
          
          <div className="bg-gray-50">
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
          </div>
          
          <div className="bg-white">
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
          </div>
          
          <div className="bg-gray-50">
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
          </div>
          
          <div className="bg-white">
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
          </div>
          
          <div className="bg-gray-50">
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
          </div>
          
          <div className="bg-white pb-20">
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
          </div>
        </motion.div>
      </PageLayout>
    </>
  );
};

export default Index;
