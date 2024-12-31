import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Clock } from "lucide-react";

const EmergencyCallout = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-primary text-white rounded-lg p-8 mb-12"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2">Need Emergency Lock Change?</h2>
          <p className="text-white/90 mb-4">
            Available 24/7 for urgent lock changes. Our professional locksmiths arrive quickly with all necessary equipment.
          </p>
          <div className="flex items-center gap-2 text-secondary">
            <Clock className="w-5 h-5" />
            <span>Fast Response Time</span>
          </div>
        </div>
        <Button size="lg" variant="secondary" asChild className="whitespace-nowrap">
          <a href="tel:2017482070" className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            Call (201) 748-2070
          </a>
        </Button>
      </div>
    </motion.div>
  );
};

export default EmergencyCallout;