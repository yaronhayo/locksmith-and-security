
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, Clock, Shield, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EmergencyCalloutProps {
  className?: string;
}

const EmergencyCallout = ({ className = '' }: EmergencyCalloutProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`${className} bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-6 md:p-8 text-white shadow-lg`}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center mb-4">
            <AlertCircle className="h-7 w-7 mr-3" />
            <h3 className="text-2xl font-bold">Emergency Locksmith Service</h3>
          </div>
          <p className="text-white/90 mb-4 max-w-2xl">
            Locked out? Broken key? Security concerns? Our emergency locksmith team is available 24/7 
            to help you with any urgent security needs across Northern New Jersey.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-3 mb-4">
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2 text-white/70" />
              <span className="text-white/90">24/7 Availability</span>
            </div>
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-2 text-white/70" />
              <span className="text-white/90">Licensed & Insured</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2 text-white/70" />
              <span className="text-white/90">Fast Response Times</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-white text-red-600 hover:bg-white/90">
            <Phone className="mr-2 h-4 w-4" /> (201) 748-2070
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
            <Link to="/book-online">Book Online</Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default EmergencyCallout;
