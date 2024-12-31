export const generateServiceSchema = (service: {
  name: string;
  description: string;
  price?: string;
  area: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.name,
  "description": service.description,
  "provider": {
    "@type": "LocalBusiness",
    "name": "Locksmith & Security LLC",
    "image": "https://247locksmithandsecurity.com/og-image.png",
    "telephone": "+15513037874",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main Street",
      "addressLocality": "North Bergen",
      "addressRegion": "NJ",
      "postalCode": "07047",
      "addressCountry": "US"
    }
  },
  "areaServed": {
    "@type": "City",
    "name": service.area
  },
  "offers": {
    "@type": "Offer",
    "price": service.price || "Call for pricing",
    "priceCurrency": "USD"
  }
});

export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Service",
        "name": "Emergency Lockout Service",
        "description": "24/7 emergency lockout services for homes, businesses, and vehicles",
        "offers": {
          "@type": "Offer",
          "price": "Call for pricing",
          "priceCurrency": "USD"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Service",
        "name": "Lock Installation",
        "description": "Professional installation of high-security locks",
        "offers": {
          "@type": "Offer",
          "price": "Call for pricing",
          "priceCurrency": "USD"
        }
      }
    }
  ]
};