
import { createBreadcrumbSchema } from "@/utils/schemaHelpers";
import { createFAQSchema } from "@/utils/schemaHelpers";
import { Location, Settings } from "@/types/service-area";

export const createServiceAreaSchemas = (
  location: Location | undefined,
  settings: Settings | undefined,
  areaSlug: string
) => {
  if (!location) return [];

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Service Areas", url: "/service-areas" },
    { name: location.name, url: `/service-areas/${areaSlug}` }
  ], "https://247locksmithandsecurity.com");

  // Enhanced service schema with more structured data
  const serviceSchema = {
    type: 'Service',
    data: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `https://247locksmithandsecurity.com/service-areas/${areaSlug}#service`,
      "name": `Locksmith Services in ${location.name}`,
      "description": `Professional locksmith services in ${location.name}, NJ providing residential, commercial, and automotive solutions.`,
      "provider": {
        "@type": "LocalBusiness",
        "@id": `https://247locksmithandsecurity.com/service-areas/${areaSlug}#localbusiness`,
        "name": settings?.company_name,
        "image": "/lovable-uploads/1bbeb1e6-5581-4e09-9600-7d1859bb17c5.png",
        "description": `Professional locksmith services in ${location.name}, NJ`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": location.name,
          "addressRegion": "NJ",
          "addressCountry": "US"
        },
        "telephone": settings?.company_phone || "(201) 748-2070",
        "priceRange": "$$",
        "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59"
      },
      "areaServed": {
        "@type": "City",
        "name": location.name,
        "sameAs": `https://en.wikipedia.org/wiki/${location.name.replace(/ /g, '_')},_New_Jersey`
      },
      "serviceType": "Locksmith Service",
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": `https://247locksmithandsecurity.com/service-areas/${areaSlug}`,
        "servicePhone": settings?.company_phone || "(201) 748-2070"
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "USD",
          "price": "75.00",
          "minPrice": "75.00"
        }
      }
    }
  };

  // Enhanced location schema
  const locationSchema = {
    type: 'Place',
    data: {
      "@context": "https://schema.org",
      "@type": "Place",
      "@id": `https://247locksmithandsecurity.com/service-areas/${areaSlug}#place`,
      "name": `${location.name}, NJ`,
      "description": location.description,
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": location.lat,
        "longitude": location.lng
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": location.name,
        "addressRegion": "NJ",
        "addressCountry": "US"
      },
      "hasMap": `https://maps.google.com/?q=${location.lat},${location.lng}`
    }
  };

  // Standard FAQ questions for all service areas
  const faqQuestions = [
    {
      question: `What locksmith services do you offer in ${location.name}?`,
      answer: `We provide comprehensive locksmith services throughout ${location.name}, including residential locksmith services (lock installation, rekeying, repair), commercial locksmith services (master key systems, access control), and automotive locksmith services (car key replacement, programming, ignition repair).`
    },
    {
      question: `How quickly can a locksmith arrive at my location in ${location.name}?`,
      answer: `As a local locksmith service with technicians based in and around ${location.name}, we can typically arrive within 15-30 minutes to assist you. We prioritize emergency situations and aim to provide the fastest possible response.`
    },
    {
      question: "Are your locksmith technicians licensed and insured?",
      answer: "Yes, all our technicians are fully licensed, bonded, and insured professionals. We maintain all necessary certifications and stay up-to-date with the latest security technologies and techniques."
    },
    {
      question: `What types of locks do you service in ${location.name}?`,
      answer: `We service all types of locks in ${location.name}, including traditional deadbolts, smart locks, high-security locks, keyless entry systems, mortise locks, and padlocks. Our technicians are experienced with all major brands and lock types.`
    },
    {
      question: `Do you offer emergency lockout services in ${location.name}?`,
      answer: `Yes, we provide 24/7 emergency lockout services throughout ${location.name}. Whether you're locked out of your home, business, or vehicle, our emergency technicians can help you regain access quickly and safely.`
    },
    {
      question: "Can you cut and program transponder keys and key fobs?",
      answer: "Yes, we have the advanced equipment necessary to cut and program all types of transponder keys and key fobs for virtually all vehicle makes and models. Our automotive locksmith specialists are extensively trained in modern vehicle key technology."
    },
    {
      question: `What areas of ${location.name} do you serve?`,
      answer: `We provide locksmith services to all neighborhoods and districts throughout ${location.name}, NJ. Our local technicians are familiar with the area and can reach any location in ${location.name} efficiently.`
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, cash, and contactless payment options. We can provide itemized receipts for all services performed."
    }
  ];

  const faqSchema = {
    type: 'FAQPage',
    data: createFAQSchema(faqQuestions)
  };

  // Enhanced local business schema with more structured data
  const localBusinessSchema = {
    type: 'LocalBusiness',
    data: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `https://247locksmithandsecurity.com/service-areas/${areaSlug}#localbusiness`,
      "name": settings?.company_name || "Locksmith & Security LLC",
      "description": `Professional locksmith services in ${location.name}, NJ. We provide emergency lockout assistance, lock repair, key cutting, and security solutions for homes, businesses, and vehicles.`,
      "url": `https://247locksmithandsecurity.com/service-areas/${areaSlug}`,
      "telephone": settings?.company_phone || "(201) 748-2070",
      "priceRange": "$$",
      "image": [
        "/lovable-uploads/1bbeb1e6-5581-4e09-9600-7d1859bb17c5.png"
      ],
      "logo": "/lovable-uploads/1bbeb1e6-5581-4e09-9600-7d1859bb17c5.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": settings?.company_address || "",
        "addressLocality": location.name,
        "addressRegion": "NJ",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": location.lat,
        "longitude": location.lng
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      ],
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": location.lat,
          "longitude": location.lng
        },
        "geoRadius": "10000"
      },
      "sameAs": [
        "https://www.facebook.com/247locksmithandsecurity/",
        "https://twitter.com/247locksmiths",
        "https://www.instagram.com/247locksmithandsecurity/"
      ]
    }
  };

  return [breadcrumbSchema, serviceSchema, locationSchema, faqSchema, localBusinessSchema].filter(Boolean);
};
