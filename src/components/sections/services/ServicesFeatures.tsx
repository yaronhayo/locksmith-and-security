
import React from 'react';
import { motion } from "framer-motion";
import { Shield, Award, Clock, Key, Check, Star } from "lucide-react";

const ServicesFeatures = () => {
  return (
    <section className="py-16 bg-gray-50 border-t border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 bg-secondary/20 text-secondary font-medium rounded-full text-sm mb-3"
          >
            Why Choose Us
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4"
          >
            Trusted <span className="border-b-2 border-secondary pb-1">Professional Service</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-secondary/50 transition-colors group"
          >
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors">
              <Clock className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-secondary transition-colors">24/7 Service</h3>
            <p className="text-gray-600">
              Professional service available <span className="text-secondary font-medium">around the clock</span> for your security needs
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-secondary/50 transition-colors group"
          >
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors">
              <Shield className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-secondary transition-colors">Licensed & Insured</h3>
            <p className="text-gray-600">
              <span className="text-secondary font-medium">Fully licensed</span> and insured for your peace of mind
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-secondary/50 transition-colors group"
          >
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors">
              <Award className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-secondary transition-colors">Certified Experts</h3>
            <p className="text-gray-600">
              Professional technicians with <span className="text-secondary font-medium">extensive training</span> and expertise
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-secondary/50 transition-colors group"
          >
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors">
              <Star className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-secondary transition-colors">5-Star Service</h3>
            <p className="text-gray-600">
              Consistently rated <span className="text-secondary font-medium">5 stars</span> by our satisfied customers
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesFeatures;
