
import React, { useState, useEffect, memo } from "react";
import { cn } from "@/lib/utils";

interface ResponsiveImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  imgClassName?: string;
  containerClassName?: string;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  priority?: boolean;
  lazy?: boolean;
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
  placeholder?: string;
  aspectRatio?: string;
}

const ResponsiveImage = ({
  src,
  alt,
  width,
  height,
  className = "",
  imgClassName = "",
  containerClassName = "",
  objectFit = "cover",
  priority = false,
  lazy = true,
  sizes = "100vw",
  onLoad,
  onError,
  placeholder = "/placeholder.svg",
  aspectRatio,
}: ResponsiveImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [imageSrc, setImageSrc] = useState(priority ? src : placeholder);

  // Use IntersectionObserver to detect when the image is visible
  useEffect(() => {
    if (!priority && !lazy) {
      setImageSrc(src);
      return;
    }

    if (priority) {
      return; // Already set src for priority images
    }

    let observer: IntersectionObserver;
    let mounted = true;

    const imgElement = document.querySelector(`[data-image-id="${src}"]`);
    
    if (imgElement && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && mounted) {
            setImageSrc(src);
            observer.disconnect();
          }
        });
      }, {
        rootMargin: '200px 0px', // Start loading 200px before it comes into view
        threshold: 0.01
      });

      observer.observe(imgElement);
    } else {
      // Fallback for browsers without IntersectionObserver
      setImageSrc(src);
    }

    return () => {
      mounted = false;
      if (observer) {
        observer.disconnect();
      }
    };
  }, [src, priority, lazy]);

  const handleImageLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleImageError = () => {
    setError(true);
    setImageSrc(placeholder);
    onError?.();
    console.error(`Failed to load image: ${src}`);
  };

  // Determine loading attribute based on priority
  const loading = priority ? "eager" : lazy ? "lazy" : "eager";
  
  // Style for aspect ratio and object-fit
  const containerStyle: React.CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    ...(aspectRatio ? { aspectRatio } : {}),
  };

  const imageStyle: React.CSSProperties = {
    objectFit,
  };

  return (
    <div 
      className={cn("responsive-image-container", containerClassName)}
      style={containerStyle}
    >
      <img
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        data-image-id={src}
        loading={loading}
        onLoad={handleImageLoad}
        onError={handleImageError}
        className={cn(
          "w-full h-full transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0",
          error ? "opacity-70" : "",
          imgClassName,
          className
        )}
        style={imageStyle}
        sizes={sizes}
      />
    </div>
  );
};

export default memo(ResponsiveImage);
