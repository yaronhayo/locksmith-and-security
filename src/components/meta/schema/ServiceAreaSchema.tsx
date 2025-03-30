
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
  datePublished?: string;
  dateModified?: string;
  imageUrl?: string;
  priceRange?: string;
  areaServedRegion?: string;
  telephone?: string;
}

export const createServiceAreaSchema = ({ 
  areaName, 
  areaDescription, 
  baseUrl, 
  settings,
  canonicalUrl,
  services = [],
  geoCoordinates,
  datePublished = new Date().toISOString(),
  dateModified = new Date().toISOString(),
  imageUrl = "/lovable-uploads/1bbeb1e6-5581-4e09-9600-7d1859bb17c5.png",
  priceRange = "$$",
  areaServedRegion = "NJ",
  telephone
}: ServiceAreaSchemaProps) => ({
  type: 'LocalBusiness',
  data: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}${canonicalUrl}`,
    "name": `${settings.company_name} - ${areaName}`,
    "description": areaDescription,
    "url": `${baseUrl}${canonicalUrl}`,
    "telephone": telephone || settings.company_phone,
    "priceRange": priceRange,
    "image": imageUrl && !imageUrl.startsWith('http') ? `${baseUrl}${imageUrl}` : imageUrl,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": areaName,
      "addressRegion": areaServedRegion,
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": areaName,
      "sameAs": `https://en.wikipedia.org/wiki/${areaName.replace(/ /g, '_')},_${areaServedRegion}`
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
