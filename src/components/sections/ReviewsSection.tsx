import { useEffect, useRef, useCallback, memo, useState } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import ReviewsGrid from "@/components/reviews/ReviewsGrid";
import ReviewsHeader from "@/components/reviews/ReviewsHeader";
import LoadMoreButton from "@/components/reviews/LoadMoreButton";
import { reviews } from "@/data/reviewsData";

interface ReviewsSectionProps {
  location?: string;
}

const ReviewsSection = ({ location }: ReviewsSectionProps) => {
  const [displayedReviews, setDisplayedReviews] = useState(reviews.slice(0, 6));
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreReviews = useCallback(() => {
    if (isLoading) return;
    
    setIsLoading(true);
    const currentLength = displayedReviews.length;
    const nextReviews = reviews.slice(currentLength, currentLength + 6);
    
    setTimeout(() => {
      if (nextReviews.length > 0) {
        setDisplayedReviews(prev => [...prev, ...nextReviews]);
        setHasMore(currentLength + nextReviews.length < reviews.length);
      } else {
        setHasMore(false);
      }
      setIsLoading(false);
    }, 1000);
  }, [displayedReviews.length, isLoading]);

  return (
    <section 
      className="py-20 overflow-hidden"
      aria-label="Customer Reviews"
    >
      <div className="container mx-auto px-4">
        <ReviewsHeader location={location} />
        <ReviewsGrid displayedReviews={displayedReviews} />
        {hasMore && (
          <LoadMoreButton isLoading={isLoading} onClick={loadMoreReviews} />
        )}
      </div>
    </section>
  );
};

export default memo(ReviewsSection);