import { memo } from "react";
import { useReviews } from "@/components/reviews/useReviews";
import ReviewsContainer from "@/components/reviews/ReviewsContainer";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@/components/ErrorFallback";

interface ReviewsSectionProps {
  location?: string;
}

const ReviewsSection = memo(({ location }: ReviewsSectionProps) => {
  const { displayedReviews, isLoading, loadingRef, loadMoreReviews } = useReviews(location);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ReviewsContainer
        location={location}
        displayedReviews={displayedReviews}
        isLoading={isLoading}
      />
      <div ref={loadingRef} className="h-10 invisible" aria-hidden="true" />
    </ErrorBoundary>
  );
});

ReviewsSection.displayName = 'ReviewsSection';

export default ReviewsSection;