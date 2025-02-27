
import ReviewsContainer from "@/components/reviews/ReviewsContainer";
import { Review } from "@/types/reviews";
import { StarIcon } from "lucide-react";

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
}: ServiceAreaReviewsProps) => (
  <section className="py-12" id="reviews">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-3">
        What Our {locationName} Customers Say
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Read verified reviews from our satisfied customers in {locationName}. We're proud to provide exceptional locksmith services to our local community.
      </p>
      
      {totalReviews > 0 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon key={star} className="h-5 w-5 text-yellow-500 fill-current" />
            ))}
          </div>
          <span className="font-medium text-gray-800">
            5.0 from {totalReviews} reviews in {locationName}
          </span>
        </div>
      )}
    </div>
    
    <ReviewsContainer
      location={locationName}
      displayedReviews={displayedReviews}
      isLoading={isLoading}
      totalReviews={totalReviews}
    />
  </section>
);

export default ServiceAreaReviews;
