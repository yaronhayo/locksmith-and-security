
import { memo, useEffect, useState, useCallback } from 'react';
import { Review } from '@/types/reviews';
import ReviewsList from '@/components/reviews/ReviewsList';
import { motion } from 'framer-motion';
import { reviews } from '@/data/reviewsData';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { trackComponentRender, measurePerformance } from '@/utils/performanceMonitoring';
import ReviewsLoadingSkeleton from '@/components/reviews/ReviewsLoadingSkeleton';

// Select diverse reviews representing different service areas and services
const getHomePageReviews = (): Review[] => {
  return measurePerformance('Get Home Page Reviews', () => {
    // Create a map to track already selected locations and services for diversity
    const selectedLocations = new Set<string>();
    const selectedServices = new Set<string>();
    const selectedReviews: Review[] = [];
    
    // First pass: get reviews with unique combinations of location and service
    for (const review of reviews) {
      const locationServiceKey = `${review.location}-${review.service}`;
      if (!selectedLocations.has(review.location) || !selectedServices.has(review.service)) {
        selectedReviews.push(review);
        selectedLocations.add(review.location);
        selectedServices.add(review.service);
        
        if (selectedReviews.length >= 26) break;
      }
    }
    
    // If we don't have enough reviews yet, add more diverse ones
    if (selectedReviews.length < 26) {
      for (const review of reviews) {
        if (!selectedReviews.includes(review)) {
          selectedReviews.push(review);
          if (selectedReviews.length >= 26) break;
        }
      }
    }
    
    // Take only first 26 reviews
    return selectedReviews.slice(0, 26);
  });
};

const HomeReviewsSection = () => {
  const finishRenderTracking = trackComponentRender('HomeReviewsSection');
  const [isLoading, setIsLoading] = useState(true);
  const [homeReviews, setHomeReviews] = useState<Review[]>([]);
  
  // Memoize the function to prevent unnecessary re-renders
  const loadReviews = useCallback(() => {
    // Simulate a realistic loading time for better UX
    const timer = setTimeout(() => {
      setHomeReviews(getHomePageReviews());
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    const cleanup = loadReviews();
    finishRenderTracking();
    return cleanup;
  }, [loadReviews]);
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by residents and businesses throughout North Bergen and surrounding areas.
          </p>
        </motion.div>
        
        {isLoading ? (
          <ReviewsLoadingSkeleton count={6} />
        ) : (
          <ReviewsList reviews={homeReviews} isLoading={false} />
        )}
        
        <div className="mt-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            viewport={{ once: true }}
          >
            <Button
              asChild
              variant="default"
              size="lg"
              className="group shadow-md hover:shadow-lg transition-all duration-300"
            >
              <a 
                href="/reviews" 
                className="no-underline inline-flex items-center gap-2"
              >
                <Star className="w-5 h-5 text-secondary group-hover:text-white transition-colors" />
                View all reviews
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(HomeReviewsSection);
