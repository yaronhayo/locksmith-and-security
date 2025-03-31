
import { getPhoneNumber } from './phoneUtils';

interface SocialImage {
  url: string;
  width: number;
  height: number;
  alt: string;
}

/**
 * Generate optimal image dimensions and formats for social sharing
 * @param imageUrl Base image URL to optimize
 * @param title Title to use in image alt text
 * @returns Object with optimized image properties for different platforms
 */
export const optimizeSocialImages = (imageUrl: string, title: string): {
  openGraph: SocialImage;
  twitter: SocialImage;
  pinterest: SocialImage;
  linkedin: SocialImage;
} => {
  // Ensure we have a valid image URL
  const baseImage = imageUrl || "/lovable-uploads/1bbeb1e6-5581-4e09-9600-7d1859bb17c5.png";
  
  // Alt text optimization
  const optimizedAlt = title ? 
    `${title} | Locksmith & Security LLC` : 
    "Professional locksmith services in New Jersey";
  
  return {
    // Facebook/OpenGraph recommends 1200x630
    openGraph: {
      url: baseImage,
      width: 1200,
      height: 630,
      alt: optimizedAlt
    },
    
    // Twitter recommends 1200x675
    twitter: {
      url: baseImage,
      width: 1200,
      height: 675,
      alt: optimizedAlt
    },
    
    // Pinterest prefers taller images (1000x1500)
    pinterest: {
      url: baseImage,
      width: 1000,
      height: 1500,
      alt: optimizedAlt
    },
    
    // LinkedIn prefers 1104x736
    linkedin: {
      url: baseImage,
      width: 1104,
      height: 736,
      alt: optimizedAlt
    }
  };
};

/**
 * Generates an HTML meta tag string for a specific social image
 * @param platform The social media platform
 * @param image The image object with properties
 * @returns HTML string with appropriate meta tags
 */
export const generateSocialImageTags = (
  platform: 'openGraph' | 'twitter' | 'pinterest' | 'linkedin',
  image: SocialImage
): string => {
  switch(platform) {
    case 'openGraph':
      return `
        <meta property="og:image" content="${image.url}" />
        <meta property="og:image:width" content="${image.width}" />
        <meta property="og:image:height" content="${image.height}" />
        <meta property="og:image:alt" content="${image.alt}" />
      `;
      
    case 'twitter':
      return `
        <meta name="twitter:image" content="${image.url}" />
        <meta name="twitter:image:alt" content="${image.alt}" />
      `;
      
    default:
      return '';
  }
};

/**
 * Creates a dynamic social sharing URL with UTM parameters
 * @param url Base URL to share
 * @param platform Social platform for the share
 * @param campaign Optional campaign name
 * @returns Formatted sharing URL with tracking
 */
export const createSocialShareUrl = (
  url: string,
  platform: 'facebook' | 'twitter' | 'linkedin' | 'pinterest',
  campaign = 'social_share'
): string => {
  const baseUrl = url.includes('?') ? `${url}&` : `${url}?`;
  const phoneNumber = getPhoneNumber().replace(/\D/g, '');
  
  return `${baseUrl}utm_source=${platform}&utm_medium=social&utm_campaign=${campaign}&utm_content=${phoneNumber}`;
};
