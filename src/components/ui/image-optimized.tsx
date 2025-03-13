
import React, { useState } from 'react';
import { trackImageLoad } from '@/utils/performanceMonitoring';

interface ImageOptimizedProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  width?: string | number;
  height?: string | number;
  priority?: boolean;
}

const ImageOptimized = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  ...props
}: ImageOptimizedProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setIsLoaded(true);
    if (props.onLoad) {
      props.onLoad(e);
    }
  };
  
  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.target as HTMLImageElement;
    img.src = '/placeholder.svg';
    if (props.onError) {
      props.onError(e);
    }
  };
  
  // Use native lazy loading unless priority is true
  const loadingValue = priority ? "eager" : "lazy";
  const fetchPriorityValue = priority ? "high" : "auto";
  
  // Add width and height to prevent layout shifts
  const imgWidth = width || (typeof height === 'number' ? 'auto' : undefined);
  const imgHeight = height || (typeof width === 'number' ? 'auto' : undefined);
  
  return (
    <img
      src={src}
      alt={alt}
      className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
      width={imgWidth}
      height={imgHeight}
      loading={loadingValue}
      fetchPriority={fetchPriorityValue}
      decoding="async"
      onLoad={handleLoad}
      onError={handleError}
      {...props}
    />
  );
};

export default ImageOptimized;
