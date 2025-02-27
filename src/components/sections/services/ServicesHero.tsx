
import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

interface ServicesHeroProps {
  title: string;
  description: string;
}

const ServicesHero: React.FC<ServicesHeroProps> = ({ title, description }) => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary to-primary-hover text-white relative overflow-hidden">
      {/* Background pattern elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full bg-white/20 blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[5%] w-80 h-80 rounded-full bg-secondary/20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/20">
              <ShieldCheck className="h-8 w-8 text-secondary" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-white">
            {title}
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl mb-10 text-center text-white/90 leading-relaxed"
          >
            {description}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="border-2 border-white text-white bg-transparent hover:bg-white/15 transition-all duration-300 text-base sm:text-lg py-6 sm:py-7 px-6"
            >
              <a href="tel:2017482070" className="flex items-center">
                <Phone className="mr-3 h-5 w-5" />
                (201) 748-2070
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="secondary" 
              asChild 
              className="text-primary bg-secondary hover:bg-secondary-hover transition-all duration-300 font-medium text-base sm:text-lg py-6 sm:py-7 px-6"
            >
              <Link to="/book-online" className="flex items-center">
                Book Online
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-x-12 gap-y-4 mt-12 text-sm text-white/80"
        >
          <div className="flex items-center">
            <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>
            Licensed & Insured
          </div>
          <div className="flex items-center">
            <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>
            Available 24/7
          </div>
          <div className="flex items-center">
            <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>
            Fast Response Time
          </div>
          <div className="flex items-center">
            <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>
            Certified Technicians
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
