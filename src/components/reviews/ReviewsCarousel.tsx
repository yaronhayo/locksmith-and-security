
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
import { trackComponentRender } from "@/utils/performanceMonitoring";
import { cn } from "@/lib/utils";

interface ReviewsCarouselProps {
  reviews: Review[];
  setApi?: (api: any) => void;
  className?: string;
}

const ReviewsCarousel = memo(({ reviews, setApi, className }: ReviewsCarouselProps) => {
  const finishRenderTracking = trackComponentRender('ReviewsCarousel');
  
  useEffect(() => {
    finishRenderTracking();
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
    >
      <CarouselContent>
        {reviews.map((review, index) => (
          <CarouselItem key={`review-${index}-${review.name}`} className="md:basis-1/2 lg:basis-1/3">
            <ReviewCard review={review} index={index} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
});

ReviewsCarousel.displayName = 'ReviewsCarousel';

export default ReviewsCarousel;
