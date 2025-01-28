import { motion } from 'framer-motion';

const AreaHeader = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
        Service Areas
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Professional locksmith services available throughout North Bergen and surrounding areas in New Jersey. 
        Fast response times and reliable service, available 24/7 for your security needs.
      </p>
    </motion.div>
  );
};

export default AreaHeader;