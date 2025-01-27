import { motion } from 'framer-motion';
import { Feature } from './types';

interface ServiceFeaturesProps {
  features: Feature[];
}

const ServiceFeatures = ({ features }: ServiceFeaturesProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid md:grid-cols-3 gap-8 mb-16"
    >
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
          >
            <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default ServiceFeatures;