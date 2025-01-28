import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface ReviewCardProps {
  review: {
    name: string;
    rating: number;
    text: string;
    service: string;
    location: string;
    date: string;
  };
  index: number;
}

const ReviewCard = ({ review, index }: ReviewCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      <div className="flex items-center mb-4">
        <div className="flex-1">
          <h3 className="font-semibold text-lg">{review.name}</h3>
          <div className="flex items-center space-x-1">
            {Array.from({ length: review.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
        <span className="text-sm text-gray-500">{review.date}</span>
      </div>
      <p className="text-gray-600 mb-4">{review.text}</p>
      <div className="text-sm text-gray-500">
        <p>Service: {review.service}</p>
        <p>Location: {review.location}</p>
      </div>
    </motion.div>
  );
};

export default ReviewCard;