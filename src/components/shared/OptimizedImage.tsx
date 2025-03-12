
import { memo, useState, useRef, useEffect } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import { cn } from "@/lib/utils";
import { trackImageLoad } from "@/utils/performanceMonitoring";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
}

const OptimizedImage = memo(({
  src,
  alt,
  width,
  height,
  className,
  containerClassName,
  priority = false,
  objectFit = "contain",
  ...props
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  
  // Use intersection observer for lazy loading
  useEffect(() => {
    if (!priority && imgRef.current) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && imgRef.current) {
            imgRef.current.src = src;
            observer.disconnect();
          }
        });
      }, {
        rootMargin: '200px', // Load when image is 200px from viewport
        threshold: 0.01
      });
      
      observer.observe(imgRef.current);
      return () => observer.disconnect();
    }
  }, [src, priority]);
  
  const handleLoad = () => {
    setIsLoading(false);
  };
  
  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.error(`Image failed to load: ${src}`, e);
    setIsLoading(false);
    setHasError(true);
  };
  
  // Track image load performance
  const { onLoad, onError } = trackImageLoad(src);
  
  return (
    <div className={cn("relative", containerClassName)} style={{ width, height }}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <LoadingSpinner size="sm" />
        </div>
      )}
      
      {hasError ? (
        <div className="w-full h-full flex items-center justify-center text-primary font-semibold text-center p-2">
          {alt || "Image failed to load"}
        </div>
      ) : (
        <img
          ref={imgRef}
          src={priority ? src : undefined} // Only set src initially if priority
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          fetchpriority={priority ? "high" : "auto"}
          decoding="async"
          className={cn(
            "transition-opacity duration-300",
            isLoading ? "opacity-0" : "opacity-100",
            className
          )}
          style={{ objectFit }}
          onLoad={(e) => {
            handleLoad();
            onLoad();
            if (props.onLoad) props.onLoad(e);
          }}
          onError={(e) => {
            handleError(e);
            onError(e);
            if (props.onError) props.onError(e);
          }}
          {...props}
        />
      )}
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;
