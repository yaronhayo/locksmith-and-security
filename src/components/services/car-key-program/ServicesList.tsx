
import { motion } from "framer-motion";

const ServicesList = () => {
  const services = [
    "Transponder key programming",
    "Smart key programming",
    "Push-to-start key programming",
    "Key fob programming",
    "Remote programming",
    "Proximity key programming",
    "Lost key replacement programming",
    "Spare key programming",
    "ECU programming",
    "Immobilizer programming",
    "All vehicle makes and models",
    "European & Asian vehicles"
  ];

  return (
    <ul className="grid md:grid-cols-2 gap-4 mb-8">
      {services.map((service, index) => (
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
  );
};

export default ServicesList;
