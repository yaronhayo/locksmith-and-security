export const createOfferCatalogSchema = () => ({
  "@type": "OfferCatalog",
  "name": "Locksmith Services",
  "itemListElement": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Emergency Lockout Service",
        "description": "24/7 emergency lockout services for homes, businesses, and vehicles"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Lock Installation",
        "description": "Professional installation of high-security locks"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Car Key Programming",
        "description": "Professional car key programming and replacement services"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Business Security Solutions",
        "description": "Complete commercial security system solutions"
      }
    }
  ]
});