import { Shield, Building2, Lock } from "lucide-react";
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
        Our commercial lock change services provide comprehensive security solutions for businesses 
        of all sizes. We understand that maintaining secure access control is crucial for protecting 
        your assets, employees, and sensitive information.
      </p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-2xl font-semibold mb-6 text-primary">Commercial Lock Solutions</h3>
        <p className="text-gray-600 mb-4">Our comprehensive business lock change services include:</p>
        <ul className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            "High-security commercial locks",
            "Master key system implementation",
            "Electronic access control",
            "Restricted key systems",
            "Door closer installation",
            "Exit device upgrades",
            "Security consultation",
            "Maintenance programs"
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
        <h3 className="text-2xl font-semibold mb-6 text-primary">Professional Expertise</h3>
        <p className="text-gray-600 mb-4">
          Our commercial locksmith specialists are highly trained professionals with extensive experience 
          in business security systems. We provide:
        </p>
        <ul className="space-y-3 mb-8">
          {[
            "Expert installation and programming",
            "24/7 emergency service availability",
            "Customized security solutions",
            "Ongoing maintenance support"
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
          <Building2 className="h-6 w-6" />
          <span className="font-medium">Commercial Grade</span>
        </div>
        <div className="flex items-center gap-2 text-primary">
          <Lock className="h-6 w-6" />
          <span className="font-medium">High Security</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceDescription;