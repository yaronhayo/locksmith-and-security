
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const EmergencyCallout = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-primary text-white rounded-xl p-8 text-center"
    >
      <h2 className="text-2xl font-semibold mb-4">
        Need Emergency Locksmith Service?
      </h2>
      <p className="text-white/90 mb-6">
        Our certified technicians provide professional emergency locksmith services 24/7.
        Licensed and insured experts ready to assist with your security needs.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button 
          size="lg" 
          variant="outline" 
          className="border border-white text-white bg-transparent hover:bg-white/10" 
          asChild
        >
          <a href="tel:2017482070" className="flex items-center">
            <Phone className="mr-2 h-5 w-5" />
            Call (201) 748-2070
          </a>
        </Button>
        <Button 
          size="lg" 
          variant="secondary" 
          className="text-white hover:text-black"
          asChild
        >
          <Link to="/book-online">
            Book Online
          </Link>
        </Button>
      </div>
    </motion.div>
  );
};

export default EmergencyCallout;
