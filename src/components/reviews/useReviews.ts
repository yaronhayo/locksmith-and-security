
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { reviews, getReviewsByCategory, getReviewsByLocation } from '@/data/reviewsData';
import type { Review, ServiceCategory } from '@/types/reviews';
import { logToService } from '@/utils/performanceMonitoring';

export const useReviews = (location?: string, category?: ServiceCategory) => {
  const [displayedReviews, setDisplayedReviews] = useState<Review[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const loadingRef = useRef(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const pageSize = 12; // Showing 12 reviews per batch
  const loadDelay = 800; // Set to 0.8 seconds (800ms) as requested

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
      // Use exactly 800ms delay as requested by the user
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

  // Setup intersection observer for automatic loading
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '100px', // Start loading before user reaches the bottom
      threshold: 0.1
    };

    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry?.isIntersecting && !isLoading && displayedReviews.length < filteredReviews.length) {
        loadMoreReviews();
      }
    };

    // Clean up previous observer before creating a new one
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(handleObserver, options);
    
    if (loadingRef.current) {
      observerRef.current.observe(loadingRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [loadMoreReviews, isLoading, displayedReviews.length, filteredReviews.length]);

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
