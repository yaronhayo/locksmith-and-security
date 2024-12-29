import { useState, useEffect, memo } from 'react';
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

const OptimizedImage = ({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  ...props
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (priority) {
      const img = new Image();
      img.src = src;
      img.onload = () => setIsLoaded(true);
      img.onerror = () => setError(true);
    }
  }, [src, priority]);

  if (error) {
    return (
      <div 
        className={cn(
          "bg-gray-200 animate-pulse rounded",
          className
        )}
        style={{ width, height }}
        role="img"
        aria-label={alt}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        "transition-opacity duration-300",
        !isLoaded && !priority && "opacity-0",
        isLoaded && "opacity-100",
        className
      )}
      width={width}
      height={height}
      onLoad={() => setIsLoaded(true)}
      onError={() => setError(true)}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      {...props}
    />
  );
};

export default memo(OptimizedImage);