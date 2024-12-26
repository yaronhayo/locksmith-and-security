import { Shield, Key, Building2, Lock } from "lucide-react";
import { motion } from "framer-motion";

const ServiceDescription = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="prose max-w-none bg-white rounded-lg shadow-sm p-8 mb-12"
    >
      <p className="text-lg leading-relaxed text-gray-600 mb-8">
        Professional commercial lock change services for businesses of all sizes. Our expert locksmiths 
        specialize in installing and replacing high-security commercial grade locks, ensuring your 
        business premises remain secure. We work with retail stores, office buildings, warehouses, 
        and industrial facilities.
      </p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-2xl font-semibold mb-4 text-primary">Commercial Lock Change Solutions</h3>
        <p className="text-gray-600 mb-4">Our comprehensive commercial lock services include:</p>
        <ul className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            "High-security commercial locks",
            "Master key system installation",
            "Panic bar replacement",
            "Electronic access control",
            "Storefront door locks",
            "Exit device installation",
            "Restricted key systems",
            "Emergency exit locks"
          ].map((service, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2"
            >
              <div className="h-2 w-2 rounded-full bg-primary" />
              {service}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3 className="text-2xl font-semibold mb-4 text-primary">Commercial Grade Security</h3>
        <p className="text-gray-600 mb-4">
          Our commercial lock change process ensures maximum security for your business:
        </p>
        <ul className="space-y-3 mb-8">
          {[
            "Security assessment and consultation",
            "Commercial grade lock selection",
            "Professional installation",
            "Master key system setup",
            "Access control integration",
            "Quality assurance testing",
            "Staff training and handover",
            "Ongoing maintenance support"
          ].map((item, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2"
            >
              <div className="h-2 w-2 rounded-full bg-primary" />
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex items-center gap-2 text-primary">
          <Shield className="h-6 w-6" />
          <span className="font-medium">Licensed & Insured</span>
        </div>
        <div className="flex items-center gap-2 text-primary">
          <Lock className="h-6 w-6" />
          <span className="font-medium">Commercial Grade</span>
        </div>
        <div className="flex items-center gap-2 text-primary">
          <Key className="h-6 w-6" />
          <span className="font-medium">Master Systems</span>
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