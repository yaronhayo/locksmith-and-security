import React, { memo, useState } from "react";
import { StarIcon } from "lucide-react";
import { motion } from "framer-motion";
import { type CarouselApi } from "@/components/ui/carousel";
import ReviewsCarousel from "./ReviewsCarousel";
import { Review, ServiceCategory } from "@/types/reviews";
import { reviewsByCategory, getReviewsByLocation } from "@/data/reviewsData";
import CarouselDots from "./CarouselDots";

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
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // If we have specific reviews from props, use those
  // Otherwise, gather diverse reviews from different categories and locations
  const diverseReviews = displayedReviews.length > 0 
    ? displayedReviews 
    : [
        // Mix of reviews from different categories
        ...reviewsByCategory.car.slice(0, 2),
        ...reviewsByCategory.residential.slice(0, 2),
        ...reviewsByCategory.commercial.slice(0, 2),
        ...reviewsByCategory.emergency.slice(0, 2),
        // Mix in some location-specific reviews
        ...getReviewsByLocation('North Bergen').slice(0, 2),
        ...getReviewsByLocation('Jersey City').slice(0, 2),
        ...getReviewsByLocation('Hoboken').slice(0, 2)
      ].slice(0, 9); // Limit to 9 reviews to avoid too many

  // Set up API event listeners
  React.useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);

    // Auto-rotation logic
    let interval: NodeJS.Timeout;
    
    const startRotation = () => {
      interval = setInterval(() => {
        if (!isPaused && api) {
          api.scrollNext();
        }
      }, 5000); // 5 seconds
    };

    startRotation();

    return () => {
      clearInterval(interval);
      api.off("select", handleSelect);
    };
  }, [api, isPaused]);

  const handleDotClick = (index: number) => {
    api?.scrollTo(index);
  };

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied customers across different areas and services.
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
                5.0 from {totalReviews || diverseReviews.length} reviews
              </span>
            </motion.div>
          )}
        </motion.div>
        
        <div 
          className="w-full max-w-7xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ReviewsCarousel 
            reviews={diverseReviews} 
            setApi={setApi} 
            className="mb-8"
          />
          
          <CarouselDots 
            total={diverseReviews.length} 
            current={current} 
            onDotClick={handleDotClick} 
            className="mt-8"
          />
        </div>
      </div>
    </section>
  );
});

ReviewsContainer.displayName = 'ReviewsContainer';

export default ReviewsContainer;
