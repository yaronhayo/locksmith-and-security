
import { memo } from "react";
import ReviewsList from "./ReviewsList";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@/components/ErrorFallback";
import { createReviewsSchema } from "@/schemas/reviewsSchema";
import { SchemaScripts } from "@/components/meta/SchemaScripts";
import type { ServiceCategory, Review } from "@/types/reviews";

interface ReviewsContainerProps {
  location?: string;
  category?: ServiceCategory;
  displayedReviews: Review[];
  isLoading: boolean;
  totalReviews: number;
}

const ReviewsContainer = memo(({ 
  location, 
  category, 
  displayedReviews, 
  isLoading, 
  totalReviews 
}: ReviewsContainerProps) => {
  const reviewsSchema = createReviewsSchema(displayedReviews, location);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <SchemaScripts schemas={[{ type: 'LocalBusiness', data: reviewsSchema }]} />
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <ReviewsList reviews={displayedReviews} isLoading={isLoading} />
        </div>
      </section>
    </ErrorBoundary>
  );
});

ReviewsContainer.displayName = 'ReviewsContainer';

export default ReviewsContainer;
