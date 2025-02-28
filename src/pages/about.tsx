
import PageLayout from "@/components/layouts/PageLayout";
import MissionVision from "@/components/about/MissionVision";
import CompanyStats from "@/components/about/CompanyStats";
import CompanyValues from "@/components/about/CompanyValues";
import CompanyFeatures from "@/components/about/CompanyFeatures";
import Testimonials from "@/components/about/Testimonials";
import ContactCTA from "@/components/about/ContactCTA";
import ReviewsSection from "@/components/sections/ReviewsSection";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <PageLayout
      title="About Us | Professional Locksmith Services in North Bergen"
      description="Learn about Locksmith & Security LLC - your trusted local locksmith serving North Bergen since 2010 with professional, reliable security solutions."
      heroTitle="Our Story & Mission"
      heroDescription="Building trust through exceptional locksmith services and a commitment to your security"
      schema={{
        "@type": "AboutPage",
        "mainEntity": {
          "@type": "LocalBusiness",
          "name": "Locksmith & Security LLC",
          "image": "/uploads/308ce2b0-551b-48b6-b078-c7e793fa2153.png",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "North Bergen",
            "addressRegion": "NJ",
            "addressCountry": "US"
          },
          "telephone": "(551) 303-7874",
          "priceRange": "$$"
        }
      }}
    >
      <div className="bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-12">
          {/* Enhanced Mission Vision Section */}
          <MissionVision />
          
          {/* Stats with Animation */}
          <motion.div 
            className="text-center mt-20 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary relative inline-block mb-1">
              Our Achievements
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-secondary to-secondary/60 mx-auto mb-6"></div>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              With over a decade of dedicated service, we've built a reputation as North Bergen's most trusted security professionals.
            </p>
          </motion.div>
          
          <CompanyStats />
          
          {/* Values Section with Visual Enhancement */}
          <div className="relative py-16 my-12">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 rounded-3xl"></div>
            <div className="relative z-10">
              <CompanyValues />
            </div>
          </div>
          
          {/* Why Choose Us Section */}
          <motion.div 
            className="text-center mt-20 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary relative inline-block mb-1">
              Why Choose Us
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-secondary to-secondary/60 mx-auto mb-6"></div>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Discover what sets us apart and why our clients trust us with their security needs.
            </p>
          </motion.div>
          
          <CompanyFeatures />
          
          {/* Enhanced Testimonials Section */}
          <div className="py-12 mt-12">
            <Testimonials />
          </div>
          
          {/* CTA Section */}
          <ContactCTA />
          
          {/* Reviews Section */}
          <div className="mt-20">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary relative inline-block mb-1">
                Customer Reviews
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-secondary to-secondary/60 mx-auto mb-6"></div>
              <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                Read what our customers are saying about our locksmith services.
              </p>
            </motion.div>
            <ReviewsSection />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutPage;
