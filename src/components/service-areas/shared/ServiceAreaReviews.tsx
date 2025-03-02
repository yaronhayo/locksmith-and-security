
import { Review } from "@/types/reviews";
import { StarIcon } from "lucide-react";
import ReviewsList from "@/components/reviews/ReviewsList";
import { SchemaScripts } from "@/components/meta/SchemaScripts";
import { createReviewsSchema } from "@/schemas/reviewsSchema";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@/components/ErrorFallback";
import { memo, useEffect } from "react";
import ReviewsLoadingSkeleton from "@/components/reviews/ReviewsLoadingSkeleton";
import { trackComponentRender } from "@/utils/performanceMonitoring";
import { motion } from "framer-motion";

interface ServiceAreaReviewsProps {
  locationName: string;
  displayedReviews: Review[];
  isLoading: boolean;
  totalReviews: number;
}

const ServiceAreaReviews = memo(({ 
  locationName, 
  displayedReviews, 
  isLoading, 
  totalReviews 
}: ServiceAreaReviewsProps) => {
  const finishRenderTracking = trackComponentRender('ServiceAreaReviews');
  
  useEffect(() => {
    finishRenderTracking();
  }, []);
  
  const reviewsSchema = createReviewsSchema(displayedReviews, locationName);
  
  return (
    <section className="py-12" id="reviews">
      <SchemaScripts schemas={[{ type: 'LocalBusiness', data: reviewsSchema }]} />
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-3">
          What Our {locationName} Customers Say
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Read verified reviews from our satisfied customers in {locationName}. We're proud to provide exceptional locksmith services to our local community.
        </p>
        
        {totalReviews > 0 && (
          <motion.div 
            className="flex items-center justify-center gap-2 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon key={star} className="h-5 w-5 text-yellow-500 fill-current" />
              ))}
            </div>
            <span className="font-medium text-gray-800">
              5.0 from {totalReviews} reviews in {locationName}
            </span>
          </motion.div>
        )}
      </motion.div>
      
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <div className="container mx-auto px-4">
          {isLoading ? (
            <ReviewsLoadingSkeleton count={3} />
          ) : (
            <ReviewsList reviews={displayedReviews} isLoading={isLoading} />
          )}
        </div>
      </ErrorBoundary>
    </section>
  );
});

ServiceAreaReviews.displayName = 'ServiceAreaReviews';

export default ServiceAreaReviews;
