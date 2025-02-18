
import { motion } from "framer-motion";

const TechnologyFeatures = () => {
  const features = [
    "Latest programming software for modern vehicles",
    "Advanced diagnostic equipment for all brands",
    "Original equipment manufacturer (OEM) quality",
    "Secure programming protocols",
    "Full testing and verification",
    "On-site mobile service"
  ];

  return (
    <ul className="space-y-4 mb-8">
      {features.map((item, index) => (
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
  );
};

export default TechnologyFeatures;
