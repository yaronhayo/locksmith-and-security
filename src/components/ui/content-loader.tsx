
import React from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

type ContentLoaderVariant = 
  | "card" 
  | "text" 
  | "avatar" 
  | "banner" 
  | "table" 
  | "form";

type ContentLoaderSize = "sm" | "md" | "lg";

interface ContentLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: ContentLoaderVariant;
  size?: ContentLoaderSize;
  count?: number;
  fullWidth?: boolean;
  animate?: boolean;
}

const ContentLoader = ({
  variant = "text",
  size = "md",
  count = 1,
  fullWidth = true,
  animate = true,
  className,
  ...props
}: ContentLoaderProps) => {
  const getVariantClasses = (variant: ContentLoaderVariant, size: ContentLoaderSize) => {
    const baseClasses = animate ? "animate-pulse" : "";
    const sizeMap: Record<ContentLoaderSize, string> = {
      sm: "h-4",
      md: "h-6",
      lg: "h-8",
    };
    
    const variants: Record<ContentLoaderVariant, string> = {
      text: `${sizeMap[size]} ${fullWidth ? 'w-full' : 'w-3/4'}`,
      card: "w-full h-32 sm:h-40 md:h-48 rounded-lg",
      avatar: `${size === 'sm' ? 'h-8 w-8' : size === 'md' ? 'h-12 w-12' : 'h-16 w-16'} rounded-full`,
      banner: "w-full h-24 sm:h-32 md:h-40 rounded-md",
      table: "w-full grid grid-cols-4 gap-2",
      form: "w-full space-y-4"
    };

    return `${baseClasses} ${variants[variant]}`;
  };

  const renderItems = () => {
    if (variant === "table") {
      return (
        <div className="w-full">
          <div className="flex gap-2 mb-2">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={`header-${i}`} className="h-6 flex-1" />
            ))}
          </div>
          {[...Array(count)].map((_, rowIndex) => (
            <div key={`row-${rowIndex}`} className="flex gap-2 mb-2">
              {[...Array(4)].map((_, colIndex) => (
                <Skeleton key={`cell-${rowIndex}-${colIndex}`} className="h-10 flex-1" />
              ))}
            </div>
          ))}
        </div>
      );
    }
    
    if (variant === "form") {
      return (
        <div className="space-y-4 w-full">
          {[...Array(count)].map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-10 w-full" />
            </div>
          ))}
          <Skeleton className="h-10 w-1/3 mt-6" />
        </div>
      );
    }

    return [...Array(count)].map((_, i) => (
      <Skeleton 
        key={i} 
        className={cn(
          getVariantClasses(variant, size),
          i !== count - 1 && "mb-2"
        )} 
      />
    ));
  };

  return (
    <div
      className={cn("flex flex-col", fullWidth && "w-full", className)}
      {...props}
      aria-busy="true"
      aria-live="polite"
      role="status"
    >
      <span className="sr-only">Loading content...</span>
      {renderItems()}
    </div>
  );
};

export { ContentLoader };
