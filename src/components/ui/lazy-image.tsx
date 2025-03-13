import React, { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { trackImageLoad2 } from '@/utils/performanceMonitoring';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: string;
  blur?: boolean;
  aspectRatio?: string;
}

const LazyImage = ({
  src,
  alt,
  className,
  containerClassName,
  width,
  height,
  priority = false,
  placeholder = '/placeholder.svg',
  blur = true,
  aspectRatio = 'aspect-auto',
  ...props
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(priority ? src : placeholder);
  
  // For non-priority images, lazy load them
  useEffect(() => {
    if (priority) return;
    
    let isMounted = true;
    const img = new Image();
    img.src = src;
    
    const { onLoad, onError } = trackImageLoad2(src, img);
    
    img.onload = () => {
      if (isMounted) {
        onLoad();
        setImgSrc(src);
        setIsLoaded(true);
      }
    };
    
    img.onerror = (error) => {
      if (isMounted) {
        console.error(`Failed to load image: ${src}`, error);
        onError(error);
      }
    };
    
    return () => {
      isMounted = false;
      img.onload = null;
      img.onerror = null;
    };
  }, [src, priority]);
  
  const handleLoad = () => {
    setIsLoaded(true);
  };
  
  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.error(`Error loading image: ${src}`);
    // Keep placeholder on error
    if (imgSrc !== placeholder) {
      setImgSrc(placeholder);
    }
  };
  
  return (
    <div className={cn(`relative overflow-hidden ${aspectRatio}`, containerClassName)}>
      {!isLoaded && blur && (
        <Skeleton 
          className="absolute inset-0 bg-gray-200/60 animate-pulse" 
          style={{ width: width || '100%', height: height || '100%' }}
        />
      )}
      
      <img
        src={imgSrc}
        alt={alt}
        className={cn(
          "w-full h-full transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  );
};

export default LazyImage;
