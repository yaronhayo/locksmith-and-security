import { Shield, Car, Key } from "lucide-react";
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
        Whether you've lost your only car key or need a spare for peace of mind, our professional 
        automotive locksmiths can help. We specialize in cutting and programming new keys for all 
        types of vehicles, from basic metal keys to advanced smart keys and key fobs.
      </p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-2xl font-semibold mb-6 text-primary">Our Car Key Services</h3>
        <p className="text-gray-600 mb-4">We provide comprehensive car key solutions:</p>
        <ul className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            "Basic car key cutting",
            "Transponder key programming",
            "Smart key replacement",
            "Key fob programming",
            "Push-to-start key creation",
            "Emergency key replacement",
            "Duplicate key creation",
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
        <h3 className="text-2xl font-semibold mb-6 text-primary">Professional Equipment</h3>
        <p className="text-gray-600 mb-4">
          We use state-of-the-art key cutting and programming equipment to ensure:
        </p>
        <ul className="space-y-3 mb-8">
          {[
            "Precise key cutting accuracy",
            "Compatible programming for all vehicle brands",
            "Quick service completion",
            "Long-lasting key durability",
            "Full key functionality testing"
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
          <Car className="h-6 w-6" />
          <span className="font-medium">All Vehicle Types</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceDescription;