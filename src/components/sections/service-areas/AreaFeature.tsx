import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface AreaFeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const AreaFeature = ({ icon: Icon, title, description, index }: AreaFeatureProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
    >
      <Icon className="w-10 h-10 text-primary mb-4" />
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default AreaFeature;