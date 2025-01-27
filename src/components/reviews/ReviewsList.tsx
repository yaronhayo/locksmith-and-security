import { memo } from 'react';
import ReviewCard from './ReviewCard';
import { Review } from '@/types/reviews';

interface ReviewsListProps {
  reviews: Review[];
  displayedReviews: Review[];
}

const ReviewsList = ({ reviews, displayedReviews }: ReviewsListProps) => {
  return (
    <div 
      className="flex gap-8 overflow-x-hidden"
      style={{ WebkitOverflowScrolling: 'touch' }}
      role="region"
      aria-label="Reviews carousel"
    >
      {[...displayedReviews, ...displayedReviews].map((review, index) => (
        <ReviewCard key={index} review={review} index={index} />
      ))}
    </div>
  );
};

export default memo(ReviewsList);