
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import type { Review } from "@/types/reviews";

interface ReviewCardProps {
  review: Review;
  index: number;
}

const ReviewCard = ({ review, index }: ReviewCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full hover:shadow-lg transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{review.name}</h3>
              <p className="text-sm text-muted-foreground">{review.location}</p>
            </div>
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="ml-1 font-semibold">{review.rating}</span>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground italic">{review.text}</p>
            <div className="flex justify-between items-center text-xs text-muted-foreground">
              <span>{review.service}</span>
              <span>{review.date}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ReviewCard;
