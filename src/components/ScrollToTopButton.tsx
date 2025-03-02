
import React, { useState, useEffect, useCallback } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    setIsVisible(window.pageYOffset > 300);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [toggleVisibility]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="fixed right-8 bottom-1/3 z-50" // Positioned between center and bottom
        >
          <Button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-[#fa7315] hover:bg-[#fa7315]/90 text-white shadow-md transition-transform duration-300 hover:scale-110 focus-visible:ring-2 focus-visible:ring-[#fa7315] focus-visible:ring-offset-2"
            size="icon"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Scroll to top</span>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
