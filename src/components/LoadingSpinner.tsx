
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { memo, useEffect } from "react";
import { trackComponentRender } from "@/utils/performanceMonitoring";

type SpinnerSize = "sm" | "md" | "lg" | "xl";

interface LoadingSpinnerProps {
  size?: SpinnerSize;
  className?: string;
  text?: string;
  textClassName?: string;
  containerClassName?: string;
  centered?: boolean;
}

const sizeMap: Record<SpinnerSize, string> = {
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
  centered = true
}: LoadingSpinnerProps) => {
  const finishRenderTracking = trackComponentRender('LoadingSpinner');
  
  useEffect(() => {
    finishRenderTracking();
  }, []);

  return (
    <div className={cn(
      centered ? "flex flex-col justify-center items-center" : "inline-flex items-center",
      containerClassName
    )}>
      <Loader2 
        className={cn(
          "animate-spin text-primary", 
          sizeMap[size], 
          className
        )} 
      />
      {!text ? (
        <span className="sr-only">Loading...</span>
      ) : (
        <span className={cn(textClassName)}>{text}</span>
      )}
    </div>
  );
};

// Use React.memo to prevent unnecessary re-renders
export default memo(LoadingSpinner);
