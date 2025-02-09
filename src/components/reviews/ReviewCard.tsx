import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Review } from "@/types/reviews";

interface ReviewCardProps {
  review: Review;
  index: number;
}

const ReviewCard = ({ review, index }: ReviewCardProps) => {
  const { name, rating, text, date, service, location } = review;
  
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 text-secondary"
              fill="currentColor"
            />
          ))}
        </div>
        <Quote className="w-8 h-8 text-primary/20 mb-4" />
        <p className="text-gray-600 mb-4 line-clamp-4">{text}</p>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
          <p className="text-sm text-gray-500">{service}</p>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;