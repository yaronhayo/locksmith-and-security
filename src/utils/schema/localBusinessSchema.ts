
export const createLocalBusinessSchema = (name: string, city: string, state: string = 'NJ') => ({
  "@type": "LocalBusiness",
  "name": `${name} - ${city}`,
  "image": "/website-uploads/950b5c4c-f0b8-4d22-beb0-66a7d7554476.png",
  "telephone": "+12017482070",
  "email": "info@247locksmithandsecurity.com",
  "url": "https://247locksmithandsecurity.com",
  "priceRange": "$$",
  "description": `Professional 24/7 locksmith services in ${city}, ${state}. Licensed (#13VH13153100) and insured technicians providing residential, commercial, and automotive locksmith solutions.`,
  "areaServed": {
    "@type": "City",
    "name": city,
    "sameAs": `https://en.wikipedia.org/wiki/${city.replace(' ', '_')},_${state}`
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "7116 Bergenline Ave",
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
          "name": "Car Key Replacement",
          "description": "Cutting and programming of car keys and fobs"
        }
      }
    ]
  },
  "sameAs": [
    "https://www.facebook.com/247locksmithandsecurity/",
    "https://www.instagram.com/247locksmithandsecurity/",
    "https://www.yelp.com/biz/locksmith-and-security-north-bergen"
  ]
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
    "image": "/website-uploads/950b5c4c-f0b8-4d22-beb0-66a7d7554476.png",
    "telephone": "+12017482070",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7116 Bergenline Ave",
      "addressLocality": "North Bergen",
      "addressRegion": "NJ",
      "postalCode": "07047",
      "addressCountry": "US"
    }
  },
  "areaServed": {
    "@type": "City",
    "name": areaServed,
    "sameAs": `https://en.wikipedia.org/wiki/${areaServed.replace(' ', '_')},_New_Jersey`
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
