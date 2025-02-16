
import { createLocalBusinessSchema } from "@/utils/schema/localBusinessSchema";

const baseSchema = createLocalBusinessSchema(
  "Locksmith & Security LLC",
  "North Bergen"
);

export const homePageSchema = {
  "@context": "https://schema.org",
  "@type": ["WebPage", "LocalBusiness"],
  "name": "24/7 Emergency Locksmith Services in North Bergen, NJ | Licensed & Insured",
  "description": "Professional locksmith services in North Bergen. Available 24/7 for residential, commercial, and automotive locksmith needs.",
  "mainEntity": {
    ...baseSchema,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Locksmith Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Lockout Service",
            "description": "24/7 emergency lockout services for homes, businesses, and vehicles"
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "USD",
            "price": "49.00"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lock Installation",
            "description": "Professional installation of high-security locks"
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "USD",
            "price": "99.00"
          }
        }
      ]
    }
  }
};
