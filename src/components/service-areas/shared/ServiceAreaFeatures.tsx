
import { motion } from 'framer-motion';
import { serviceAreaFeatures } from '../constants';

interface ServiceAreaFeaturesProps {
  locationName: string;
}

const ServiceAreaFeatures = ({ locationName }: ServiceAreaFeaturesProps) => {
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
            <div className="flex justify-center mb-4">
              <div className="text-primary">
                <Icon size={40} />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
            <p className="text-gray-600 text-center">{feature.description}</p>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default ServiceAreaFeatures;
