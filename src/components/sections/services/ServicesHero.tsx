
import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ServicesHeroProps {
  title: string;
  description: string;
}

const ServicesHero: React.FC<ServicesHeroProps> = ({ title, description }) => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-xl mb-8 text-white/90">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="border border-white text-white bg-transparent hover:bg-white/10 transition-colors duration-200"
            >
              <a href="tel:2017482070" className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                (201) 748-2070
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="secondary" 
              asChild 
              className="text-primary hover:text-black transition-colors duration-200"
            >
              <Link to="/book-online" className="flex items-center">
                Book Online
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
