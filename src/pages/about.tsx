
import PageLayout from "@/components/layouts/PageLayout";
import MissionVision from "@/components/about/MissionVision";
import CompanyStats from "@/components/about/CompanyStats";
import CompanyValues from "@/components/about/CompanyValues";
import CompanyFeatures from "@/components/about/CompanyFeatures";
import CompanyTimeline from "@/components/about/CompanyTimeline";
import TeamSection from "@/components/about/TeamSection";
import Testimonials from "@/components/about/Testimonials";
import ContactCTA from "@/components/about/ContactCTA";
import ReviewsSection from "@/components/sections/ReviewsSection";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <PageLayout
      title="About Us | Professional Locksmith Services in North Bergen"
      description="Learn about Locksmith & Security LLC - your trusted local locksmith serving North Bergen since 2010 with professional, reliable security solutions."
      heroTitle="About Our Company"
      heroDescription="Professional locksmith services with a commitment to excellence and security"
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
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 py-12">
          <MissionVision />
          
          <motion.div 
            className="text-center mt-20 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary relative inline-block">
              Our Achievements
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/30"></span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              With years of dedicated service, we've established ourselves as a trusted name in the locksmith industry.
            </p>
          </motion.div>
          
          <CompanyStats />
          
          <CompanyValues />
          
          <motion.div 
            className="text-center mt-20 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary relative inline-block">
              Why Choose Us
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/30"></span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Discover what sets us apart and why our clients trust us with their security needs.
            </p>
          </motion.div>
          
          <CompanyFeatures />
          
          <CompanyTimeline />
          
          <TeamSection />
          
          <Testimonials />
          
          <ContactCTA />
          
          <div className="mt-20">
            <ReviewsSection />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutPage;
