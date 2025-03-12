
import { Star } from "lucide-react";

interface ServiceReviewStarsProps {
  rating: number;
  count?: number;
}

const ServiceReviewStars = ({ rating, count }: ServiceReviewStarsProps) => {
  return (
    <div className="flex items-center">
      <div className="flex items-center mr-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < Math.floor(rating) 
                ? "text-yellow-400 fill-yellow-400" 
                : i < rating 
                  ? "text-yellow-400 fill-yellow-400 opacity-50" 
                  : "text-gray-300"
            }`}
          />
        ))}
      </div>
      {count !== undefined && (
        <span className="text-sm text-gray-600">
          ({count} {count === 1 ? 'review' : 'reviews'})
        </span>
      )}
    </div>
  );
};

export default ServiceReviewStars;
