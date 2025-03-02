
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-2.5 rounded-full bg-primary hover:bg-primary/90 text-white shadow-md transition-transform duration-300 hover:scale-110 focus-visible:ring-offset-background"
          size="icon"
          aria-label="Scroll to top of page"
        >
          <ArrowUp className="h-5 w-5" aria-hidden="true" />
        </Button>
      )}
    </>
  );
};

export default ScrollToTopButton;
