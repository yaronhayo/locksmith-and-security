
interface LocationSchemaProps {
  name: string;
  description: string;
  latitude: number;
  longitude: number;
  areaServed: string;
  companyName?: string;
  address?: string;
  phone?: string;
  imageUrl?: string;
  priceRange?: string;
  openingHours?: string;
}

export const createLocationSchema = ({
  name,
  description,
  latitude,
  longitude,
  areaServed,
  companyName = "Locksmith & Security LLC",
  address = "5800 Kennedy Blvd, North Bergen, NJ 07047",
  phone = "(201) 748-2070",
  imageUrl = "/lovable-uploads/1bbeb1e6-5581-4e09-9600-7d1859bb17c5.png",
  priceRange = "$$",
  openingHours = "Mo-Su 00:00-23:59"
}: LocationSchemaProps) => {
  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `${companyName} - ${name} Locksmith Services`,
    "image": imageUrl,
    "telephone": phone,
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": name,
      "addressRegion": "NJ",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": latitude,
      "longitude": longitude
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
    "priceRange": priceRange,
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
