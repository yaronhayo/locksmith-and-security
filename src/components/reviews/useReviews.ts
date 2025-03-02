import { useState, useEffect, useRef, useCallback } from 'react';
import type { Review, ServiceCategory } from '@/types/reviews';
import { useInView } from 'react-intersection-observer';

export const useReviews = (
  location?: string, 
  category?: ServiceCategory,
  initialReviewData?: Review[]
) => {
  const [displayedReviews, setDisplayedReviews] = useState<Review[]>(initialReviewData || []);
  const [isLoading, setIsLoading] = useState(!initialReviewData);
  const [hasMore, setHasMore] = useState(true);
  const [totalReviews, setTotalReviews] = useState(initialReviewData?.length || 0);
  const page = useRef(1);
  
  const { ref: loadingRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // If we have initialReviewData, use that instead of fetching
  useEffect(() => {
    if (initialReviewData && initialReviewData.length > 0) {
      setDisplayedReviews(initialReviewData);
      setTotalReviews(initialReviewData.length);
      setHasMore(false);
      setIsLoading(false);
      return;
    }
    
    // Otherwise, fetch reviews based on location and category
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        // Simulate API call with timeout
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // This would be replaced with actual API call in production
        // const response = await fetch(`/api/reviews?location=${location}&category=${category}&page=${page.current}`);
        // const data = await response.json();
        
        // For now, just use mock data
        const mockReviews: Review[] = Array.from({ length: 6 }, (_, i) => ({
          name: `Customer ${i + 1}`,
          rating: 5,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          service: category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Service` : "Locksmith Service",
          location: location || "North Bergen",
          date: new Date().toISOString().split('T')[0]
        }));
        
        setDisplayedReviews(prev => [...prev, ...mockReviews]);
        setTotalReviews(prev => prev + mockReviews.length);
        setHasMore(mockReviews.length > 0);
        page.current += 1;
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (!initialReviewData) {
      fetchReviews();
    }
  }, [location, category, initialReviewData]);

  // Load more reviews when the loading element comes into view
  useEffect(() => {
    if (inView && hasMore && !isLoading && !initialReviewData) {
      // Only fetch more if we don't have initialReviewData
      const fetchMoreReviews = async () => {
        try {
          setIsLoading(true);
          // Simulate API call with timeout
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // This would be replaced with actual API call in production
          // const response = await fetch(`/api/reviews?location=${location}&category=${category}&page=${page.current}`);
          // const data = await response.json();
          
          // For now, just use mock data
          const mockReviews: Review[] = Array.from({ length: 3 }, (_, i) => ({
            name: `Customer ${displayedReviews.length + i + 1}`,
            rating: 5,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            service: category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Service` : "Locksmith Service",
            location: location || "North Bergen",
            date: new Date().toISOString().split('T')[0]
          }));
          
          // Simulate end of data after a few pages
          if (page.current > 3) {
            setHasMore(false);
            return;
          }
          
          setDisplayedReviews(prev => [...prev, ...mockReviews]);
          setTotalReviews(prev => prev + mockReviews.length);
          page.current += 1;
        } catch (error) {
          console.error("Error fetching more reviews:", error);
        } finally {
          setIsLoading(false);
        }
      };
      
      fetchMoreReviews();
    }
  }, [inView, hasMore, isLoading, initialReviewData, displayedReviews.length, category, location]);

  return {
    displayedReviews,
    isLoading,
    loadingRef,
    hasMore,
    totalReviews,
  };
};
