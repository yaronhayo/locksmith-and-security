
import { SiteSettings } from "@/hooks/useSettings";

interface ServiceAreaSchemaProps {
  areaName: string;
  areaDescription: string;
  baseUrl: string;
  settings?: SiteSettings;
  canonicalUrl: string;
  services: string[];
  geoCoordinates?: {
    latitude: number;
    longitude: number;
  };
  dateModified?: string;
  datePublished?: string;
  areaServedRegion?: string;
}

export const createServiceAreaSchema = ({
  areaName,
  areaDescription,
  baseUrl,
  settings,
  canonicalUrl,
  services = [],
  geoCoordinates,
  dateModified = new Date().toISOString(),
  datePublished = new Date(new Date().setFullYear(new Date().getFullYear() - 1)).toISOString(),
  areaServedRegion = "NJ"
}: ServiceAreaSchemaProps) => {
  // Ensure canonical URL is absolute
  const fullCanonicalUrl = canonicalUrl.startsWith('http') 
    ? canonicalUrl 
    : `${baseUrl}${canonicalUrl.startsWith('/') ? canonicalUrl : `/${canonicalUrl}`}`;
    
  // Create service area schema
  const serviceAreaSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `${settings?.company_name || "Locksmith & Security LLC"} - ${areaName}`,
    "description": areaDescription,
    "url": fullCanonicalUrl,
    "image": "/lovable-uploads/1bbeb1e6-5581-4e09-9600-7d1859bb17c5.png",
    "telephone": settings?.company_phone || "(201) 748-2070",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": areaName,
      "addressRegion": areaServedRegion,
      "addressCountry": "US"
    },
    ...(geoCoordinates && {
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": geoCoordinates.latitude,
        "longitude": geoCoordinates.longitude
      }
    }),
    "areaServed": {
      "@type": "City",
      "name": areaName,
      "sameAs": `https://en.wikipedia.org/wiki/${areaName.replace(/ /g, '_')},_${areaServedRegion}`
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Locksmith Services in ${areaName}`,
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service
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
    },
    "sameAs": [
      "https://www.facebook.com/247locksmithandsecurity/",
      "https://www.yelp.com/biz/locksmith-and-security-north-bergen",
      "https://www.google.com/maps?cid=12345678901234567890" // Replace with actual Google Business Profile
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullCanonicalUrl,
      "lastReviewed": dateModified,
      "datePublished": datePublished,
      "dateModified": dateModified
    }
  };
  
  return {
    type: 'LocalBusiness',
    data: serviceAreaSchema
  };
};
