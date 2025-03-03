import React from "react";
import PageLayout from "@/components/layouts/PageLayout";
import ReviewCard from "@/components/reviews/ReviewCard";
import { useReviews } from "@/components/reviews/useReviews";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { createReviewsSchema } from "@/schemas/reviewsSchema";
import LoadingSpinner from "@/components/LoadingSpinner";
import { allReviews } from "@/data/reviewsData";
const ReviewsPage = () => {
  // We're using allReviews from our data file to ensure we have all 150 reviews
  const {
    displayedReviews,
    isLoading,
    loadingRef,
    totalReviews,
    hasMore
  } = useReviews();

  // Generate schema for reviews
  const reviewsSchemaData = createReviewsSchema(displayedReviews);
  const reviewsSchema = [{
    type: "ReviewPage",
    data: reviewsSchemaData
  }];

  // Animation variants for reviews
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.01
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 10
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25
      }
    }
  };
  return <PageLayout title="150+ Customer Reviews | Locksmith & Security LLC" description="Browse our extensive collection of 150+ authentic reviews from customers across all service areas about our wide range of locksmith services." heroTitle="Customer Testimonials" heroDescription="See what our clients have to say about our locksmith services across all areas and service types" schema={reviewsSchema} hideBreadcrumbs={false}>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Over 150 Five-Star Reviews</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Browse through our collection of verified customer reviews from across all our service areas.
            Our customers have shared their experiences with our various locksmith services.
          </p>
          <div className="flex justify-center mt-4">
            
          </div>
        </div>
        
        {displayedReviews.length > 0 ? <>
            <ScrollArea className="rounded-md">
              <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" variants={containerVariants} initial="hidden" animate="visible">
                <AnimatePresence>
                  {displayedReviews.map((review, index) => <motion.div key={`${review.name}-${index}`} variants={itemVariants} layout className="will-change-transform">
                      <ReviewCard review={review} index={index} />
                    </motion.div>)}
                </AnimatePresence>
              </motion.div>
            </ScrollArea>

            {/* Loading indicator and intersection observer target */}
            <div ref={loadingRef} className="h-20 flex justify-center items-center">
              {isLoading ? <div className="flex flex-col items-center space-y-2">
                  <LoadingSpinner size="md" className="text-primary" />
                  <p className="text-sm text-muted-foreground">Loading more reviews...</p>
                </div> : hasMore ? <p className="text-sm text-muted-foreground">Scroll for more reviews</p> : <p className="text-gray-500">
                    Showing all {displayedReviews.length} reviews
                  </p>}
            </div>
          </> : <div className="text-center py-16">
            <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.3
        }} className="flex flex-col items-center gap-4">
              <LoadingSpinner size="lg" className="text-primary" />
              <p className="text-xl text-gray-500">Loading reviews...</p>
            </motion.div>
          </div>}
      </div>
    </PageLayout>;
};
export default ReviewsPage;