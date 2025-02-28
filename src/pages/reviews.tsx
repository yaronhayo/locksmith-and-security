
import React from "react";
import PageLayout from "@/components/layouts/PageLayout";
import ReviewCard from "@/components/reviews/ReviewCard";
import { useReviews } from "@/components/reviews/useReviews";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { createReviewsSchema } from "@/schemas/reviewsSchema";
import LoadingSpinner from "@/components/LoadingSpinner";

const ReviewsPage = () => {
  const { 
    displayedReviews, 
    isLoading, 
    loadingRef, 
    totalReviews,
    hasMore 
  } = useReviews();

  // Generate schema for reviews
  const reviewsSchema = createReviewsSchema(displayedReviews);

  // Animation variants for reviews
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.03,
        delayChildren: 0.01
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.25 }
    }
  };

  return (
    <PageLayout
      title="Customer Reviews | Locksmith & Security LLC"
      description="Read authentic reviews from our satisfied customers about our professional locksmith services in North Bergen and surrounding areas."
      heroTitle="Customer Testimonials"
      heroDescription="See what our clients have to say about our locksmith services in North Bergen and surrounding areas"
      schema={reviewsSchema}
    >
      <div className="container mx-auto px-4 py-12">
        {displayedReviews.length > 0 ? (
          <>
            <ScrollArea className="rounded-md">
              <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
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
            </ScrollArea>

            {/* Loading indicator and intersection observer target */}
            <div 
              ref={loadingRef} 
              className="h-24 flex justify-center items-center mb-8"
            >
              {isLoading && (
                <div className="flex flex-col items-center space-y-2">
                  <LoadingSpinner size="lg" className="text-primary" />
                  <p className="text-sm text-gray-500 animate-pulse">
                    Loading more reviews...
                  </p>
                </div>
              )}
              {!isLoading && !hasMore && displayedReviews.length > 0 && (
                <p className="text-gray-500">
                  Showing all {displayedReviews.length} of {totalReviews} reviews
                </p>
              )}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center gap-4"
            >
              <LoadingSpinner size="xl" className="text-primary" />
              <p className="text-xl text-gray-500">Loading reviews...</p>
            </motion.div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default ReviewsPage;
