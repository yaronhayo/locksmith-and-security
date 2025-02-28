
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

interface ServicesHeroProps {
  title: string;
  description: string;
  image?: string;
}

const ServicesHero: React.FC<ServicesHeroProps> = ({ 
  title, 
  description, 
  image 
}) => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-primary via-primary/90 to-primary-hover text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {title}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="secondary" 
                size="lg" 
                className="text-primary font-semibold hover:bg-secondary-hover flex items-center justify-center"
                asChild
              >
                <a href="tel:2017482070">
                  <Phone className="mr-2 h-5 w-5" />
                  (201) 748-2070
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white bg-transparent hover:bg-white/10 flex items-center justify-center"
                asChild
              >
                <Link to="/book-online">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Online
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
          
          {image && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
