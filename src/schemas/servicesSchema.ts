
export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Professional Locksmith Services",
  "description": "Expert locksmith services including residential, commercial, and automotive solutions. Available 24/7 for all your security needs.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Locksmith & Security LLC",
    "image": "/og-image.png",
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
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "40.7795",
        "longitude": "-74.0324"
      },
      "geoRadius": "30mi"
    }
  },
  "serviceType": [
    "Residential Locksmith",
    "Commercial Locksmith",
    "Automotive Locksmith",
    "Emergency Locksmith"
  ],
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://247locksmithandsecurity.com/book-online",
    "servicePhone": "+15513037874"
  }
};

