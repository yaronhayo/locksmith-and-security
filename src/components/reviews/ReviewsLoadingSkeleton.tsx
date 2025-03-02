
import { memo, useEffect } from "react";
import { trackComponentRender } from "@/utils/performanceMonitoring";
import { motion } from "framer-motion";
import { ContentLoader } from "@/components/ui/content-loader";

interface ReviewsLoadingSkeletonProps {
  count?: number;
}

const containerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const itemAnimation = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 }
};

const ReviewsLoadingSkeleton = ({ count = 6 }: ReviewsLoadingSkeletonProps) => {
  const finishRenderTracking = trackComponentRender('ReviewsLoadingSkeleton');
  
  useEffect(() => {
    finishRenderTracking();
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="space-y-6">
        <div className="flex flex-col space-y-3 text-center">
          <ContentLoader variant="text" size="lg" className="w-2/3 mx-auto mb-2" />
          <ContentLoader variant="text" className="w-3/4 mx-auto" />
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
          variants={containerAnimation}
          initial="hidden"
          animate="show"
        >
          {Array(count).fill(0).map((_, i) => (
            <motion.div 
              key={i} 
              className="flex flex-col p-4 border rounded-lg shadow-sm"
              variants={itemAnimation}
            >
              <div className="flex items-center space-x-3 mb-4">
                <ContentLoader variant="avatar" size="sm" />
                <div className="space-y-2 flex-1">
                  <ContentLoader variant="text" size="sm" className="w-3/4" />
                  <ContentLoader variant="text" size="xs" className="w-1/2" />
                </div>
              </div>
              <ContentLoader variant="text" count={3} className="mb-3" />
              <div className="flex items-center pt-2">
                <ContentLoader variant="text" size="xs" className="w-24" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default memo(ReviewsLoadingSkeleton);
