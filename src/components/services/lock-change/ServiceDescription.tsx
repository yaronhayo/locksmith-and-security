import { Shield, Lock, Building2 } from "lucide-react";
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
        Professional lock change services to enhance your property's security. Whether you need to upgrade 
        outdated locks, replace damaged ones, or secure a new property, our expert locksmiths provide 
        high-quality lock replacement solutions using industry-leading products and techniques.
      </p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-2xl font-semibold mb-4 text-primary">Lock Change Solutions</h3>
        <p className="text-gray-600 mb-4">Our comprehensive lock change services include:</p>
        <ul className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            "Deadbolt installation",
            "High-security lock upgrades",
            "Smart lock installation",
            "Mortise lock replacement",
            "Cylinder lock changes",
            "Master key system setup",
            "Lock grade upgrades",
            "Security assessment"
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
        <h3 className="text-2xl font-semibold mb-4 text-primary">Lock Change Process</h3>
        <p className="text-gray-600 mb-4">
          Our professional lock change service follows a systematic approach:
        </p>
        <ul className="space-y-3 mb-8">
          {[
            "Initial security assessment",
            "Lock type and grade recommendation",
            "Professional removal of old locks",
            "Expert installation of new locks",
            "Quality testing and verification",
            "Key management setup",
            "Security system integration (if applicable)",
            "User training and documentation"
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
          <Lock className="h-6 w-6" />
          <span className="font-medium">High-Security Solutions</span>
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