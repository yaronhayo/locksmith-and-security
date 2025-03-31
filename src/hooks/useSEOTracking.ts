
import { useEffect } from 'react';

interface SEOTrackingOptions {
  page: string;
  title: string;
  url: string;
  referrer?: string;
  bounceTracking?: boolean;
  scrollTracking?: boolean;
  timeOnPage?: boolean;
}

/**
 * Custom hook for tracking SEO-relevant user behaviors
 * @param options Configuration options for the tracking
 * @returns void
 */
export const useSEOTracking = ({
  page,
  title,
  url,
  referrer,
  bounceTracking = true,
  scrollTracking = true,
  timeOnPage = true
}: SEOTrackingOptions): void => {
  useEffect(() => {
    // Log page view for SEO tracking
    console.log(`[SEO] Page View: ${page} | ${title}`);
    
    // Track the entry time
    const entryTime = new Date().getTime();
    let maxScrollPercentage = 0;
    
    // Track the referrer if available
    if (referrer || document.referrer) {
      console.log(`[SEO] Referrer: ${referrer || document.referrer}`);
    }
    
    // Set up scroll depth tracking
    const handleScroll = () => {
      if (!scrollTracking) return;
      
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = Math.round((scrollTop / scrollHeight) * 100);
      
      // Track significant scroll depths
      if (scrollPercentage > maxScrollPercentage) {
        maxScrollPercentage = scrollPercentage;
        
        if (scrollPercentage === 25 || 
            scrollPercentage === 50 || 
            scrollPercentage === 75 || 
            scrollPercentage === 90) {
          console.log(`[SEO] Scroll Depth: ${scrollPercentage}% on ${page}`);
        }
      }
    };
    
    // Track time on page when leaving
    const handleLeave = () => {
      const exitTime = new Date().getTime();
      const timeSpentSeconds = Math.round((exitTime - entryTime) / 1000);
      
      if (timeOnPage) {
        console.log(`[SEO] Time on page: ${timeSpentSeconds}s for ${page}`);
      }
      
      // Consider it a bounce if user spent less than 30 seconds
      if (bounceTracking && timeSpentSeconds < 30) {
        console.log(`[SEO] Potential bounce: User left ${page} after ${timeSpentSeconds}s`);
      }
      
      // Log the maximum scroll depth reached
      if (scrollTracking) {
        console.log(`[SEO] Max scroll depth: ${maxScrollPercentage}% on ${page}`);
      }
    };
    
    // Add event listeners
    if (scrollTracking) {
      window.addEventListener('scroll', handleScroll);
    }
    
    if (bounceTracking || timeOnPage) {
      window.addEventListener('beforeunload', handleLeave);
    }
    
    // Clean up
    return () => {
      if (scrollTracking) {
        window.removeEventListener('scroll', handleScroll);
      }
      if (bounceTracking || timeOnPage) {
        window.removeEventListener('beforeunload', handleLeave);
        handleLeave(); // Track time when component unmounts
      }
    };
  }, [page, title, url, referrer, bounceTracking, scrollTracking, timeOnPage]);
};
