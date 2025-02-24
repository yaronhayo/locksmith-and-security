import ReviewsContainer from "@/components/reviews/ReviewsContainer";
import { Review } from "@/types/reviews";

interface ServiceAreaReviewsProps {
  locationName: string;
  displayedReviews: Review[];
  isLoading: boolean;
  totalReviews: number;
}

const ServiceAreaReviews = ({ 
  locationName, 
  displayedReviews, 
  isLoading, 
  totalReviews 
}: ServiceAreaReviewsProps) => {
  return (
    <section className="py-12" id="reviews">
      <h2 className="text-3xl font-bold text-center mb-8">
        Customer Reviews in {locationName}
      </h2>
      <ReviewsContainer
        location={locationName}
        displayedReviews={displayedReviews}
        isLoading={isLoading}
        totalReviews={totalReviews}
      />
    </section>
  );
};

export default ServiceAreaReviews;
