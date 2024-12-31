import { motion } from "framer-motion";
import { Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const EmergencyCallout = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-primary text-white rounded-lg p-8 mb-12"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold mb-4">Need a New Car Key Fast?</h3>
          <p className="text-lg opacity-90 mb-4">
            Lost your only car key? Our mobile key cutting service comes to you. Professional equipment 
            for all vehicle makes and models. Available 24/7 for emergency key replacement.
          </p>
          <div className="flex items-center gap-4 text-sm opacity-90">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Fast Response Time</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>24/7 Service</span>
            </div>
          </div>
        </div>
        <Button size="lg" variant="secondary" asChild className="whitespace-nowrap">
          <a href="tel:2017482070" className="text-lg">
            (201) 748-2070
          </a>
        </Button>
      </div>
    </motion.div>
  );
};

export default EmergencyCallout;