
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
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-6 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group hover:border-secondary/20"
        >
          <div className="bg-primary/5 p-3 rounded-full inline-flex mb-5 group-hover:bg-secondary/10 transition-colors duration-300">
            <div className="text-primary group-hover:text-secondary transition-colors duration-300">
              {feature.icon}
            </div>
          </div>
          <h3 className="font-bold text-xl mb-3 text-primary">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default FeaturesSection;
