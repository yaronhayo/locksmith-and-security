
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
  
  return (
    <div className="w-full px-4 sm:px-0">
      <ReviewsHeader 
        totalReviews={totalReviews} 
        location={location} 
        category={category} 
      />
      
      {displayedReviews.length > 0 ? (
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {displayedReviews.map((review, index) => (
              <motion.div 
                key={`${review.name}-${index}`}
                variants={itemVariants}
                layout
                className="will-change-transform"
              >
                <ReviewCard review={review} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        !isLoading && (
          <div className="text-center py-8">
            <p className="text-gray-500">No reviews found.</p>
          </div>
        )
      )}
    </div>
  );
});

ReviewsContainer.displayName = 'ReviewsContainer';
export default ReviewsContainer;
