
import React from 'react';
import { cn } from '@/lib/utils';

interface SEOImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  sizes?: string;
  priority?: boolean;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  aspectRatio?: 'auto' | 'square' | 'video' | 'portrait' | 'banner';
  caption?: string;
}

const SEOImage: React.FC<SEOImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  decoding = 'async',
  sizes,
  priority = false,
  objectFit = 'cover',
  aspectRatio = 'auto',
  caption
}) => {
  // If priority is true, override loading to eager
  const imgLoading = priority ? 'eager' : loading;
  
  // Handle aspect ratios
  const getAspectRatioClass = () => {
    switch (aspectRatio) {
      case 'square': return 'aspect-square';
      case 'video': return 'aspect-video';
      case 'portrait': return 'aspect-[3/4]';
      case 'banner': return 'aspect-[21/9]';
      default: return '';
    }
  };
  
  // Generate srcset for responsive images
  const generateSrcSet = () => {
    if (!src.startsWith('/')) return undefined;
    
    // Extract file name and extension
    const lastSlashIndex = src.lastIndexOf('/');
    const fileName = src.substring(lastSlashIndex + 1);
    const lastDotIndex = fileName.lastIndexOf('.');
    
    if (lastDotIndex === -1) return undefined;
    
    const baseName = fileName.substring(0, lastDotIndex);
    const extension = fileName.substring(lastDotIndex + 1);
    const basePath = src.substring(0, lastSlashIndex + 1);
    
    return `
      ${basePath}${baseName}-320w.${extension} 320w,
      ${basePath}${baseName}-640w.${extension} 640w,
      ${basePath}${baseName}-960w.${extension} 960w,
      ${basePath}${baseName}-1280w.${extension} 1280w,
      ${src} 2x
    `.trim();
  };

  const style = objectFit ? { objectFit } : undefined;
  const aspectRatioClass = getAspectRatioClass();

  return (
    <figure className={cn("relative", caption && "mb-6")}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(aspectRatioClass, className)}
        loading={imgLoading}
        decoding={decoding}
        srcSet={generateSrcSet()}
        sizes={sizes}
        fetchPriority={priority ? 'high' : 'auto'}
        style={style}
      />
      {caption && (
        <figcaption className="text-sm text-gray-500 mt-2 italic text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default SEOImage;
