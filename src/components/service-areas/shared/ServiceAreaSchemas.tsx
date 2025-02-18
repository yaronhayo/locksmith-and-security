
import { createFAQSchema } from "@/components/meta/schema/FAQSchema";
import { createLocationSchema } from "@/components/meta/schema/LocationSchema";
import { createBreadcrumbSchema } from "@/components/meta/schema/BreadcrumbSchema";
import { Location, Settings } from "@/types/service-area";

export const createServiceAreaSchemas = (
  location: Location | undefined,
  settings: Settings | undefined,
  areaSlug: string
) => {
  if (!location) return [];

  const breadcrumbSchema = createBreadcrumbSchema({
    breadcrumbs: [
      { name: "Home", item: "/" },
      { name: "Service Areas", item: "/service-areas" },
      { name: location.name, item: `/service-areas/${areaSlug}` }
    ],
    baseUrl: "https://247locksmithandsecurity.com"
  });

  const serviceSchema = {
    type: 'Service',
    data: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `Locksmith Services in ${location.name}`,
      "provider": {
        "@type": "LocalBusiness",
        "name": settings?.company_name,
        "image": "/lovable-uploads/1bbeb1e6-5581-4e09-9600-7d1859bb17c5.png",
        "description": `Professional locksmith services in ${location.name}, NJ`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": location.name,
          "addressRegion": "NJ",
          "addressCountry": "US"
        }
      },
      "areaServed": {
        "@type": "City",
        "name": location.name,
        "sameAs": `https://en.wikipedia.org/wiki/${location.name.replace(/ /g, '_')},_New_Jersey`
      }
    }
  };

  const locationSchema = createLocationSchema({
    name: location.name,
    description: location.description,
    latitude: location.lat,
    longitude: location.lng,
    areaServed: location.name,
    companyName: settings?.company_name || "Locksmith & Security LLC",
    address: settings?.company_address || "",
    phone: settings?.company_phone || ""
  });

  const faqSchema = createFAQSchema({
    questions: [
      {
        question: `What areas of ${location.name} do you serve?`,
        answer: `We provide comprehensive locksmith services throughout all of ${location.name}, NJ and surrounding areas.`
      },
      {
        question: "Are you available 24/7 for emergencies?",
        answer: "Yes, we offer 24/7 emergency locksmith services for all residential, commercial, and automotive needs."
      },
      {
        question: "How quickly can you arrive?",
        answer: "We typically arrive within 20-30 minutes for emergency calls in our service area."
      },
      {
        question: `What are your most popular services in ${location.name}?`,
        answer: "Our most requested services include emergency lockouts, car key replacement, and commercial lock installation."
      },
      {
        question: "Do you provide written estimates?",
        answer: "Yes, we provide detailed written estimates before beginning any work, ensuring complete transparency."
      }
    ]
  });

  return [breadcrumbSchema, serviceSchema, locationSchema, faqSchema].filter(Boolean);
};
