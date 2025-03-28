
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
    <section className="py-24 bg-gradient-to-br from-primary via-primary/90 to-primary-hover text-white relative overflow-hidden">
      {/* Background pattern elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full bg-white/20 blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[5%] w-80 h-80 rounded-full bg-secondary/30 blur-3xl"></div>
        <div className="absolute top-[60%] right-[20%] w-40 h-40 rounded-full bg-secondary/20 blur-2xl"></div>
        <div className="absolute bottom-[30%] left-[25%] w-56 h-56 rounded-full bg-white/10 blur-3xl"></div>
      </div>
      
      {/* SVG Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="absolute bottom-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#FFA500" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,165.3C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm p-4 rounded-full border border-white/20 shadow-lg">
              <ShieldCheck className="h-8 w-8 text-secondary" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-white drop-shadow-sm">
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
              className="border-2 border-white text-white bg-transparent hover:bg-white/15 transition-all duration-300 text-base sm:text-lg py-6 sm:py-7 px-6 shadow-lg hover:shadow-xl"
            >
              <a href="tel:+12017482070" className="flex items-center">
                <Phone className="mr-3 h-5 w-5" />
                +1 (201) 748-2070
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="secondary" 
              asChild 
              className="text-primary hover:text-primary-dark transition-all duration-300 font-medium text-base sm:text-lg py-6 sm:py-7 px-6 shadow-lg hover:shadow-xl border border-secondary/20"
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
          className="flex flex-wrap justify-center gap-x-12 gap-y-4 mt-12 text-sm text-white/90"
        >
          <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
            Licensed & Insured
          </div>
          <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
            Available 24/7
          </div>
          <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
            Fast Response Time
          </div>
          <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
            Certified Technicians
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
