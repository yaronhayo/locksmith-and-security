
import React from 'react';
import { motion } from "framer-motion";
import { Shield, Award, Clock, Key, Check, Star } from "lucide-react";

const ServicesFeatures = () => {
  return (
    <section className="py-16 bg-gray-50 border-t border-b border-gray-100">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-12">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 bg-primary/20 text-primary font-medium rounded-full text-sm mb-3"
          >
            Why Choose Us
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4"
          >
            Trusted <span className="border-b-2 border-primary pb-1">Professional Service</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-primary/50 transition-colors group text-center"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors mx-auto">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors relative inline-block hover:text-primary">
              24/7 Service
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-500"></span>
            </h3>
            <p className="text-black">
              Professional service available <span className="text-primary font-medium">around the clock</span> for your security needs
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-primary/50 transition-colors group text-center"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors mx-auto">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors relative inline-block hover:text-primary">
              Licensed & Insured
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-500"></span>
            </h3>
            <p className="text-black">
              <span className="text-primary font-medium">Fully licensed</span> and insured for your peace of mind
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-primary/50 transition-colors group text-center"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors mx-auto">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors relative inline-block hover:text-primary">
              Certified Experts
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-500"></span>
            </h3>
            <p className="text-black">
              Professional technicians with <span className="text-primary font-medium">extensive training</span> and expertise
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-primary/50 transition-colors group text-center"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors mx-auto">
              <Star className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors relative inline-block hover:text-primary">
              5-Star Service
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-500"></span>
            </h3>
            <p className="text-black">
              Consistently rated <span className="text-primary font-medium">5 stars</span> by our satisfied customers
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesFeatures;
