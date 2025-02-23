
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

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    // Optimized auto-rotation with requestAnimationFrame
    let rafId: number;
    let lastRotation = performance.now();
    const rotationInterval = 3000;

    const rotate = (timestamp: number) => {
      if (timestamp - lastRotation >= rotationInterval) {
        api.scrollNext();
        lastRotation = timestamp;
      }
      rafId = requestAnimationFrame(rotate);
    };

    rafId = requestAnimationFrame(rotate);

    return () => {
      cancelAnimationFrame(rafId);
      api.off("select", () => {});
    };
  }, [api]);

  if (isLoading) {
    return <ReviewsLoadingSkeleton />;
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <ReviewsCarousel reviews={reviews} />
      <CarouselDots 
        total={reviews.length} 
        current={current} 
        onDotClick={(index) => api?.scrollTo(index)} 
      />
    </div>
  );
};

export default memo(ReviewsList);
