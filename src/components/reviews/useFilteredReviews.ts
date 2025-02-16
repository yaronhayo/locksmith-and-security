
import { useState, useMemo } from 'react';
import { reviews, getReviewsByCategory, getReviewsByLocation } from '@/data/reviewsData';
import type { ServiceCategory, Review } from '@/types/reviews';

export const useFilteredReviews = (initialLocation?: string) => {
  const [location, setLocation] = useState<string | undefined>(initialLocation);
  const [category, setCategory] = useState<ServiceCategory | undefined>();

  const filteredReviews = useMemo(() => {
    let filtered = [...reviews];

    if (category) {
      filtered = getReviewsByCategory(category);
    }

    if (location) {
      filtered = filtered.filter(review => review.location.includes(location));
    }

    return filtered;
  }, [category, location]);

  return {
    reviews: filteredReviews,
    setLocation,
    setCategory,
    totalReviews: filteredReviews.length,
  };
};
