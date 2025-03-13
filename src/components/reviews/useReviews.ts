
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { reviews, getReviewsByCategory, getReviewsByLocation } from '@/data/reviewsData';
import type { Review, ServiceCategory } from '@/types/reviews';

export const useReviews = (location?: string, category?: ServiceCategory) => {
  const [displayedReviews, setDisplayedReviews] = useState<Review[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const loadingRef = useRef<HTMLDivElement | null>(null);
  const pageSize = 12; // Show 12 reviews at once
  const loadDelay = 800; // 0.8 seconds delay between batches
  const initialLoadComplete = useRef(false);
  const loadTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Clean up any pending timeouts when component unmounts
  useEffect(() => {
    return () => {
      if (loadTimeoutRef.current) {
        clearTimeout(loadTimeoutRef.current);
      }
    };
  }, []);

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
    if (initialLoadComplete.current) {
      setDisplayedReviews([]);
      setPage(1);
      initialLoadComplete.current = false;
      setIsInitialLoad(true);
    }
    
    const initialBatch = filteredReviews.slice(0, pageSize);
    if (initialBatch.length > 0) {
      setIsLoading(true);
      // Use setTimeout with a small delay to push execution to the next event loop
      // but still show a loading state briefly for better UX
      loadTimeoutRef.current = setTimeout(() => {
        setDisplayedReviews(initialBatch);
        setPage(2); // Start from page 2 for subsequent loads
        initialLoadComplete.current = true;
        setIsLoading(false);
        setIsInitialLoad(false);
      }, 100);
    } else {
      setIsInitialLoad(false);
    }
  }, [filteredReviews, pageSize]);

  const loadMoreReviews = useCallback(() => {
    if (isLoading || isInitialLoad) return;
    
    const startTime = performance.now();
    setIsLoading(true);
    
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const newReviews = filteredReviews.slice(startIndex, endIndex);
    
    if (newReviews.length > 0) {
      // Use the specified delay for subsequent batches
      loadTimeoutRef.current = setTimeout(() => {
        setDisplayedReviews(prev => [...prev, ...newReviews]);
        setPage(prev => prev + 1);
        setIsLoading(false);
        
        // Log performance metrics only in production (simplified)
        if (process.env.NODE_ENV === 'production') {
          const duration = performance.now() - startTime;
          console.log('Reviews load performance', {
            duration,
            batchSize: pageSize,
            totalLoaded: displayedReviews.length + newReviews.length
          });
        }
      }, loadDelay);
    } else {
      setIsLoading(false);
    }
  }, [page, filteredReviews, isLoading, isInitialLoad, displayedReviews.length, pageSize, loadDelay]);

  // Set up Intersection Observer for infinite scrolling
  useEffect(() => {
    // Skip if still in initial loading state
    if (isInitialLoad) return;
    
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
  }, [loadMoreReviews, isLoading, isInitialLoad, displayedReviews.length, filteredReviews.length]);

  return {
    displayedReviews,
    isLoading: isLoading || isInitialLoad,
    loadingRef,
    loadMoreReviews,
    totalReviews: filteredReviews.length,
    hasMore: displayedReviews.length < filteredReviews.length
  };
};
