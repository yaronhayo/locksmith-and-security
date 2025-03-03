
import { FAQItem } from "@/components/sections/FAQAccordion";
import type { Review } from "@/types/reviews";

/**
 * Creates a standard FAQPage schema from FAQ items
 */
export const createFAQSchema = (faqs: FAQItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

/**
 * Creates a standard Organization schema
 */
export const createOrganizationSchema = (config: {
  name: string;
  description: string;
  url: string;
  logo: string;
  telephone?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  sameAs?: string[];
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": config.name,
    "description": config.description,
    "url": config.url,
    "logo": config.logo,
    ...(config.telephone && { "telephone": config.telephone }),
    ...(config.address && {
      "address": {
        "@type": "PostalAddress",
        "streetAddress": config.address.street,
        "addressLocality": config.address.city,
        "addressRegion": config.address.state,
        "postalCode": config.address.zip,
        "addressCountry": config.address.country
      }
    }),
    ...(config.sameAs && { "sameAs": config.sameAs })
  };
};

/**
 * Creates a standard LocalBusiness schema
 */
export const createLocalBusinessSchema = (config: {
  name: string;
  description: string;
  url: string;
  logo: string;
  telephone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  priceRange: string;
  openingHours?: string[];
  geo?: {
    latitude: number;
    longitude: number;
  };
  services?: string[];
  sameAs?: string[];
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": config.name,
    "description": config.description,
    "url": config.url,
    "logo": config.logo,
    "telephone": config.telephone,
    "priceRange": config.priceRange,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": config.address.street,
      "addressLocality": config.address.city,
      "addressRegion": config.address.state,
      "postalCode": config.address.zip,
      "addressCountry": config.address.country
    },
    ...(config.geo && {
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": config.geo.latitude,
        "longitude": config.geo.longitude
      }
    }),
    ...(config.openingHours && {
      "openingHoursSpecification": config.openingHours.map(hours => {
        const [days, time] = hours.split(" ");
        const [opens, closes] = time.split("-");
        return {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": days.split(","),
          "opens": opens,
          "closes": closes
        };
      })
    }),
    ...(config.services && { "makesOffer": config.services.map(service => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": service
      }
    })) }),
    ...(config.sameAs && { "sameAs": config.sameAs })
  };
};

/**
 * Creates a standard Review schema
 */
export const createReviewSchema = (review: Review) => ({
  "@type": "Review",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": review.rating,
    "bestRating": "5",
    "worstRating": "1"
  },
  "author": {
    "@type": "Person",
    "name": review.name
  },
  "reviewBody": review.text,
  ...(review.date && { "datePublished": review.date })
});

/**
 * Creates a standard AggregateRating schema
 */
export const createAggregateRatingSchema = (config: {
  ratingValue: string | number;
  reviewCount: string | number;
  bestRating?: string | number;
  worstRating?: string | number;
}) => ({
  "@type": "AggregateRating",
  "ratingValue": config.ratingValue.toString(),
  "reviewCount": config.reviewCount.toString(),
  "bestRating": (config.bestRating || "5").toString(),
  "worstRating": (config.worstRating || "1").toString()
});

/**
 * Creates optimized Reviews schema for a review page
 */
export const createReviewsSchema = (reviews: Review[], businessInfo: {
  name: string;
  image: string;
  priceRange: string;
  address: {
    city: string;
    region: string;
    country: string;
  }
}) => {
  // Calculate aggregate rating
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating = (totalRating / reviews.length).toFixed(1);
  
  const aggregateRating = createAggregateRatingSchema({
    ratingValue: averageRating,
    reviewCount: reviews.length
  });

  const reviewsSchema = reviews.map(review => createReviewSchema(review));

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessInfo.name,
    "image": businessInfo.image,
    "priceRange": businessInfo.priceRange,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": businessInfo.address.city,
      "addressRegion": businessInfo.address.region,
      "addressCountry": businessInfo.address.country
    },
    "aggregateRating": aggregateRating,
    "review": reviewsSchema
  };
};

/**
 * Creates a breadcrumb schema
 */
export const createBreadcrumbSchema = (breadcrumbs: {name: string, url: string}[], baseUrl: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `${baseUrl}${crumb.url}`
    }))
  };
};

/**
 * Creates a Service schema
 */
export const createServiceSchema = (config: {
  name: string;
  description: string;
  provider: {
    name: string;
    url?: string;
  };
  areaServed?: string | string[] | { name: string, type: string }[];
  serviceType?: string;
  offers?: {
    price: string;
    priceCurrency: string;
  };
  serviceOutput?: string;
}) => {
  let areaServedData;
  
  if (typeof config.areaServed === 'string') {
    areaServedData = config.areaServed;
  } else if (Array.isArray(config.areaServed)) {
    if (typeof config.areaServed[0] === 'string') {
      areaServedData = config.areaServed;
    } else {
      areaServedData = (config.areaServed as { name: string, type: string }[]).map(area => ({
        "@type": area.type,
        "name": area.name
      }));
    }
  }
  
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": config.name,
    "description": config.description,
    "provider": {
      "@type": "Organization",
      "name": config.provider.name,
      ...(config.provider.url && { "url": config.provider.url })
    },
    ...(config.areaServed && { "areaServed": areaServedData }),
    ...(config.serviceType && { "serviceType": config.serviceType }),
    ...(config.offers && {
      "offers": {
        "@type": "Offer",
        "price": config.offers.price,
        "priceCurrency": config.offers.priceCurrency
      }
    }),
    ...(config.serviceOutput && { "serviceOutput": config.serviceOutput })
  };
};
