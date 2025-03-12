
import { memo } from 'react';
import { motion } from 'framer-motion';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronRight, PhoneCall } from 'lucide-react';
import { useLocation } from '@/hooks/useLocations';

interface ServiceAreaHeroProps {
  location: string;
}

const ServiceAreaHero = memo(({ location }: ServiceAreaHeroProps) => {
  const { data: locationData } = useLocation(location);
  
  return (
    <div className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark" />
      
      {/* Texture Overlay */}
      <div 
        className="absolute inset-0 bg-repeat opacity-10" 
        style={{ backgroundImage: 'url("/lovable-uploads/pattern.png")' }}
      />
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            24/7 Locksmith Services in {locationData?.name || location}
          </motion.h1>
          
          <motion.p 
            className="text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Professional, reliable locksmith services for residents and businesses in {locationData?.name || location}. 
            Available 24/7 for all your emergency lockout and security needs.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="#contact-form"
              className={cn(
                buttonVariants({ size: "lg" }),
                "font-medium bg-secondary hover:bg-secondary-hover"
              )}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Request Service
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
            
            <a
              href="tel:2017482070"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "font-medium border-white text-white hover:bg-white/10"
              )}
            >
              <PhoneCall className="mr-2 h-4 w-4" />
              (201) 748-2070
            </a>
          </motion.div>
          
          <motion.div
            className="mt-6 text-white/80 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="text-secondary font-bold mr-2">★</span> Licensed & Insured | NJ #13VH13153100
          </motion.div>
        </div>
      </div>
    </div>
  );
});

ServiceAreaHero.displayName = 'ServiceAreaHero';

export default ServiceAreaHero;
