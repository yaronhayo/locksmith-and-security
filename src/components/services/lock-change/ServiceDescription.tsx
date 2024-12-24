import { Shield, Lock } from "lucide-react";
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
        Whether you've recently moved into a new home, lost your keys, or simply want to upgrade 
        your security, our professional lock change service ensures your property remains secure. 
        We work with all major lock brands and can recommend the best security solutions for your needs.
      </p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-2xl font-semibold mb-6 text-primary">Comprehensive Lock Change Solutions</h3>
        <p className="text-gray-600 mb-4">Our lock change services include:</p>
        <ul className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            "Residential lock replacement",
            "High-security lock installation",
            "Smart lock upgrades",
            "Deadbolt installation",
            "Master key system setup",
            "Security assessment",
            "Lock grade upgrades"
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
        <h3 className="text-2xl font-semibold mb-6 text-primary">Professional Lock Change Process</h3>
        <p className="text-gray-600 mb-4">
          Our lock change service follows a systematic approach to ensure your security:
        </p>
        <ul className="space-y-3 mb-8">
          {[
            "Security assessment and consultation",
            "Lock type and grade recommendation",
            "Professional installation",
            "Quality testing and verification",
            "Key management setup"
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
      </div>
    </motion.div>
  );
};

export default ServiceDescription;