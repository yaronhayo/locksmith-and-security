
import { memo, useEffect, useState, useCallback } from 'react';
import { Review } from '@/types/reviews';
import { type CarouselApi } from "@/components/ui/carousel";
import ReviewsLoadingSkeleton from './ReviewsLoadingSkeleton';
import ReviewsCarousel from './ReviewsCarousel';
import CarouselDots from './CarouselDots';

interface ReviewsListProps {
  reviews: Review[];
  isLoading?: boolean;
}

const ReviewsList = memo(({ reviews, isLoading }: ReviewsListProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);

    let interval: NodeJS.Timeout;
    
    const startRotation = () => {
      interval = setInterval(() => {
        if (!isPaused && api) {
          api.scrollNext();
        }
      }, 1800); // 1.8 seconds
    };

    startRotation();

    return () => {
      clearInterval(interval);
      api.off("select", handleSelect);
    };
  }, [api, isPaused]);

  const handleDotClick = useCallback((index: number) => {
    api?.scrollTo(index);
  }, [api]);

  const handleMouseEnter = useCallback(() => setIsPaused(true), []);
  const handleMouseLeave = useCallback(() => setIsPaused(false), []);

  if (isLoading) {
    return <ReviewsLoadingSkeleton />;
  }

  if (!reviews.length) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 py-8 text-center">
        <p className="text-gray-500">No reviews available at this time.</p>
      </div>
    );
  }

  return (
    <div 
      className="w-full max-w-7xl mx-auto px-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ReviewsCarousel reviews={reviews} setApi={setApi} />
      <CarouselDots 
        total={reviews.length} 
        current={current} 
        onDotClick={handleDotClick} 
      />
    </div>
  );
});

ReviewsList.displayName = 'ReviewsList';

export default ReviewsList;
