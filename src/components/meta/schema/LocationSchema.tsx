
import { LocationSchemaProps } from "@/types/schema";

export const createLocationSchema = ({
  name,
  description,
  latitude,
  longitude,
  areaServed,
  companyName,
  address,
  phone
}: LocationSchemaProps) => {
  
  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `${companyName} - ${name}`,
    "description": description,
    "image": "/lovable-uploads/1bbeb1e6-5581-4e09-9600-7d1859bb17c5.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": name,
      "addressRegion": "NJ",
      "streetAddress": address,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": latitude,
      "longitude": longitude
    },
    "telephone": phone,
    "areaServed": {
      "@type": "City",
      "name": areaServed
    }
  };
  
  return {
    type: 'LocalBusiness',
    data: locationSchema
  };
};
