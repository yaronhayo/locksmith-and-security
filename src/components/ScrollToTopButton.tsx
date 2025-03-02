
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check if user has scrolled 1/3 of the page height
  const checkScrollPosition = () => {
    const scrollThreshold = window.innerHeight / 3;
    const currentPosition = window.scrollY;
    
    setIsVisible(currentPosition > scrollThreshold);
  };

  // Scroll back to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);
    return () => window.removeEventListener("scroll", checkScrollPosition);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed flex items-center justify-center w-12 h-12 bg-primary hover:bg-primary-hover text-white rounded-full shadow-lg z-50"
          style={{
            right: "20px", 
            bottom: "20vh", // Position between center and bottom
          }}
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
