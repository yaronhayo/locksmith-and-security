
import type { SiteSettings } from "@/hooks/useSettings";

interface BusinessSchemaProps {
  baseUrl: string;
  description: string;
  settings: SiteSettings;
}

export const createBusinessSchema = ({ baseUrl, description, settings }: BusinessSchemaProps) => ({
  type: 'LocalBusiness',
  data: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": baseUrl,
    "name": settings.company_name,
    "image": `${baseUrl}/website-uploads/950b5c4c-f0b8-4d22-beb0-66a7d7554476.png`,
    "logo": `${baseUrl}/logo.png`,
    "description": description,
    "url": baseUrl,
    "telephone": settings.company_phone,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": settings.company_address,
      "addressLocality": settings.company_city,
      "addressRegion": settings.company_state,
      "postalCode": settings.company_zip,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": settings.company_lat,
      "longitude": settings.company_lng
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "North Bergen",
        "sameAs": "https://en.wikipedia.org/wiki/North_Bergen,_New_Jersey"
      },
      {
        "@type": "City",
        "name": "Union City",
        "sameAs": "https://en.wikipedia.org/wiki/Union_City,_New_Jersey"
      },
      {
        "@type": "City",
        "name": "West New York",
        "sameAs": "https://en.wikipedia.org/wiki/West_New_York,_New_Jersey"
      }
    ],
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
      "https://www.yelp.com/biz/247-locksmith-and-security-north-bergen"
    ]
  }
});
