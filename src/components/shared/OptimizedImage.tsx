
import { memo } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  priority?: boolean;
  lazy?: boolean;
  sizes?: string;
  quality?: number;
}

const OptimizedImage = ({
  src,
  alt,
  width = 0,
  height = 0,
  className = "",
  objectFit = "cover",
  priority = false,
  lazy = true,
  sizes = "100vw",
  quality = 80,
}: OptimizedImageProps) => {
  // Determine loading attribute based on priority
  const loading = priority ? "eager" : lazy ? "lazy" : "eager";
  
  // Style for object-fit
  const imageStyle = {
    objectFit,
    width: width || "100%",
    height: height || "auto",
  };
  
  return (
    <div className={cn("overflow-hidden", className)}>
      <img
        src={src}
        alt={alt}
        width={width || undefined}
        height={height || undefined}
        loading={loading}
        sizes={sizes}
        style={imageStyle as React.CSSProperties}
        className="w-full h-full"
        decoding="async"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          console.error(`Failed to load image: ${target.src}`);
          // Set a fallback image
          target.src = '/placeholder.svg';
        }}
      />
    </div>
  );
};

export default memo(OptimizedImage);
