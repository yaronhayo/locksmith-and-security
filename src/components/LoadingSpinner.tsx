
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

type SpinnerSize = "sm" | "md" | "lg" | "xl";

interface LoadingSpinnerProps {
  size?: SpinnerSize;
  className?: string;
}

const sizeMap: Record<SpinnerSize, string> = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
  xl: "h-12 w-12"
};

const LoadingSpinner = ({ size = "md", className }: LoadingSpinnerProps) => {
  return (
    <div className="flex justify-center items-center">
      <Loader2 className={cn("animate-spin text-primary", sizeMap[size], className)} />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
