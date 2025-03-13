
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

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setLoaded(true);
    onLoadingComplete?.();
    props.onLoad?.(e);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setError(true);
    props.onError?.(e);
  };

  // Track loading using performance utility
  const loadTracker = trackImageLoad(src);

  return (
    <div 
      className={cn(
        'relative overflow-hidden bg-gray-100',
        aspectRatioClass,
        containerClassName
      )}
      style={typeof aspectRatio === 'number' ? { aspectRatio: String(aspectRatio) } : {}}
    >
      <img
        src={error ? placeholder : src}
        alt={alt}
        width={props.width}
        height={props.height}
        onLoad={(e) => {
          handleLoad(e);
          loadTracker.onLoad();
        }}
        onError={(e) => {
          handleError(e);
          loadTracker.onError(new Error('Image failed to load'));
        }}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding={priority ? 'sync' : 'async'}
        sizes={sizes}
        className={cn(
          'transition-opacity duration-300',
          loaded ? 'opacity-100' : 'opacity-0',
          objectFit === 'cover' && 'object-cover',
          objectFit === 'contain' && 'object-contain',
          objectFit === 'fill' && 'object-fill',
          objectFit === 'none' && 'object-none',
          objectFit === 'scale-down' && 'object-scale-down',
          'w-full h-full',
          className
        )}
        {...props}
      />
      {!loaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse">
          <div className="w-10 h-10 rounded-full border-2 border-gray-300 border-t-primary animate-spin" />
        </div>
      )}
    </div>
  );
};

export default memo(OptimizedImage);
