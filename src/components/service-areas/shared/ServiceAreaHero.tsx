
import React from "react";
import { motion } from "framer-motion";
import { useLocations } from "@/hooks/useLocations";
import { Button } from "@/components/ui/button";
import { ChevronRight, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export interface ServiceAreaHeroProps {
  areaName: string;
}

const ServiceAreaHero = ({ areaName }: ServiceAreaHeroProps) => {
  // Use the locations hook to get location info
  const { getLocationBySlug } = useLocations();
  const location = getLocationBySlug(areaName.toLowerCase().replace(/\s+/g, "-"));
  
  return (
    <div className="relative bg-gradient-to-r from-primary/90 to-primary py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              24/7 Locksmith Service in {areaName}
            </h1>
            <p className="text-xl text-white/90 mb-6">
              Professional, reliable emergency locksmith services available day and night. 
              We'll be at your location in {location?.responseTime || "30"} minutes or less.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="flex items-center bg-white/10 text-white rounded-full px-4 py-2">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Fast Service in {areaName}</span>
              </div>
              <div className="flex items-center bg-white/10 text-white rounded-full px-4 py-2">
                <Phone className="w-4 h-4 mr-2" />
                <span>24/7 Emergency</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                <a href="tel:2017482070" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
              
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/book-online" className="flex items-center">
                  Book Online
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            className="relative hidden md:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Fast Response in {areaName}</h3>
              <p className="mb-4 text-gray-600">
                Locked out? Lost your keys? Need a lock change? 
                Our professional locksmith team is just a call away.
              </p>
              <div className="bg-primary/5 p-4 rounded-lg mb-4">
                <div className="flex items-center mb-2">
                  <MapPin className="text-primary mr-2 h-5 w-5" />
                  <span className="font-medium">{areaName}, NJ</span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-primary mr-2 h-5 w-5" />
                  <a href="tel:2017482070" className="font-medium text-primary">(201) 748-2070</a>
                </div>
              </div>
              <Button className="w-full">
                <Link to="/book-online" className="flex items-center justify-center w-full">
                  Schedule Service Now
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaHero;
