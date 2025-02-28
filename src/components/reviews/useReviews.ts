
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { reviews, getReviewsByCategory, getReviewsByLocation } from '@/data/reviewsData';
import type { Review, ServiceCategory } from '@/types/reviews';
import { logToService } from '@/utils/performanceMonitoring';

export const useReviews = (location?: string, category?: ServiceCategory) => {
  const [displayedReviews, setDisplayedReviews] = useState<Review[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const loadingRef = useRef(null);
  const pageSize = 12; // Increased from 9 to 12 to show more reviews at once
  const loadDelay = 150; // Reduced from default loading delay for faster perceived loading

  const filteredReviews = useMemo(() => {
    if (!location && !category) return reviews;
    
    let filtered = [...reviews];
    
    if (category) {
      filtered = getReviewsByCategory(category);
    }
    
    if (location) {
      filtered = filtered.filter(review => review.location.includes(location));
    }
    
    return filtered;
  }, [category, location]);

  // Preload initial batch immediately when component renders
  useEffect(() => {
    const initialBatch = filteredReviews.slice(0, pageSize);
    if (initialBatch.length > 0) {
      // Use setTimeout with 0ms to push execution to the next event loop
      // This creates a smoother initial load without delay
      setTimeout(() => {
        setDisplayedReviews(initialBatch);
        setPage(2); // Start from page 2 for subsequent loads
      }, 0);
    }
  }, [filteredReviews, pageSize]);

  const loadMoreReviews = useCallback(() => {
    if (isLoading) return;
    
    const startTime = performance.now();
    setIsLoading(true);
    
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const newReviews = filteredReviews.slice(startIndex, endIndex);
    
    if (newReviews.length > 0) {
      // Use a shorter timeout for a faster perceived loading experience
      setTimeout(() => {
        setDisplayedReviews(prev => [...prev, ...newReviews]);
        setPage(prev => prev + 1);
        setIsLoading(false);
        
        // Log performance metrics only in production
        if (process.env.NODE_ENV === 'production') {
          const duration = performance.now() - startTime;
          logToService('info', 'Reviews load performance', {
            duration,
            batchSize: pageSize,
            totalLoaded: displayedReviews.length + newReviews.length
          });
        }
      }, loadDelay);
    } else {
      setIsLoading(false);
    }
  }, [page, filteredReviews, isLoading, displayedReviews.length, pageSize, loadDelay]);

  useEffect(() => {
    setDisplayedReviews([]);
    setPage(1);
  }, [location, category]);

  return {
    displayedReviews,
    isLoading,
    loadingRef,
    loadMoreReviews,
    totalReviews: filteredReviews.length,
    hasMore: displayedReviews.length < filteredReviews.length
  };
};
