
import { memo, useState, useEffect } from 'react';
import { trackImageLoad } from '@/utils/performanceMonitoring';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

interface ResponsiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  srcSet?: string;
  sizes?: string;
  fallbackSrc?: string;
  aspectRatio?: string;
  lazyLoad?: boolean;
  priority?: boolean;
  className?: string;
  containerClassName?: string;
  loadingSkeletonClassName?: string;
}

// Generate a srcset for responsive images
const generateSrcSet = (src: string): string => {
  if (!src || src.startsWith('data:') || src.endsWith('.svg')) return src;
  
  // For external images where we can't generate different sizes
  if (src.startsWith('http') && !src.includes('lovable-uploads')) {
    return src;
  }
  
  // Extract base path and extension
  const lastDotIndex = src.lastIndexOf('.');
  if (lastDotIndex === -1) return src;
  
  const basePath = src.substring(0, lastDotIndex);
  const extension = src.substring(lastDotIndex);
  
  // Create responsive sizes
  return `
    ${src} 1x,
    ${basePath}@2x${extension} 2x
  `.trim();
};

const ResponsiveImage = ({
  src,
  alt,
  srcSet,
  sizes = '(max-width: 768px) 100vw, 50vw',
  fallbackSrc = '/placeholder.svg',
  aspectRatio = 'aspect-auto',
  lazyLoad = true,
  priority = false,
  className,
  containerClassName,
  loadingSkeletonClassName,
  onLoad: externalOnLoadHandler,
  onError: externalOnErrorHandler,
  ...props
}: ResponsiveImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imgSrc, setImgSrc] = useState<string>(lazyLoad && !priority ? fallbackSrc : src);
  const [imgSrcSet, setImgSrcSet] = useState<string | undefined>(
    lazyLoad && !priority ? undefined : srcSet || generateSrcSet(src)
  );
  
  useEffect(() => {
    if (lazyLoad && !priority) {
      const img = new Image();
      img.src = src;
      
      if (srcSet || generateSrcSet(src) !== src) {
        img.srcset = srcSet || generateSrcSet(src);
      }
      
      const { onLoad, onError } = trackImageLoad(src, img);
      
      img.onload = () => {
        setImgSrc(src);
        setImgSrcSet(srcSet || generateSrcSet(src));
        setIsLoading(false);
        onLoad();
        if (externalOnLoadHandler) externalOnLoadHandler({} as React.SyntheticEvent<HTMLImageElement>);
      };
      
      img.onerror = (error) => {
        setImgSrc(fallbackSrc);
        setImgSrcSet(undefined);
        setIsLoading(false);
        onError(error);
        if (externalOnErrorHandler) externalOnErrorHandler({} as React.SyntheticEvent<HTMLImageElement>);
      };
      
      return () => {
        img.onload = null;
        img.onerror = null;
      };
    } else {
      setIsLoading(false);
    }
  }, [src, srcSet, fallbackSrc, lazyLoad, priority, externalOnLoadHandler, externalOnErrorHandler]);

  const handleImageLoad = () => {
    setIsLoading(false);
    if (externalOnLoadHandler) externalOnLoadHandler({} as React.SyntheticEvent<HTMLImageElement>);
  };

  const handleImageError = () => {
    setImgSrc(fallbackSrc);
    setImgSrcSet(undefined);
    setIsLoading(false);
    if (externalOnErrorHandler) externalOnErrorHandler({} as React.SyntheticEvent<HTMLImageElement>);
  };

  return (
    <div className={cn(`relative overflow-hidden ${aspectRatio}`, containerClassName)}>
      {isLoading && (
        <Skeleton 
          className={cn(
            "absolute inset-0 bg-gray-200 animate-pulse", 
            loadingSkeletonClassName
          )} 
        />
      )}
      <img
        src={imgSrc}
        srcSet={imgSrcSet}
        sizes={sizes}
        alt={alt || 'Image'}
        loading={priority ? "eager" : (lazyLoad ? "lazy" : "eager")}
        fetchPriority={priority ? "high" : "auto"}
        onLoad={handleImageLoad}
        onError={handleImageError}
        className={cn(
          "w-full h-full object-cover transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        {...props}
      />
    </div>
  );
};

export default memo(ResponsiveImage);
