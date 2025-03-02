
import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCategoryFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FeaturesSectionProps {
  features: ServiceCategoryFeature[];
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ features }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-lg p-6 border border-gray-100 hover:shadow-md transition-shadow"
        >
          <div className="text-secondary mb-4">
            {feature.icon}
          </div>
          <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default FeaturesSection;
