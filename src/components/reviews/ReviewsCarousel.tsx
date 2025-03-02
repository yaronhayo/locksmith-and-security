
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
import { SchemaScripts } from "@/components/meta/SchemaScripts";
import { createTestimonialSchema } from "@/schemas/testimonialSchema";

interface ReviewsCarouselProps {
  reviews: Review[];
  setApi?: (api: any) => void;
  className?: string;
  location?: string;
  includeSchema?: boolean;
}

const ReviewsCarousel = memo(({ 
  reviews, 
  setApi, 
  className,
  location,
  includeSchema = true
}: ReviewsCarouselProps) => {
  const finishRenderTracking = trackComponentRender('ReviewsCarousel');
  
  useEffect(() => {
    finishRenderTracking();
  }, []);

  if (!reviews.length) return null;
  
  const testimonialSchema = createTestimonialSchema({
    reviews,
    location,
    aggregateRating: {
      ratingValue: "5.0",
      reviewCount: String(reviews.length)
    }
  });
  
  return (
    <>
      {includeSchema && (
        <SchemaScripts schemas={[{ type: 'LocalBusiness', data: testimonialSchema }]} />
      )}
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
    </>
  );
});

ReviewsCarousel.displayName = 'ReviewsCarousel';

export default ReviewsCarousel;
