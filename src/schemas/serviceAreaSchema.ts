export const createServiceAreaSchema = (city: string) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": `Locksmith & Security LLC - ${city}`,
  "description": `Professional locksmith services in ${city}, NJ. Available 24/7 for residential, commercial, and automotive locksmith needs.`,
  "image": "/og-image.png",
  "telephone": "+15513037874",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": city,
    "addressRegion": "NJ",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "40.7795", // This should be updated per city
    "longitude": "-74.0324" // This should be updated per city
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
      }
    ]
  }
});