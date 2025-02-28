
import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, ShieldCheck, Star, Clock, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

interface EnhancedServicesHeroProps {
  title: string;
  description: string;
  image?: string;
  serviceName: string;
  serviceLabel?: string;
}

const EnhancedServicesHero: React.FC<EnhancedServicesHeroProps> = ({ 
  title, 
  description, 
  image,
  serviceName,
  serviceLabel = "Professional Service"
}) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary/90 to-primary-hover text-white relative overflow-hidden">
      {/* Background pattern elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full bg-white/20 blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[5%] w-80 h-80 rounded-full bg-secondary/30 blur-3xl"></div>
        <div className="absolute top-[60%] right-[20%] w-40 h-40 rounded-full bg-secondary/20 blur-2xl"></div>
        <div className="absolute bottom-[30%] left-[25%] w-56 h-56 rounded-full bg-white/10 blur-3xl"></div>
      </div>
      
      {/* SVG Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#FFA500" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,165.3C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6">
              <span className="flex items-center text-white/90 font-medium">
                <ShieldCheck className="h-5 w-5 mr-2 text-secondary" />
                {serviceLabel}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-sm">
              {title}
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed"
            >
              {description}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Button 
                size="lg" 
                variant="secondary" 
                asChild 
                className="text-primary font-semibold hover:text-primary-dark hover:bg-secondary-hover text-base sm:text-lg py-6 px-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href="tel:2017482070" className="flex items-center">
                  <Phone className="mr-3 h-5 w-5" />
                  (201) 748-2070
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild 
                className="border-2 border-white text-white bg-transparent hover:bg-white/15 transition-all duration-300 text-base sm:text-lg py-6 px-6 shadow-lg hover:shadow-xl"
              >
                <Link to="/book-online" className="flex items-center">
                  Book Online
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
            
            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-10"
            >
              <div className="flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <span className="ml-2 text-white/90">Trusted Service</span>
              </div>
              
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-white/90">Licensed & Insured</span>
              </div>
              
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-white/90">Available 24/7</span>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-xl">
              <div className="relative mb-8">
                <div className="absolute -top-10 -left-10 w-20 h-20 bg-secondary/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-secondary/20 rounded-full blur-xl"></div>
                <div className="text-center relative">
                  <div className="inline-block p-4 rounded-full bg-secondary/20 mb-4">
                    <ShieldCheck className="h-12 w-12 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold">Fast {serviceName} Service</h2>
                  <p className="text-white/80 mt-2">
                    Professional, reliable, and efficient security solutions
                  </p>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-secondary/20 p-1 rounded-full mr-3 mt-1">
                    <Wrench className="h-4 w-4 text-secondary" />
                  </div>
                  <span>Trained and certified locksmith technicians</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary/20 p-1 rounded-full mr-3 mt-1">
                    <Clock className="h-4 w-4 text-secondary" />
                  </div>
                  <span>Quick response time for urgent situations</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary/20 p-1 rounded-full mr-3 mt-1">
                    <Wrench className="h-4 w-4 text-secondary" />
                  </div>
                  <span>Advanced tools and latest techniques</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary/20 p-1 rounded-full mr-3 mt-1">
                    <ShieldCheck className="h-4 w-4 text-secondary" />
                  </div>
                  <span>Fully insured service for your peace of mind</span>
                </li>
              </ul>
              
              <Button 
                className="w-full bg-secondary hover:bg-secondary-hover text-primary font-semibold shadow-lg hover:shadow-xl transition-all duration-300" 
                size="lg" 
                asChild
              >
                <a href="tel:2017482070" className="flex items-center justify-center py-6">
                  <Phone className="mr-2 h-5 w-5" />
                  Call For Assistance
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedServicesHero;
