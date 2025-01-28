import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

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
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      <div className="flex items-center space-x-4">
        <div className="bg-primary/10 p-3 rounded-full">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default AreaFeature;