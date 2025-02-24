
import React from 'react';
import { motion } from "framer-motion";

const RealWorldExamples = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="prose max-w-none bg-white rounded-lg shadow-sm p-8 mb-12"
    >
      <h3 className="text-2xl font-semibold mb-6 text-primary">Real-World Business Lockout Scenarios</h3>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-xl font-semibold mb-3">Retail Store Emergency</h4>
          <p className="text-gray-600">
            A clothing store manager discovered their main entrance lock was jammed before opening hours. 
            Our team provided emergency assistance, ensuring the store could open for business with minimal delay.
          </p>
        </div>
        
        <div>
          <h4 className="text-xl font-semibold mb-3">Office Complex After Hours</h4>
          <p className="text-gray-600">
            An employee was locked out of their office late at night with important client files inside. 
            Our 24/7 service enabled them to retrieve crucial documents and continue their work.
          </p>
        </div>
        
        <div>
          <h4 className="text-xl font-semibold mb-3">Restaurant Lock Malfunction</h4>
          <p className="text-gray-600">
            A restaurant's back door lock malfunctioned during peak hours. Our professional locksmith 
            resolved the issue promptly while maintaining security protocols.
          </p>
        </div>
        
        <div>
          <h4 className="text-xl font-semibold mb-3">Security System Integration</h4>
          <p className="text-gray-600">
            A medical facility needed emergency access when their electronic access system failed. 
            We provided immediate entry and helped integrate a backup mechanical system.
          </p>
        </div>
      </div>

      <div className="mt-8 p-4 bg-primary/5 rounded-lg">
        <h4 className="text-xl font-semibold mb-2">Our Commitment</h4>
        <p className="text-gray-600">
          We understand that business lockouts can significantly impact your operations. Our team is available 
          24/7 to provide professional commercial locksmith services, helping minimize disruption to your business.
        </p>
      </div>
    </motion.div>
  );
};

export default RealWorldExamples;
