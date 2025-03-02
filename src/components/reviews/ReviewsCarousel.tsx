
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Review } from "@/types/reviews";
import ReviewCard from "./ReviewCard";
import { memo, useEffect } from "react";
import { cn } from "@/lib/utils";

// Dynamic import for performance monitoring to reduce initial bundle size
import("@/utils/performanceMonitoring").then(({ trackComponentRender }) => {
  // Only initialize when needed
});

interface ReviewsCarouselProps {
  reviews: Review[];
  setApi?: (api: any) => void;
  className?: string;
}

const ReviewsCarousel = memo(({ reviews, setApi, className }: ReviewsCarouselProps) => {
  useEffect(() => {
    // Dynamically import the performance tracking only when component mounts
    let finishTracking: (() => number) | null = null;
    
    import("@/utils/performanceMonitoring").then(({ trackComponentRender }) => {
      finishTracking = trackComponentRender('ReviewsCarousel');
      return () => {
        if (finishTracking) finishTracking();
      };
    });
    
    return () => {
      if (finishTracking) finishTracking();
    };
  }, []);

  if (!reviews.length) return null;
  
  return (
    <Carousel
      className={cn("w-full relative", className)}
      opts={{
        align: "start",
        loop: true,
      }}
      setApi={setApi}
      aria-label="Customer Reviews"
    >
      <CarouselContent>
        {reviews.map((review, index) => (
          <CarouselItem 
            key={`review-${index}-${review.name}`} 
            className="md:basis-1/2 lg:basis-1/3"
            role="group"
            aria-roledescription="slide"
          >
            <ReviewCard review={review} index={index} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" aria-label="Previous review" />
      <CarouselNext className="hidden md:flex" aria-label="Next review" />
    </Carousel>
  );
});

ReviewsCarousel.displayName = 'ReviewsCarousel';

export default ReviewsCarousel;
