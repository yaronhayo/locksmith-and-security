
import React from 'react';
import { Shield, Clock, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const ServiceDescription = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="prose max-w-none bg-white rounded-lg shadow-sm p-8 mb-12"
    >
      <p className="text-lg leading-relaxed text-gray-600 mb-8">
        A business lockout can be a critical situation that disrupts operations and affects your bottom line. 
        Our commercial locksmith team provides rapid, professional lockout services for businesses throughout 
        North Bergen and surrounding areas, ensuring minimal downtime for your business.
      </p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-2xl font-semibold mb-4 text-primary">Commercial Lockout Solutions</h3>
        <p className="text-gray-600 mb-4">Our commercial lockout services include:</p>
        <ul className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            "Emergency business lockout assistance",
            "Master key system solutions",
            "Access control system service",
            "High-security commercial locks",
            "Digital lock reprogramming",
            "Safe and vault access",
            "Security system integration",
            "Commercial door repair"
          ].map((service, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
              <span>{service}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3 className="text-2xl font-semibold mb-4 text-primary">Commercial Security Expertise</h3>
        <p className="text-gray-600 mb-4">
          Our commercial locksmiths specialize in business security systems and commercial-grade locks. 
          We understand the unique security needs of different business types and provide tailored solutions:
        </p>
        <ul className="space-y-3 mb-8">
          {[
            "Office buildings and complexes",
            "Retail stores and shopping centers",
            "Warehouses and industrial facilities",
            "Banks and financial institutions",
            "Restaurants and hospitality venues",
            "Medical facilities and clinics",
            "Educational institutions",
            "Government facilities"
          ].map((item, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center gap-3 text-gray-600"
            >
              <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <div className="flex items-center gap-6 mt-8 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center gap-2 text-primary">
          <Shield className="h-6 w-6" />
          <span className="font-medium">Licensed & Insured</span>
        </div>
        <div className="flex items-center gap-2 text-primary">
          <Clock className="h-6 w-6" />
          <span className="font-medium">24/7 Service</span>
        </div>
        <div className="flex items-center gap-2 text-primary">
          <Building2 className="h-6 w-6" />
          <span className="font-medium">All Business Types</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceDescription;
