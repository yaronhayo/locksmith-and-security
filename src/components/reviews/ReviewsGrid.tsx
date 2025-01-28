import ReviewCard from "./ReviewCard";

interface ReviewsGridProps {
  displayedReviews: Array<{
    name: string;
    rating: number;
    text: string;
    service: string;
    location: string;
    date: string;
  }>;
}

const ReviewsGrid = ({ displayedReviews }: ReviewsGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayedReviews.map((review, index) => (
        <ReviewCard key={index} review={review} index={index} />
      ))}
    </div>
  );
};

export default ReviewsGrid;