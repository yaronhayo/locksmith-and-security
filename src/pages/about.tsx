
import PageLayout from "@/components/layouts/PageLayout";
import MissionVision from "@/components/about/MissionVision";
import CompanyStats from "@/components/about/CompanyStats";
import CompanyFeatures from "@/components/about/CompanyFeatures";
import CompanyTimeline from "@/components/about/CompanyTimeline";
import TeamSection from "@/components/about/TeamSection";
import Testimonials from "@/components/about/Testimonials";
import { Button } from "@/components/ui/button";
import ReviewsSection from "@/components/sections/ReviewsSection";
import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";

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
          
          <motion.div 
            className="flex justify-center my-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="w-full max-w-4xl bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-8 shadow-md border border-gray-100">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="rounded-full bg-primary/10 p-8">
                    <Heart className="w-16 h-16 text-primary" />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Commitment to You</h3>
                  <p className="text-gray-600 mb-6">
                    At Locksmith & Security LLC, we understand that security is about more than just locks and keys—it's about providing peace of mind. 
                    That's why we're committed to delivering reliable, professional service that you can count on, day or night.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {["Professionalism", "Reliability", "Quality", "Integrity", "Excellence"].map((value, index) => (
                      <span 
                        key={index} 
                        className="px-4 py-2 bg-white rounded-full text-primary shadow-sm border border-primary/20"
                      >
                        {value}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
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
          
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-xl shadow-lg p-8 md:p-12 mt-20 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Work with Us?</h2>
              <p className="text-white/85 mb-8 text-lg">
                Our team of professional locksmiths is ready to help with all your security needs. 
                From residential to commercial and automotive services, we're here to provide expert solutions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" asChild className="bg-white text-primary hover:bg-gray-100">
                  <a href="/contact">Contact Us Now</a>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-white border-white hover:bg-white/10">
                  <a href="/services" className="flex items-center">
                    Explore Our Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-20">
            <ReviewsSection />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutPage;
