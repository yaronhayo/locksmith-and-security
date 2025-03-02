
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { memo } from "react";

type SpinnerSize = "sm" | "md" | "lg" | "xl";

interface LoadingSpinnerProps {
  size?: SpinnerSize;
  className?: string;
  text?: string;
}

const sizeMap: Record<SpinnerSize, string> = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
  xl: "h-12 w-12"
};

const LoadingSpinner = ({ size = "md", className, text }: LoadingSpinnerProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Loader2 className={cn("animate-spin text-primary", sizeMap[size], className)} />
      <span className="sr-only">{text || "Loading..."}</span>
      {text && <span className="mt-2 text-sm text-gray-500">{text}</span>}
    </div>
  );
};

export default memo(LoadingSpinner);
