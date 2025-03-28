
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
  // Create a props object with the correct camelCase for TypeScript
  const imgProps = {
    src,
    alt,
    className,
    width,
    height,
    loading: priority ? "eager" : "lazy",
    fetchPriority: priority ? "high" : "auto" as "high" | "auto" | "low",
    decoding: "async" as const,
    onError: (e: React.SyntheticEvent<HTMLImageElement>) => {
      const img = e.target as HTMLImageElement;
      img.src = '/placeholder.svg';
    },
    ...props
  };

  // Convert the props to a format the DOM expects (lowercase attributes)
  const domProps: React.ImgHTMLAttributes<HTMLImageElement> = {
    ...imgProps
  };
  
  // Add the lowercase fetchpriority attribute for DOM rendering
  (domProps as any).fetchpriority = imgProps.fetchPriority;
  
  // Remove the camelCase property to avoid duplicate attributes
  delete (domProps as any).fetchPriority;

  return <img {...domProps} />;
};

export default ImageOptimized;
