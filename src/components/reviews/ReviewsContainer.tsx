import { Review, ServiceCategory } from "@/types/reviews";
import { memo } from "react";
import ReviewCard from "./ReviewCard";
import { motion, AnimatePresence } from "framer-motion";
import ReviewsHeader from "./ReviewsHeader";
interface ReviewsContainerProps {
  displayedReviews: Review[];
  isLoading: boolean;
  totalReviews: number;
  location?: string;
  category?: ServiceCategory;
}
const ReviewsContainer = memo(({
  displayedReviews,
  isLoading,
  totalReviews,
  location,
  category
}: ReviewsContainerProps) => {
  // Animation variants
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.03
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };
  return;
});
ReviewsContainer.displayName = 'ReviewsContainer';
export default ReviewsContainer;