
import { memo, Suspense } from "react";
import { useReviews } from "@/components/reviews/useReviews";
import ReviewsContainer from "@/components/reviews/ReviewsContainer";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@/components/ErrorFallback";
import type { ServiceCategory } from "@/types/reviews";
import LoadingSpinner from "@/components/LoadingSpinner";
import ReviewsLoadingSkeleton from "@/components/reviews/ReviewsLoadingSkeleton";

interface ReviewsSectionProps {
  location?: string;
  category?: ServiceCategory;
}

const ReviewsContent = memo(({ location, category }: ReviewsSectionProps) => {
  const { displayedReviews, isLoading, loadingRef, totalReviews } = useReviews(location, category);

  return (
    <>
      <ReviewsContainer
        location={location}
        category={category}
        displayedReviews={displayedReviews}
        isLoading={isLoading}
        totalReviews={totalReviews}
      />
      <div ref={loadingRef} className="h-10 invisible" aria-hidden="true" />
    </>
  );
});

ReviewsContent.displayName = 'ReviewsContent';

const ReviewsSection = memo(({ location, category }: ReviewsSectionProps) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<ReviewsLoadingSkeleton />}>
        <ReviewsContent location={location} category={category} />
      </Suspense>
    </ErrorBoundary>
  );
});

ReviewsSection.displayName = 'ReviewsSection';

export default ReviewsSection;
