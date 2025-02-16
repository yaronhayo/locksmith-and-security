
import { useState, useEffect, useCallback, useRef } from 'react';
import { reviews } from '@/data/reviewsData';
import type { Review } from '@/types/reviews';
import { logToService } from '@/utils/performanceMonitoring';

export const useReviews = (location?: string) => {
  const [displayedReviews, setDisplayedReviews] = useState<Review[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const loadingRef = useRef(null);
  const pageSize = 6; // Reduced batch size for smoother loading

  const filteredReviews = location 
    ? reviews.filter(review => review.location.includes(location))
    : reviews;

  const loadMoreReviews = useCallback(() => {
    if (isLoading) return;
    
    const startTime = performance.now();
    setIsLoading(true);
    
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const newReviews = filteredReviews.slice(startIndex, endIndex);
    
    // Simulate network delay in development only
    const loadDelay = process.env.NODE_ENV === 'development' ? 1000 : 0;
    
    setTimeout(() => {
      if (newReviews.length > 0) {
        setDisplayedReviews(prev => [...prev, ...newReviews]);
        setPage(prev => prev + 1);
      }
      setIsLoading(false);
      
      // Log performance metrics
      const duration = performance.now() - startTime;
      logToService('info', 'Reviews load performance', {
        duration,
        batchSize: pageSize,
        totalLoaded: displayedReviews.length + newReviews.length
      });
    }, loadDelay);
  }, [page, filteredReviews, isLoading, displayedReviews.length]);

  useEffect(() => {
    setDisplayedReviews([]);
    setPage(1);
  }, [location]);

  useEffect(() => {
    loadMoreReviews();
  }, [loadMoreReviews]);

  return {
    displayedReviews,
    isLoading,
    loadingRef,
    loadMoreReviews,
    totalReviews: filteredReviews.length
  };
};
