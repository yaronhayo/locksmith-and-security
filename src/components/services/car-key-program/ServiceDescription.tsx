import { Shield, Cpu } from "lucide-react";
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
        Our professional car key programming service ensures your new or replacement car keys 
        work perfectly with your vehicle's security system. We use state-of-the-art equipment 
        and software to program transponder chips, smart keys, and key fobs for all major vehicle brands.
      </p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-2xl font-semibold mb-6 text-primary">Comprehensive Programming Solutions</h3>
        <p className="text-gray-600 mb-4">Our car key programming services include:</p>
        <ul className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            "Transponder key programming",
            "Smart key programming",
            "Key fob programming",
            "Push-to-start key programming",
            "Proximity key programming",
            "Remote programming",
            "All vehicle makes and models"
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
        <h3 className="text-2xl font-semibold mb-6 text-primary">Professional Equipment & Expertise</h3>
        <p className="text-gray-600 mb-4">
          Our technicians use professional-grade programming equipment and software to ensure:
        </p>
        <ul className="space-y-3 mb-8">
          {[
            "Accurate programming for all key types",
            "Compatible with latest vehicle security systems",
            "Fast and efficient service",
            "Warranty on all programming services"
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
          <Cpu className="h-6 w-6" />
          <span className="font-medium">Advanced Programming Tools</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceDescription;
