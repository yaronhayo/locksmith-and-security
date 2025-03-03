
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const prevPathRef = useRef(pathname);
  
  useEffect(() => {
    // Only scroll to top if the path has actually changed
    if (prevPathRef.current !== pathname) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
      });
      
      // Update the previous path
      prevPathRef.current = pathname;
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
