
interface LocationSchemaProps {
  name: string;
  description: string;
  latitude: number;
  longitude: number;
  areaServed: string;
  companyName: string;
  address: string;
  phone: string;
}

export const createLocationSchema = ({ 
  name, 
  description, 
  latitude, 
  longitude, 
  areaServed,
  companyName,
  address,
  phone
}: LocationSchemaProps) => ({
  type: 'Place',
  data: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `${companyName} - ${name}`,
    "description": description,
    "image": "/lovable-uploads/1bbeb1e6-5581-4e09-9600-7d1859bb17c5.png",
    "telephone": phone,
    "@id": `https://247locksmithandsecurity.com/service-areas/${name.toLowerCase().replace(/ /g, '-')}`,
    "url": `https://247locksmithandsecurity.com/service-areas/${name.toLowerCase().replace(/ /g, '-')}`,
    "areaServed": {
      "@type": "City",
      "name": areaServed,
      "sameAs": `https://en.wikipedia.org/wiki/${areaServed.replace(/ /g, '_')},_New_Jersey`
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address,
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
    "priceRange": "$$",
    "hasMap": `https://www.google.com/maps?q=${latitude},${longitude}`,
    "serviceType": [
      "Emergency Locksmith",
      "Residential Locksmith",
      "Commercial Locksmith",
      "Automotive Locksmith"
    ]
  }
});
