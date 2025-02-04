import { memo, useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';
import { Review } from '@/types/reviews';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface ReviewsListProps {
  reviews: Review[];
  displayedReviews: Review[];
}

const ReviewsList = ({ reviews, displayedReviews }: ReviewsListProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    // Auto-rotation
    const autoRotate = setInterval(() => {
      api.scrollNext();
    }, 1500);

    return () => {
      clearInterval(autoRotate);
      api.off("select", () => {});
    };
  }, [api]);

  const handleDotClick = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <Carousel
        setApi={setApi}
        className="w-full relative"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {displayedReviews.map((review, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <ReviewCard review={review} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>

      <div className="flex justify-center gap-2 mt-4">
        {displayedReviews.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              current === index ? "bg-primary" : "bg-gray-300"
            )}
            aria-label={`Go to review ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(ReviewsList);