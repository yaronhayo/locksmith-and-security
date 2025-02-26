
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

const HeroActions = () => {
  return (
    <motion.div 
      className="flex flex-col sm:flex-row gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <Button 
        size="lg" 
        variant="secondary" 
        className="text-base sm:text-lg group transform hover:scale-105 transition-all duration-300 hover:shadow-lg relative overflow-hidden" 
        asChild
        aria-label="Call us now"
      >
        <a href="tel:2017482070" className="inline-flex items-center">
          <Phone className="mr-2 h-5 w-5 animate-phone-ring group-hover:rotate-12 transition-transform duration-300 group-hover:text-black" aria-hidden="true" />
          <span className="relative z-10 group-hover:text-black">Call Now</span>
        </a>
      </Button>
      
      <Button 
        size="lg" 
        variant="outline" 
        className="text-base sm:text-lg bg-white/10 hover:bg-white/20 text-white border-white group transform hover:scale-105 transition-all duration-300 hover:shadow-lg backdrop-blur-sm" 
        asChild
        aria-label="View our services"
      >
        <a href="/services" className="inline-flex items-center">
          Our Services
          <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-2 group-hover:text-secondary" aria-hidden="true" />
        </a>
      </Button>
    </motion.div>
  );
};

export default HeroActions;
