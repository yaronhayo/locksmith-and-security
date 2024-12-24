import { Shield, Key } from "lucide-react";
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
        Lock rekeying is a cost-effective alternative to complete lock replacement. Our professional 
        locksmiths can modify your existing locks to work with new keys, making all old keys useless. 
        This service is perfect for new homeowners, after tenant turnover, or when keys have been lost 
        or stolen.
      </p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-2xl font-semibold mb-6 text-primary">Comprehensive Rekey Solutions</h3>
        <p className="text-gray-600 mb-4">Our lock rekeying services include:</p>
        <ul className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            "Residential lock rekeying",
            "Commercial lock rekeying",
            "Master key system setup",
            "Security pin replacement",
            "Lock cylinder reconfiguration",
            "New key creation",
            "Security assessment",
            "Emergency rekey service"
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
        <h3 className="text-2xl font-semibold mb-6 text-primary">Why Choose Lock Rekeying?</h3>
        <p className="text-gray-600 mb-4">
          Lock rekeying offers several advantages over complete lock replacement:
        </p>
        <ul className="space-y-3 mb-8">
          {[
            "Cost-effective security solution",
            "Keeps existing hardware intact",
            "Quick turnaround time",
            "Eliminates old key access"
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
          <Key className="h-6 w-6" />
          <span className="font-medium">Same-Day Service</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceDescription;