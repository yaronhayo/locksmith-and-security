
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CTASectionProps {
  categoryName: string;
}

const CTASection: React.FC<CTASectionProps> = ({ categoryName }) => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-hover via-primary to-primary-hover"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="white" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-secondary/20 translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-secondary/10 -translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Professional {categoryName} Services?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Our team of experienced locksmiths is ready to help with all your {categoryName.toLowerCase()} security needs. 
            We provide reliable service throughout North Bergen and surrounding areas with a commitment to quality and customer satisfaction.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary-hover text-primary font-semibold py-6 px-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              asChild
            >
              <a href="tel:2017482070" className="flex items-center">
                <Phone className="mr-3 h-5 w-5" />
                <span>Call (201) 748-2070</span>
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white hover:bg-white/15 text-white py-6 px-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              asChild
            >
              <Link to="/contact" className="flex items-center">
                <span>Request Service</span>
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          
          {/* Trust badge */}
          <div className="mt-12 inline-block bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full border border-white/20">
            <span className="text-white/90">Licensed & Insured Professional Service</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
