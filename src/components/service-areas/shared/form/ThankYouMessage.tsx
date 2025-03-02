
import React from "react";
import { motion } from "framer-motion";

const ThankYouMessage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-green-50 border border-green-200 text-green-700 p-4 sm:p-6 rounded-lg text-center shadow-sm"
    >
      <h3 className="text-lg sm:text-xl font-semibold mb-2">Thank You!</h3>
      <p>Your message has been sent successfully. A member of our team will contact you shortly.</p>
    </motion.div>
  );
};

export default ThankYouMessage;
