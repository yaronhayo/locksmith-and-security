
import { memo } from "react";
import { useReviews } from "@/components/reviews/useReviews";
import ReviewsContainer from "@/components/reviews/ReviewsContainer";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@/components/ErrorFallback";
import type { ServiceCategory } from "@/types/reviews";

interface ReviewsSectionProps {
  location?: string;
  category?: ServiceCategory;
}

const ReviewsSection = memo(({ location, category }: ReviewsSectionProps) => {
  const { displayedReviews, isLoading, loadingRef, loadMoreReviews, totalReviews } = useReviews(location, category);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ReviewsContainer
        location={location}
        category={category}
        displayedReviews={displayedReviews}
        isLoading={isLoading}
        totalReviews={totalReviews}
      />
      <div ref={loadingRef} className="h-10 invisible" aria-hidden="true" />
    </ErrorBoundary>
  );
});

ReviewsSection.displayName = 'ReviewsSection';

export default ReviewsSection;
