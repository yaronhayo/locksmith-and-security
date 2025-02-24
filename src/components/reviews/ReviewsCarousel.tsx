
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Review } from "@/types/reviews";
import ReviewCard from "./ReviewCard";

interface ReviewsCarouselProps {
  reviews: Review[];
}

const ReviewsCarousel = ({ reviews }: ReviewsCarouselProps) => {
  if (!reviews.length) return null;
  
  return (
    <Carousel
      className="w-full relative"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {reviews.map((review, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <ReviewCard review={review} index={index} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
};

export default ReviewsCarousel;
