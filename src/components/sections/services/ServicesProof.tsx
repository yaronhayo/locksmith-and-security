
import React, { useEffect } from 'react';
import { Review } from '@/types/reviews';
import { StarIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { reviews, reviewsByCategory } from '@/data/reviewsData';
import { trackComponentRender } from '@/utils/performanceMonitoring';
import { memo } from 'react';

interface ServicesProofProps {
  reviewsData?: Review[];
  category?: 'car' | 'residential' | 'commercial' | 'emergency';
}

const ServicesProof: React.FC<ServicesProofProps> = memo(({ reviewsData, category }) => {
  const finishRenderTracking = trackComponentRender('ServicesProof');
  
  useEffect(() => {
    finishRenderTracking();
  }, []);
  
  // Use provided reviews data if available, otherwise use reviews based on category or default to all reviews
  const displaySourceReviews = reviewsData || 
    (category ? reviewsByCategory[category] : reviews);
  
  // Take only the first 3 reviews for display
  const displayReviews = displaySourceReviews.slice(0, 3);
  
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Read what our satisfied customers have to say about our professional locksmith services.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {displayReviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon 
                    key={i} 
                    className={`h-5 w-5 ${i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
              <div className="flex items-center">
                <div className="bg-primary/10 h-10 w-10 rounded-full flex items-center justify-center text-primary font-medium">
                  {review.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.service}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a 
            href="/reviews" 
            className="text-primary font-medium hover:text-primary-dark transition-colors"
          >
            View All Reviews →
          </a>
        </motion.div>
      </div>
    </section>
  );
});

ServicesProof.displayName = 'ServicesProof';

export default ServicesProof;
