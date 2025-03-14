
export const createLocalBusinessSchema = (name: string, city: string, state: string = 'NJ') => ({
  "@type": "LocalBusiness",
  "name": `${name} - ${city}`,
  "image": "/website-uploads/950b5c4c-f0b8-4d22-beb0-66a7d7554476.png",
  "telephone": "+12017482070",
  "email": "info@247locksmithandsecurity.com",
  "areaServed": {
    "@type": "City",
    "name": city,
    "sameAs": `https://en.wikipedia.org/wiki/${city},_${state}`
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": city,
    "addressRegion": state,
    "postalCode": "07047",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "40.7795",
    "longitude": "-74.0324"
  },
  "url": "https://247locksmithandsecurity.com",
  "priceRange": "$$",
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
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "150",
    "bestRating": "5",
    "worstRating": "1"
  }
});

export const createServiceSchema = (
  name: string,
  description: string,
  areaServed: string
) => ({
  "@type": "Service",
  name,
  description,
  "provider": {
    "@type": "LocalBusiness",
    "name": "Locksmith & Security LLC",
    "image": "/website-uploads/950b5c4c-f0b8-4d22-beb0-66a7d7554476.png"
  },
  "areaServed": {
    "@type": "City",
    "name": areaServed,
    "sameAs": `https://en.wikipedia.org/wiki/${areaServed},_New_Jersey`
  },
  "category": "Locksmith",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Locksmith Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": name,
          "description": description
        }
      }
    ]
  }
});
