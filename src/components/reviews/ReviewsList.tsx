
import { memo, useEffect, useState } from 'react';
import { Review } from '@/types/reviews';
import { type CarouselApi } from "@/components/ui/carousel";
import ReviewsLoadingSkeleton from './ReviewsLoadingSkeleton';
import ReviewsCarousel from './ReviewsCarousel';
import CarouselDots from './CarouselDots';

interface ReviewsListProps {
  reviews: Review[];
  isLoading?: boolean;
}

const ReviewsList = ({ reviews, isLoading }: ReviewsListProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    let interval: NodeJS.Timeout;
    
    const startRotation = () => {
      interval = setInterval(() => {
        if (!isPaused) {
          api.scrollNext();
        }
      }, 1800); // 1.8 seconds
    };

    startRotation();

    return () => {
      clearInterval(interval);
      api.off("select", () => {});
    };
  }, [api, isPaused]);

  if (isLoading) {
    return <ReviewsLoadingSkeleton />;
  }

  return (
    <div 
      className="w-full max-w-7xl mx-auto px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <ReviewsCarousel reviews={reviews} setApi={setApi} />
      <CarouselDots 
        total={reviews.length} 
        current={current} 
        onDotClick={(index) => api?.scrollTo(index)} 
      />
    </div>
  );
};

export default memo(ReviewsList);
