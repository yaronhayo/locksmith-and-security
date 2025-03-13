
import { Skeleton } from "@/components/ui/skeleton";
import { memo, useEffect } from "react";
import { trackComponentRender } from "@/utils/performanceMonitoring";
import { motion } from "framer-motion";

interface PageLoadingProps {
  type?: 'spinner' | 'skeleton';
  message?: string;
  count?: number;
}

const containerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const PageLoading = ({ type = 'spinner', message, count = 6 }: PageLoadingProps) => {
  const finishRenderTracking = trackComponentRender('PageLoading');
  
  useEffect(() => {
    finishRenderTracking();
  }, [finishRenderTracking]);

  if (type === 'skeleton') {
    return (
      <div className="min-h-[60vh] w-full max-w-7xl mx-auto px-4 py-12">
        <Skeleton className="h-10 w-1/3 mx-auto mb-12" />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerAnimation}
          initial="hidden"
          animate="show"
        >
          {Array(count).fill(0).map((_, i) => (
            <motion.div 
              key={i} 
              className="flex flex-col p-4 border rounded-lg space-y-4"
              variants={itemAnimation}
            >
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-4/5" />
              <Skeleton className="h-8 w-1/3 mt-2" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  }
  
  return (
    <div className="min-h-[60vh] flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="text-center"
      >
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        {message && <p className="text-lg text-gray-600">{message}</p>}
      </motion.div>
    </div>
  );
};

export default memo(PageLoading);
