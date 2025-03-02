
import type { Review } from '@/types/reviews';

export interface TestimonialSchemaProps {
  reviews: Review[];
  businessName?: string;
  businessImage?: string;
  location?: string;
  aggregateRating?: {
    ratingValue: string;
    reviewCount: string;
  };
}

export const createTestimonialSchema = ({
  reviews,
  businessName = "Locksmith & Security LLC",
  businessImage = "/lovable-uploads/950b5c4c-f0b8-4d22-beb0-66a7d7554476.png",
  location,
  aggregateRating = {
    ratingValue: "4.9",
    reviewCount: "150"
  }
}: TestimonialSchemaProps) => {
  // Create schema for aggregate rating
  const ratingSchema = {
    "@type": "AggregateRating",
    "ratingValue": aggregateRating.ratingValue,
    "reviewCount": aggregateRating.reviewCount,
    "bestRating": "5",
    "worstRating": "1"
  };

  // Create schema for individual reviews
  const reviewsSchema = reviews.map(review => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": review.name
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating,
      "bestRating": "5",
      "worstRating": "1"
    },
    "reviewBody": review.text,
    "datePublished": review.date,
    "itemReviewed": {
      "@type": "LocalBusiness",
      "name": businessName,
      "image": businessImage,
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": location || review.location || "North Bergen",
        "addressRegion": "NJ",
        "addressCountry": "US"
      }
    }
  }));

  // Return the complete schema
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `${businessName}${location ? ` - ${location}` : ''}`,
    "aggregateRating": ratingSchema,
    "review": reviewsSchema
  };
};
