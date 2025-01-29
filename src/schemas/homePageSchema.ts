export const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "24/7 Locksmith Services in North Bergen",
  "description": "Professional locksmith services in North Bergen. Available 24/7 for residential, commercial, and automotive locksmith needs. Fast response and reliable service.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Locksmith & Security LLC",
    "image": "/lovable-uploads/950b5c4c-f0b8-4d22-beb0-66a7d7554476.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main Street",
      "addressLocality": "North Bergen",
      "addressRegion": "NJ",
      "postalCode": "07047",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.7795",
      "longitude": "-74.0324"
    },
    "url": "https://247locksmithandsecurity.com",
    "telephone": "+15513037874",
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
    "sameAs": [
      "https://www.facebook.com/247locksmithandsecurity",
      "https://www.yelp.com/biz/247-locksmith-and-security-north-bergen",
      "https://www.google.com/maps?cid=your-google-business-id"
    ],
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
        "name": "Michael R."
      },
      "reviewBody": "Excellent emergency locksmith service. Fast response and professional work."
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    }
  },
  "mainEntity": {
    "@type": "WebPage",
    "name": "24/7 Emergency Locksmith Services",
    "description": "Professional locksmith services available 24/7 in North Bergen and surrounding areas. Expert technicians for all your security needs."
  }
};