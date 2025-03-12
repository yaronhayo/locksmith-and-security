
import React from 'react';
import { motion } from "framer-motion";
import { Shield, Clock, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import DynamicPhoneNumber from "@/components/common/DynamicPhoneNumber";
import { usePhoneNumber } from "@/utils/phoneUtils";

const EmergencyServicesSection = () => {
  const { phoneHref } = usePhoneNumber();
  
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">24/7 Emergency Locksmith Service</h2>
          <p className="text-lg text-white/90">
            Professional locksmith assistance when you need it most. Our experienced team is ready to help with any emergency lockout situation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
          >
            <Clock className="w-12 h-12 mx-auto mb-4 text-secondary" />
            <h3 className="text-xl font-semibold mb-2 text-white">24/7 Availability</h3>
            <p className="text-white/80">
              Emergency service available around the clock, including holidays
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
          >
            <Shield className="w-12 h-12 mx-auto mb-4 text-secondary" />
            <h3 className="text-xl font-semibold mb-2 text-white">Licensed & Insured</h3>
            <p className="text-white/80">
              Professional service by certified technicians you can trust
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
          >
            <MapPin className="w-12 h-12 mx-auto mb-4 text-secondary" />
            <h3 className="text-xl font-semibold mb-2 text-white">Local Service</h3>
            <p className="text-white/80">
              Serving North Bergen and surrounding areas with dedicated service
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <Button size="lg" variant="secondary" asChild>
            <a href={phoneHref} className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Call <DynamicPhoneNumber />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default EmergencyServicesSection;
