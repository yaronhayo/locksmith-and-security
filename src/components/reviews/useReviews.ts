
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { reviews, getReviewsByCategory, getReviewsByLocation } from '@/data/reviewsData';
import type { Review, ServiceCategory } from '@/types/reviews';
import { logToService, measurePerformance } from '@/utils/performanceMonitoring';

export const useReviews = (location?: string, category?: ServiceCategory) => {
  const [displayedReviews, setDisplayedReviews] = useState<Review[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const loadingRef = useRef<HTMLDivElement | null>(null);
  const pageSize = 12; // Show 12 reviews at once
  const loadDelay = 800; // 0.8 seconds delay between batches
  const initialLoadComplete = useRef(false);

  const filteredReviews = useMemo(() => {
    return measurePerformance('Filter Reviews', () => {
      if (!location && !category) return reviews;
      
      let filtered = [...reviews];
      
      if (category) {
        filtered = getReviewsByCategory(category);
      }
      
      if (location) {
        filtered = filtered.filter(review => review.location.includes(location));
      }
      
      return filtered;
    });
  }, [category, location]);

  // Preload initial batch immediately when component renders
  useEffect(() => {
    if (initialLoadComplete.current) {
      setDisplayedReviews([]);
      setPage(1);
      initialLoadComplete.current = false;
    }
    
    const initialBatch = filteredReviews.slice(0, pageSize);
    if (initialBatch.length > 0) {
      // Use setTimeout with 0ms to push execution to the next event loop
      setTimeout(() => {
        setDisplayedReviews(initialBatch);
        setPage(2); // Start from page 2 for subsequent loads
        initialLoadComplete.current = true;
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
      // Use the specified 0.8 second delay for subsequent batches
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

  // Set up Intersection Observer for infinite scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading && displayedReviews.length < filteredReviews.length) {
          loadMoreReviews();
        }
      },
      { threshold: 0.1 }
    );

    if (loadingRef.current) {
      observer.observe(loadingRef.current);
    }

    return () => {
      if (loadingRef.current) {
        observer.unobserve(loadingRef.current);
      }
    };
  }, [loadMoreReviews, isLoading, displayedReviews.length, filteredReviews.length]);

  return {
    displayedReviews,
    isLoading,
    loadingRef,
    loadMoreReviews,
    totalReviews: filteredReviews.length,
    hasMore: displayedReviews.length < filteredReviews.length
  };
};
