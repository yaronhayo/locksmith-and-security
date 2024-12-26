import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  description: string;
}

const PageHero = ({ title, description }: PageHeroProps) => {
  return (
    <div className="hero-gradient py-12 md:py-20" role="banner">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4 md:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-white/90 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
};

export default PageHero;