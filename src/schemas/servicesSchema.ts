interface ServiceSchemaProps {
  serviceName: string;
  serviceDescription: string;
  serviceUrl: string;
  imageUrl?: string;
  serviceArea?: string;
  availability?: string;
}

export const createServiceSchema = ({
  serviceName,
  serviceDescription,
  serviceUrl,
  imageUrl = "/lovable-uploads/950b5c4c-f0b8-4d22-beb0-66a7d7554476.png",
  serviceArea = "North Bergen, NJ and surrounding areas",
  availability = "24/7 Emergency Service Available"
}: ServiceSchemaProps) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `https://247locksmithandsecurity.com${serviceUrl}#service`,
  "name": serviceName,
  "description": serviceDescription,
  "provider": {
    "@type": "LocalBusiness",
    "name": "Locksmith & Security LLC",
    "image": imageUrl,
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
    "areaServed": serviceArea,
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
    }
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "40.7795",
      "longitude": "-74.0324"
    },
    "geoRadius": "30000"
  },
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": `https://247locksmithandsecurity.com${serviceUrl}`,
    "servicePhone": "+15513037874",
    "availabilityStarts": "00:00",
    "availabilityEnds": "23:59"
  },
  "serviceOutput": {
    "@type": "Thing",
    "name": serviceName,
    "description": serviceDescription
  }
});