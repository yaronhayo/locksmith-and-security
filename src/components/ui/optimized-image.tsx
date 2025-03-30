
import React, { useState, useEffect, memo } from 'react';
import { cn } from '@/lib/utils';
import { trackImageLoad } from '@/utils/performanceMonitoring';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  priority?: boolean;
  placeholder?: string;
  aspectRatio?: 'auto' | 'square' | 'video' | number;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  sizes?: string;
  onLoadingComplete?: () => void;
  containerClassName?: string;
}

/**
 * Optimized image component with:
 * - Loading state management
 * - Error handling
 * - Proper aspect ratio to prevent layout shifts
 * - Appropriate loading priority attributes
 * - Placeholder support
 */
const OptimizedImage = ({
  src,
  alt,
  priority = false,
  placeholder = '/placeholder.svg',
  aspectRatio = 'auto',
  objectFit = 'cover',
  sizes = '100vw',
  onLoadingComplete,
  className,
  containerClassName,
  ...props
}: OptimizedImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const aspectRatioClass = aspectRatio === 'auto' 
    ? 'aspect-auto' 
    : aspectRatio === 'square' 
      ? 'aspect-square' 
      : aspectRatio === 'video' 
        ? 'aspect-video' 
        : '';

  useEffect(() => {
    // Reset states when src changes
    setLoaded(false);
    setError(false);
  }, [src]);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setLoaded(true);
    setError(false);
    onLoadingComplete?.();
    
    // Track for performance monitoring
    trackImageLoad(src, e.currentTarget.naturalWidth, e.currentTarget.naturalHeight);
  };

  const handleError = () => {
    setError(true);
    console.error(`Failed to load image: ${src}`);
  };

  return (
    <div 
      className={cn(
        'relative overflow-hidden bg-muted',
        aspectRatioClass,
        containerClassName
      )}
      style={typeof aspectRatio === 'number' ? { aspectRatio: String(aspectRatio) } : undefined}
    >
      {(!loaded || error) && (
        <img 
          src={placeholder} 
          alt="Loading placeholder"
          className={cn(
            'w-full h-full',
            `object-${objectFit}`,
            'transition-opacity duration-500',
            'absolute inset-0'
          )}
          loading="lazy"
        />
      )}
      
      <img
        src={src}
        alt={alt}
        className={cn(
          'w-full h-full',
          `object-${objectFit}`,
          'transition-opacity duration-500',
          !loaded ? 'opacity-0' : 'opacity-100',
          error ? 'hidden' : 'block',
          className
        )}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        sizes={sizes}
        {...props}
      />
    </div>
  );
};

export default memo(OptimizedImage);
