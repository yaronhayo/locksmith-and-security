
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { memo, useEffect } from "react";
import { trackComponentRender } from "@/utils/performanceMonitoring";
import { motion } from "framer-motion";

type SpinnerSize = "xs" | "sm" | "md" | "lg" | "xl";

interface LoadingSpinnerProps {
  size?: SpinnerSize;
  className?: string;
  text?: string;
  textClassName?: string;
  containerClassName?: string;
  centered?: boolean;
  delay?: number;
  showShimmer?: boolean;
}

const sizeMap: Record<SpinnerSize, string> = {
  xs: "h-3 w-3",
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
  xl: "h-12 w-12"
};

const LoadingSpinner = ({ 
  size = "md", 
  className, 
  text, 
  textClassName = "mt-2 text-sm text-gray-500",
  containerClassName,
  centered = true,
  delay = 0,
  showShimmer = false
}: LoadingSpinnerProps) => {
  const finishRenderTracking = trackComponentRender('LoadingSpinner');
  
  useEffect(() => {
    finishRenderTracking();
  }, []);

  return (
    <motion.div 
      className={cn(
        centered ? "flex flex-col justify-center items-center" : "inline-flex items-center",
        containerClassName
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: delay / 1000 }}
      role="status"
      aria-live="polite"
    >
      {showShimmer && (
        <div className="absolute inset-0 overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent" />
      )}
      
      <Loader2 
        className={cn(
          "animate-spin text-primary", 
          sizeMap[size], 
          className
        )} 
        aria-hidden="true"
      />
      
      {!text ? (
        <span className="sr-only">Loading...</span>
      ) : (
        <span className={cn(textClassName)}>{text}</span>
      )}
    </motion.div>
  );
};

// Use React.memo to prevent unnecessary re-renders
export default memo(LoadingSpinner);
