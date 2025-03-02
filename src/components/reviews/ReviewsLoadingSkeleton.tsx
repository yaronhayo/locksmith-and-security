
import { Skeleton } from "@/components/ui/skeleton";
import { memo, useEffect } from "react";
import { trackComponentRender } from "@/utils/performanceMonitoring";
import { motion } from "framer-motion";

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
      <div className="space-y-4">
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-8 w-2/3 mx-auto mb-2" />
          <Skeleton className="h-4 w-3/4 mx-auto" />
        </div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6"
          variants={containerAnimation}
          initial="hidden"
          animate="show"
        >
          {Array(count).fill(0).map((_, i) => (
            <motion.div 
              key={i} 
              className="flex flex-col space-y-3 p-4 border rounded-lg"
              variants={itemAnimation}
            >
              <div className="flex items-center space-x-2">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
              </div>
              <Skeleton className="h-24" />
              <div className="flex items-center pt-2">
                <Skeleton className="h-3 w-24" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default memo(ReviewsLoadingSkeleton);
