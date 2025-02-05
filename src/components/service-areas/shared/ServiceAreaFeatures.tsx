import { motion } from 'framer-motion';
import { serviceAreaFeatures } from '../constants';

const ServiceAreaFeatures = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid md:grid-cols-3 gap-6"
    >
      {serviceAreaFeatures.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
          >
            <Icon className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default ServiceAreaFeatures;