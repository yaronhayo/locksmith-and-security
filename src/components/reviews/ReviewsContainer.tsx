
import { memo } from "react";
import { useReviews } from "@/components/reviews/useReviews";
import ReviewsHeader from "./ReviewsHeader";
import ReviewsList from "./ReviewsList";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@/components/ErrorFallback";

interface ReviewsContainerProps {
  location?: string;
  displayedReviews: any[];
  isLoading: boolean;
}

const ReviewsContainer = memo(({ location, displayedReviews, isLoading }: ReviewsContainerProps) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ReviewsHeader location={location} />
          <ReviewsList reviews={displayedReviews} isLoading={isLoading} />
        </div>
      </section>
    </ErrorBoundary>
  );
});

ReviewsContainer.displayName = 'ReviewsContainer';

export default ReviewsContainer;
