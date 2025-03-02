
import LoadingSpinner from "@/components/LoadingSpinner";
import { ContentLoader } from "@/components/ui/content-loader";
import { memo, useEffect } from "react";
import { trackComponentRender } from "@/utils/performanceMonitoring";
import { motion } from "framer-motion";

interface PageLoadingProps {
  type?: 'spinner' | 'skeleton';
  message?: string;
  count?: number;
  variant?: 'default' | 'service' | 'contact' | 'reviews';
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

const PageLoading = ({ 
  type = 'spinner', 
  message = 'Loading content...', 
  count = 6,
  variant = 'default'
}: PageLoadingProps) => {
  const finishRenderTracking = trackComponentRender('PageLoading');
  
  useEffect(() => {
    finishRenderTracking();
  }, []);

  if (type === 'skeleton') {
    // Render skeleton based on the variant
    if (variant === 'service') {
      return (
        <div className="min-h-[60vh] w-full max-w-7xl mx-auto px-4 py-8 md:py-12">
          <ContentLoader variant="banner" className="mb-8" />
          <ContentLoader variant="text" size="lg" className="mb-6" />
          <ContentLoader variant="text" count={3} className="mb-8" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="md:col-span-2">
              <ContentLoader variant="text" size="md" className="mb-4" />
              <ContentLoader variant="text" count={4} className="mb-6" />
              <ContentLoader variant="text" size="md" className="mb-4" />
              <ContentLoader variant="text" count={3} />
            </div>
            <div className="md:col-span-1">
              <ContentLoader variant="card" className="mb-6" />
              <ContentLoader variant="text" size="sm" count={3} />
            </div>
          </div>
          
          <ContentLoader variant="text" size="lg" className="mb-4" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(3)].map((_, i) => (
              <ContentLoader key={i} variant="card" className="h-40" />
            ))}
          </div>
        </div>
      );
    }
    
    if (variant === 'reviews') {
      return (
        <div className="min-h-[60vh] w-full max-w-7xl mx-auto px-4 py-8 md:py-12">
          <div className="text-center mb-8">
            <ContentLoader variant="text" size="lg" className="w-1/2 mx-auto mb-4" />
            <ContentLoader variant="text" className="w-3/4 mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(count)].map((_, i) => (
              <div key={i} className="border rounded-lg p-4 shadow-sm">
                <div className="flex items-center mb-4">
                  <ContentLoader variant="avatar" size="sm" className="mr-3" />
                  <div className="flex-1">
                    <ContentLoader variant="text" size="sm" className="mb-1" />
                    <ContentLoader variant="text" size="xs" className="w-1/2" />
                  </div>
                </div>
                <ContentLoader variant="text" count={3} />
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    if (variant === 'contact') {
      return (
        <div className="min-h-[60vh] w-full max-w-7xl mx-auto px-4 py-8 md:py-12">
          <ContentLoader variant="text" size="lg" className="w-1/2 mx-auto text-center mb-6" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ContentLoader variant="form" count={4} />
            
            <div className="space-y-6">
              <ContentLoader variant="text" size="md" className="mb-2" />
              <ContentLoader variant="text" count={2} className="mb-6" />
              
              {[...Array(3)].map((_, i) => (
                <div key={i} className="mb-4">
                  <ContentLoader variant="text" size="sm" className="mb-2 w-1/4" />
                  <ContentLoader variant="text" size="xs" className="w-3/4" />
                </div>
              ))}
              
              <ContentLoader variant="card" className="h-48 mt-4" />
            </div>
          </div>
        </div>
      );
    }

    // Default skeleton
    return (
      <div className="min-h-[60vh] w-full max-w-7xl mx-auto px-4 py-8 md:py-12">
        <ContentLoader variant="text" size="lg" className="w-1/3 mx-auto mb-12" />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerAnimation}
          initial="hidden"
          animate="show"
        >
          {[...Array(count)].map((_, i) => (
            <motion.div 
              key={i} 
              className="flex flex-col p-4 border rounded-lg space-y-4"
              variants={itemAnimation}
            >
              <ContentLoader variant="text" size="md" className="mb-2" />
              <ContentLoader variant="text" count={3} />
              <ContentLoader variant="text" size="sm" className="w-1/3 mt-2" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  }
  
  // Spinner loading state
  return (
    <div className="min-h-[60vh] flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <LoadingSpinner 
          size="lg" 
          text={message} 
          textClassName="mt-4 text-base text-gray-600"
          showShimmer={true}
        />
      </motion.div>
    </div>
  );
};

export default memo(PageLoading);
