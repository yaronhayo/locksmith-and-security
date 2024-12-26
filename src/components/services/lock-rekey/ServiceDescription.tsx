import { Shield, Key, Building2 } from "lucide-react";
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
        Lock rekeying is a cost-effective security solution that modifies your existing locks to work with new keys, 
        making all previous keys obsolete. Our professional locksmiths specialize in residential, commercial, and 
        master key system rekeying, providing enhanced security without the need for complete lock replacement.
      </p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-2xl font-semibold mb-4 text-primary">Professional Rekey Services</h3>
        <p className="text-gray-600 mb-4">Our comprehensive rekeying solutions include:</p>
        <ul className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            "Single lock rekeying",
            "Master key system rekeying",
            "Sub-master key creation",
            "Restricted key systems",
            "High-security cylinder rekey",
            "Emergency rekey service",
            "Key control systems",
            "Security pin upgrades"
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
        <h3 className="text-2xl font-semibold mb-4 text-primary">Master Key System Rekeying</h3>
        <p className="text-gray-600 mb-4">
          Our master key system rekeying process ensures proper key hierarchy and access control:
        </p>
        <ul className="space-y-3 mb-8">
          {[
            "Security level assessment",
            "Key hierarchy planning",
            "Master key system design",
            "Cylinder reconfiguration",
            "Security pin replacement",
            "Key control implementation",
            "Access level verification",
            "System documentation"
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
          <span className="font-medium">Expert Rekeying</span>
        </div>
        <div className="flex items-center gap-2 text-primary">
          <Building2 className="h-6 w-6" />
          <span className="font-medium">All Property Types</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceDescription;