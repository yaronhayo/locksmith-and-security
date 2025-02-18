
import { motion } from "framer-motion";
import ServiceFeatures from "./ServiceFeatures";
import ServicesList from "./ServicesList";
import TechnologyFeatures from "./TechnologyFeatures";
import VehicleBrands from "./VehicleBrands";

const ServiceDescription = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="prose max-w-none bg-white rounded-lg shadow-sm p-8 mb-12"
    >
      <p className="text-lg leading-relaxed text-gray-600 mb-8">
        Professional car key programming service for all vehicle makes and models. Our expert automotive locksmiths 
        use state-of-the-art equipment to program transponder chips, smart keys, and key fobs. Whether you need to 
        program a new key, replace a lost one, or add a spare key to your vehicle's system, we provide fast and 
        reliable on-site service.
      </p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-2xl font-semibold mb-6 text-primary">Complete Programming Solutions</h3>
        <p className="text-gray-600 mb-4">Our comprehensive car key programming services include:</p>
        <ServicesList />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3 className="text-2xl font-semibold mb-6 text-primary">Advanced Programming Technology</h3>
        <p className="text-gray-600 mb-4">
          We use professional-grade diagnostic and programming equipment to ensure:
        </p>
        <TechnologyFeatures />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h3 className="text-2xl font-semibold mb-6 text-primary">Vehicle Coverage</h3>
        <p className="text-gray-600 mb-4">
          We provide key programming for all major vehicle brands including:
        </p>
        <VehicleBrands />
      </motion.div>

      <ServiceFeatures />
    </motion.div>
  );
};

export default ServiceDescription;
