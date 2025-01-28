import { motion } from "framer-motion";

const AreaHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center max-w-3xl mx-auto mb-12"
    >
      <h2 className="text-3xl font-bold mb-4">Our Service Areas</h2>
      <p className="text-lg text-gray-600">
        Professional locksmith services available throughout North Bergen and surrounding areas. 
        Fast response times and reliable service guaranteed.
      </p>
    </motion.div>
  );
};

export default AreaHeader;