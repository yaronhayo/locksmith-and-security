
import React from 'react';
import SEOImage from './SEOImage';

interface SocialShareImageProps {
  src: string;
  alt: string;
  title: string;
  url: string;
  width?: number;
  height?: number;
  className?: string;
}

/**
 * Optimized image component for social media sharing
 */
const SocialShareImage: React.FC<SocialShareImageProps> = ({
  src,
  alt,
  title,
  url,
  width = 1200,
  height = 630,
  className
}) => {
  // Ensure proper image dimensions for social sharing
  const socialWidth = width >= 1200 ? width : 1200;
  const socialHeight = height >= 630 ? height : 630;
  
  // Social media platforms recommend 1200x630 for optimal display
  return (
    <div className={className}>
      <SEOImage
        src={src}
        alt={alt}
        width={socialWidth}
        height={socialHeight}
        loading="eager"
        priority={true}
        className="w-full h-auto"
        objectFit="cover"
      />
      
      {/* Hidden metadata for social platforms */}
      <meta property="og:image:width" content={socialWidth.toString()} />
      <meta property="og:image:height" content={socialHeight.toString()} />
      <meta property="og:image:alt" content={alt} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta name="twitter:image:alt" content={alt} />
    </div>
  );
};

export default SocialShareImage;
