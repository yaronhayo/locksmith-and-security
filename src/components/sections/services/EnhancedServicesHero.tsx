
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PhoneCall, Clock, Check } from 'lucide-react';
import { getPhoneNumber } from '@/utils/phoneUtils';

interface EnhancedServicesHeroProps {
  title: string;
  description: string;
  serviceName: string;
  serviceLabel: string;
  keywords?: string[];
  locationName?: string;
  image?: string; // Add the image prop
}

const EnhancedServicesHero: React.FC<EnhancedServicesHeroProps> = ({
  title,
  description,
  serviceName,
  serviceLabel,
  keywords = [],
  locationName,
  image // Add the image prop
}) => {
  const phoneNumber = getPhoneNumber();
  
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary/95 to-primary text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-white rounded-full -mr-20 -mb-20"></div>
        <div className="absolute left-0 top-0 w-96 h-96 bg-white rounded-full -ml-20 -mt-20"></div>
      </div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              <span className="bg-white/20 text-white text-sm px-3 py-1 rounded-full">
                {serviceLabel}
              </span>
            </div>
            
            {/* SEO optimized heading structure */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              {title}
              {locationName && <span className="block text-sky-100 mt-2">{locationName}</span>}
            </h1>
            
            <p className="text-lg text-white/80 mb-8 max-w-xl">
              {description}
            </p>
            
            {/* SEO keyword list as features */}
            {keywords.length > 0 && (
              <div className="space-y-3 mb-8">
                {keywords.slice(0, 3).map((keyword, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-secondary mr-2 flex-shrink-0" />
                    <span className="text-white/90">{keyword}</span>
                  </div>
                ))}
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
                <Link to="/contact" className="flex items-center">
                  <PhoneCall className="h-5 w-5 mr-2" />
                  <span>Request Service</span>
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
                <a href={`tel:${phoneNumber.replace(/\D/g, '')}`} className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>Call Now</span>
                </a>
              </Button>
            </div>
          </motion.div>
          
          {/* Visual content - will be customized per service */}
          <motion.div
            className="relative hidden md:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative z-10 bg-white p-6 rounded-lg shadow-xl">
              <div className="aspect-[4/3] relative bg-gray-100 rounded-md overflow-hidden mb-4">
                {/* Image will be inserted dynamically based on service type */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                  {image ? (
                    <img src={image} alt={`${serviceName} service`} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-gray-500 text-sm">
                      {serviceName} Service Illustration
                    </span>
                  )}
                </div>
              </div>
              
              <h2 className="text-primary text-xl font-bold mb-2">
                Professional {serviceName} Service
              </h2>
              
              <p className="text-gray-600 text-sm mb-4">
                Our team of certified technicians provides expert {serviceName.toLowerCase()} services 
                with guaranteed results and customer satisfaction.
              </p>
              
              <div className="flex justify-between text-sm text-gray-500">
                <span>Available 24/7</span>
                <span>Licensed & Insured</span>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedServicesHero;
