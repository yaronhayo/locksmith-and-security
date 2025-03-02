
import React from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

const FaqCallToAction = () => {
  return (
    <motion.div 
      className="mt-16 text-center bg-gradient-to-r from-gray-100 to-gray-50 rounded-lg p-8 shadow-sm max-w-4xl mx-auto border-l-4 border-[#F97316]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Our team is always here to help. Contact us anytime for immediate assistance 
        with your locksmith and security needs.
      </p>
      <Button size="lg" className="bg-[#F97316] hover:bg-[#F97316]/90">
        <a href="tel:2017482070" className="flex items-center">
          <Phone className="mr-2 h-5 w-5" />
          Call (201) 748-2070
        </a>
      </Button>
    </motion.div>
  );
};

export default FaqCallToAction;
