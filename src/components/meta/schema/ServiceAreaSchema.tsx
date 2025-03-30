
import type { SiteSettings } from "@/hooks/useSettings";

interface ServiceAreaSchemaProps {
  areaName: string;
  areaDescription: string;
  baseUrl: string;
  settings: SiteSettings;
  canonicalUrl: string;
  services?: string[];
  geoCoordinates?: {
    latitude: number;
    longitude: number;
  };
}

export const createServiceAreaSchema = ({ 
  areaName, 
  areaDescription, 
  baseUrl, 
  settings,
  canonicalUrl,
  services = [],
  geoCoordinates
}: ServiceAreaSchemaProps) => ({
  type: 'ServiceArea',
  data: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}${canonicalUrl}`,
    "name": `${settings.company_name} - ${areaName}`,
    "description": areaDescription,
    "url": `${baseUrl}${canonicalUrl}`,
    "telephone": settings.company_phone,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": areaName,
      "addressRegion": "NJ",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": areaName,
      "sameAs": `https://en.wikipedia.org/wiki/${areaName.replace(/ /g, '_')},_New_Jersey`
    },
    ...(geoCoordinates && {
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": geoCoordinates.latitude,
        "longitude": geoCoordinates.longitude
      }
    }),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Locksmith Services in " + areaName,
      "itemListElement": services.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service,
          "areaServed": {
            "@type": "City",
            "name": areaName
          }
        }
      }))
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  }
});
