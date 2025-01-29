export const createServiceAreaSchema = (city: string, latitude: string, longitude: string) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": `Locksmith & Security LLC - ${city}`,
  "description": `Professional locksmith services in ${city}, NJ. Available 24/7 for residential, commercial, and automotive locksmith needs.`,
  "image": "/lovable-uploads/950b5c4c-f0b8-4d22-beb0-66a7d7554476.png",
  "logo": "/lovable-uploads/950b5c4c-f0b8-4d22-beb0-66a7d7554476.png",
  "telephone": "+15513037874",
  "url": "https://247locksmithandsecurity.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": city,
    "addressRegion": "NJ",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": latitude,
    "longitude": longitude
  },
  "areaServed": {
    "@type": "City",
    "name": city,
    "sameAs": `https://en.wikipedia.org/wiki/${city},_New_Jersey`
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
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
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Lock Installation",
          "description": "Professional installation of high-security locks"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Car Key Services",
          "description": "Professional car key cutting and programming services"
        }
      }
    ]
  },
  "review": {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Local Customer"
    },
    "reviewBody": `Excellent locksmith service in ${city}. Fast response and professional work.`
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "25",
    "bestRating": "5",
    "worstRating": "1"
  }
});