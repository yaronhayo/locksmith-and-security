
import { memo, useState, useEffect } from 'react';
import { trackImageLoad } from '@/utils/performanceMonitoring';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

interface ResponsiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string; // Required alt text for accessibility
  srcSet?: string;
  sizes?: string;
  fallbackSrc?: string;
  aspectRatio?: string;
  lazyLoad?: boolean;
  className?: string;
  containerClassName?: string;
  loadingSkeletonClassName?: string;
}

const getImageSrcSet = (src: string): string => {
  if (!src) return '';
  
  // Skip if already a data URL or SVG
  if (src.startsWith('data:') || src.endsWith('.svg')) return src;
  
  // For external images where we can't generate different sizes
  if (src.startsWith('http') && !src.includes('lovable-uploads')) {
    return src;
  }
  
  // For lovable uploads or local images, create srcset
  // Extract base path and extension
  const lastDotIndex = src.lastIndexOf('.');
  if (lastDotIndex === -1) return src;
  
  const basePath = src.substring(0, lastDotIndex);
  const extension = src.substring(lastDotIndex);
  
  // Create srcset with multiple sizes
  return `
    ${src} 1x,
    ${basePath}@2x${extension} 2x
  `.trim();
};

const ResponsiveImage = ({
  src,
  alt, // Ensure this is descriptive and meaningful
  srcSet,
  sizes = '(max-width: 768px) 100vw, 50vw',
  fallbackSrc = '/placeholder.svg',
  aspectRatio = 'aspect-auto',
  lazyLoad = true,
  className,
  containerClassName,
  loadingSkeletonClassName,
  onLoad: externalOnLoadHandler,
  onError: externalOnErrorHandler,
  ...props
}: ResponsiveImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imgSrc, setImgSrc] = useState<string>(lazyLoad ? fallbackSrc : src);
  const [imgSrcSet, setImgSrcSet] = useState<string | undefined>(lazyLoad ? undefined : srcSet || getImageSrcSet(src));
  
  useEffect(() => {
    if (lazyLoad) {
      const img = new Image();
      img.src = src;
      
      if (srcSet || getImageSrcSet(src) !== src) {
        img.srcset = srcSet || getImageSrcSet(src);
      }
      
      const { onLoad, onError } = trackImageLoad(src, img);
      
      img.onload = () => {
        setImgSrc(src);
        setImgSrcSet(srcSet || getImageSrcSet(src));
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
  }, [src, srcSet, fallbackSrc, lazyLoad, externalOnLoadHandler, externalOnErrorHandler]);

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

  // Extract filename from path for a fallback alt text if needed
  const getFilenameFromPath = (path: string): string => {
    if (!path) return 'Image';
    const filename = path.split('/').pop() || 'Image';
    // Convert filename to readable format
    return filename
      .replace(/[-_]/g, ' ')  // Replace dashes and underscores with spaces
      .replace(/\.[^/.]+$/, '') // Remove file extension
      .replace(/([A-Z])/g, ' $1') // Add space before capital letters
      .replace(/^\w/, c => c.toUpperCase()); // Capitalize first letter
  };

  // Ensure alt text is never empty - use a descriptive fallback if needed
  const safeAlt = alt || getFilenameFromPath(src);

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
        alt={safeAlt}
        loading={lazyLoad ? "lazy" : "eager"}
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
