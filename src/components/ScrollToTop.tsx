
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const prevPathRef = useRef(pathname);
  const scrollInProgressRef = useRef(false);
  
  useEffect(() => {
    // Only scroll to top if the path has actually changed and not in progress
    if (prevPathRef.current !== pathname && !scrollInProgressRef.current) {
      scrollInProgressRef.current = true;
      
      try {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant" // Use instant to prevent animation issues
        });
      } catch (e) {
        // Fallback for older browsers
        window.scrollTo(0, 0);
      }
      
      // Update the previous path
      prevPathRef.current = pathname;
      
      // Reset scroll flag after a short delay
      setTimeout(() => {
        scrollInProgressRef.current = false;
      }, 100);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
