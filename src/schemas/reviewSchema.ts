export const createReviewSchema = () => ({
  "review": {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Michael R."
    },
    "reviewBody": "Called them at 2 AM when I was locked out of my car in North Bergen. The technician arrived quickly and had me back in my car in no time. Extremely professional service."
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "50",
    "bestRating": "5",
    "worstRating": "1"
  }
});