
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const prevPathRef = useRef(pathname);
  const scrollInProgressRef = useRef(false);
  const scrollAttemptCountRef = useRef(0);
  
  useEffect(() => {
    // Only scroll to top if the path has actually changed and not in progress
    if (prevPathRef.current !== pathname && !scrollInProgressRef.current) {
      scrollInProgressRef.current = true;
      
      // Track the number of consecutive scroll attempts to prevent infinite loops
      if (Date.now() - scrollAttemptCountRef.current < 1000) {
        console.warn('Multiple scroll attempts detected within 1 second, skipping this one');
        scrollInProgressRef.current = false;
        return;
      }
      
      scrollAttemptCountRef.current = Date.now();
      
      console.log(`ScrollToTop: Scrolling to top due to path change from ${prevPathRef.current} to ${pathname}`);
      
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
      }, 200);
    }
  }, [pathname]);

  // Clean up effect
  useEffect(() => {
    return () => {
      // Reset flags when component unmounts
      scrollInProgressRef.current = false;
    };
  }, []);

  return null;
};

export default ScrollToTop;
