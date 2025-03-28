
import React from 'react';

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
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      fetchpriority={priority ? "high" : "auto"} {/* Changed from fetchPriority to lowercase fetchpriority */}
      decoding="async"
      onError={(e) => {
        const img = e.target as HTMLImageElement;
        img.src = '/placeholder.svg';
      }}
      {...props}
    />
  );
};

export default ImageOptimized;
