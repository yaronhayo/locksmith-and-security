
interface RatingSchemaProps {
  ratingValue: number;
  reviewCount: number;
  name: string;
}

export const createRatingSchema = ({ ratingValue, reviewCount, name }: RatingSchemaProps) => ({
  type: 'AggregateRating',
  data: {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "itemReviewed": {
      "@type": "LocalBusiness",
      "name": name
    },
    "ratingValue": ratingValue.toString(),
    "reviewCount": reviewCount,
    "bestRating": "5",
    "worstRating": "1"
  }
});
