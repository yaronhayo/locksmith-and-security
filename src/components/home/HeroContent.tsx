import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const HeroContent = () => {
  return (
    <>
      <Helmet>
        <link 
          rel="preload" 
          href="/lovable-uploads/9b00adf3-451e-4d1c-a118-6a6f06293ec0.png" 
          as="image"
          fetchPriority="high"
        />
        <link 
          rel="preconnect" 
          href="https://fonts.googleapis.com" 
        />
        <link 
          rel="preconnect" 
          href="https://fonts.gstatic.com" 
          crossOrigin="anonymous"
        />
      </Helmet>
      <motion.div 
        className="flex flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        role="main"
        aria-label="Main content"
      >
        <HeroSection />
      </motion.div>
    </>
  );
};

export default HeroContent;