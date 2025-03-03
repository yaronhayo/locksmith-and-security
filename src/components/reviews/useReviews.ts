
import { useState, useEffect, useRef, useCallback } from 'react';
import type { Review, ServiceCategory } from '@/types/reviews';
import { useInView } from 'react-intersection-observer';
import { reviews } from '@/data/reviewsData';

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
  const pageSize = 25; // Increased page size for faster loading
  
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
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Filter reviews based on location and category if provided
        let filteredReviews = [...reviews];
        if (location) {
          filteredReviews = filteredReviews.filter(review => 
            review.location.toLowerCase().includes(location.toLowerCase())
          );
        }
        
        if (category) {
          filteredReviews = filteredReviews.filter(review => {
            const service = review.service.toLowerCase();
            return service.includes(category.toLowerCase());
          });
        }
        
        // Get the first batch
        const startIndex = 0;
        const endIndex = Math.min(pageSize, filteredReviews.length);
        const initialBatch = filteredReviews.slice(startIndex, endIndex);
        
        setDisplayedReviews(initialBatch);
        setTotalReviews(filteredReviews.length);
        setHasMore(endIndex < filteredReviews.length);
        page.current = 2; // Start at page 2 for next fetch
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [location, category, initialReviewData]);

  // Load more reviews when the loading element comes into view
  useEffect(() => {
    if (inView && hasMore && !isLoading && !initialReviewData) {
      const fetchMoreReviews = async () => {
        try {
          setIsLoading(true);
          // Simulate API call with timeout
          await new Promise(resolve => setTimeout(resolve, 500));
          
          // Filter reviews based on location and category if provided
          let filteredReviews = [...reviews];
          if (location) {
            filteredReviews = filteredReviews.filter(review => 
              review.location.toLowerCase().includes(location.toLowerCase())
            );
          }
          
          if (category) {
            filteredReviews = filteredReviews.filter(review => {
              const service = review.service.toLowerCase();
              return service.includes(category.toLowerCase());
            });
          }
          
          const startIndex = (page.current - 1) * pageSize;
          const endIndex = Math.min(startIndex + pageSize, filteredReviews.length);
          
          // If we've reached the end of our data, stop fetching
          if (startIndex >= filteredReviews.length) {
            setHasMore(false);
            return;
          }
          
          const newBatch = filteredReviews.slice(startIndex, endIndex);
          setDisplayedReviews(prev => [...prev, ...newBatch]);
          page.current += 1;
          setHasMore(endIndex < filteredReviews.length);
        } catch (error) {
          console.error("Error fetching more reviews:", error);
        } finally {
          setIsLoading(false);
        }
      };
      
      fetchMoreReviews();
    }
  }, [inView, hasMore, isLoading, initialReviewData, category, location]);

  return {
    displayedReviews,
    isLoading,
    loadingRef,
    hasMore,
    totalReviews,
  };
};
