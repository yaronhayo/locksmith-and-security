
import type { Review } from '@/types/reviews';

export const createReviewsSchema = (reviews: Review[], location?: string) => {
  const aggregateRating = {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": reviews.length.toString(),
    "bestRating": "5",
    "worstRating": "1"
  };

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
      "name": "Locksmith & Security LLC",
      "image": "/og-image.png",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": location || "North Bergen",
        "addressRegion": "NJ",
        "addressCountry": "US"
      }
    }
  }));

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Locksmith & Security LLC${location ? ` - ${location}` : ''}`,
    "aggregateRating": aggregateRating,
    "review": reviewsSchema
  };
};
