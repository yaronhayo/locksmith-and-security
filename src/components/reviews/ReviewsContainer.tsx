import { memo } from "react";
import ReviewsList from "./ReviewsList";
import ReviewsHeader from "./ReviewsHeader";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Review } from "@/types/reviews";

interface ReviewsContainerProps {
  location?: string;
  displayedReviews: Review[];
  isLoading: boolean;
}

const ReviewsContainer = memo(({ 
  location, 
  displayedReviews, 
  isLoading 
}: ReviewsContainerProps) => {
  return (
    <section 
      className="py-20 overflow-hidden"
      aria-label="Customer Reviews"
    >
      <div className="container mx-auto px-4">
        <ReviewsHeader location={location} />
        <ReviewsList 
          reviews={displayedReviews} 
          displayedReviews={displayedReviews}
        />
        <div className="h-10">
          {isLoading && <LoadingSpinner />}
        </div>
      </div>
    </section>
  );
});

ReviewsContainer.displayName = 'ReviewsContainer';

export default ReviewsContainer;