
import React, { useState, useEffect, useRef, useCallback } from "react";
import PageLayout from "@/components/layouts/PageLayout";
import ReviewCard from "@/components/reviews/ReviewCard";
import { reviews } from "@/data/reviewsData";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { createReviewsSchema } from "@/schemas/reviewsSchema";

const ITEMS_PER_PAGE = 12;

const ReviewsPage = () => {
  const [displayedReviews, setDisplayedReviews] = useState(reviews.slice(0, ITEMS_PER_PAGE));
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const loadingRef = useRef<HTMLDivElement>(null);

  // Load more reviews when scrolling
  const loadMoreReviews = useCallback(() => {
    if (loading) return;
    
    const nextItems = reviews.slice(
      displayedReviews.length,
      displayedReviews.length + ITEMS_PER_PAGE
    );
    
    if (nextItems.length > 0) {
      setLoading(true);
      // Simulate loading delay
      setTimeout(() => {
        setDisplayedReviews(prev => [...prev, ...nextItems]);
        setCurrentPage(prev => prev + 1);
        setLoading(false);
      }, 500);
    }
  }, [displayedReviews.length, loading]);

  // Intersection Observer for infinite scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          loadMoreReviews();
        }
      },
      { threshold: 0.1 }
    );

    if (loadingRef.current) {
      observer.observe(loadingRef.current);
    }

    return () => {
      if (loadingRef.current) {
        observer.unobserve(loadingRef.current);
      }
    };
  }, [loadMoreReviews, loading]);

  // Get whether there are more reviews to load
  const hasMoreReviews = displayedReviews.length < reviews.length;

  // Generate schema for reviews with 4.9 average rating
  const reviewsSchema = createReviewsSchema(displayedReviews);

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
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {displayedReviews.map((review, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index % ITEMS_PER_PAGE * 0.05 }}
                  >
                    <ReviewCard review={review} index={index} />
                  </motion.div>
                ))}
              </div>
            </ScrollArea>

            {/* Loading indicator and intersection observer target */}
            <div ref={loadingRef} className="h-20 flex justify-center items-center">
              {loading && (
                <div className="flex space-x-4">
                  <div className="w-3 h-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0ms" }}></div>
                  <div className="w-3 h-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: "150ms" }}></div>
                  <div className="w-3 h-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: "300ms" }}></div>
                </div>
              )}
              {!loading && !hasMoreReviews && (
                <p className="text-gray-500">No more reviews to load</p>
              )}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-xl text-gray-500 mb-4">Loading reviews...</p>
            </motion.div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default ReviewsPage;
