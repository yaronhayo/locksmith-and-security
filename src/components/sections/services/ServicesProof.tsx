import React, { useEffect } from 'react';
import { Review, ServiceCategory } from '@/types/reviews';
import { StarIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { reviews, reviewsByCategory } from '@/data/reviewsData';
import { trackComponentRender } from '@/utils/performanceMonitoring';
import { memo } from 'react';
interface ServicesProofProps {
  reviewsData?: Review[];
  category?: ServiceCategory;
}
const ServicesProof: React.FC<ServicesProofProps> = memo(({
  reviewsData,
  category
}) => {
  const finishRenderTracking = trackComponentRender('ServicesProof');
  useEffect(() => {
    finishRenderTracking();
  }, [finishRenderTracking]);

  // Use provided reviews data if available, otherwise use reviews based on category or default to all reviews
  const displaySourceReviews = reviewsData || (category ? reviewsByCategory[category] : reviews);

  // Take only the first 3 reviews for display
  const displayReviews = displaySourceReviews.slice(0, 3);
  return;
});
ServicesProof.displayName = 'ServicesProof';
export default ServicesProof;