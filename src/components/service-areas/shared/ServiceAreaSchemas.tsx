
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
      { name: `${location.name} Locksmith`, item: `/service-areas/${areaSlug}` }
    ],
    baseUrl: "https://247locksmithandsecurity.com"
  });

  const serviceSchema = {
    type: 'Service',
    data: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `Professional Locksmith Services in ${location.name}, NJ`,
      "serviceType": "Locksmith",
      "provider": {
        "@type": "LocalBusiness",
        "name": settings?.company_name || "Locksmith & Security LLC",
        "image": "/lovable-uploads/1bbeb1e6-5581-4e09-9600-7d1859bb17c5.png",
        "description": `Professional 24/7 locksmith services in ${location.name}, NJ. We provide residential, commercial, and automotive locksmith solutions with fast emergency response.`,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": settings?.company_address || "123 Main Street",
          "addressLocality": location.name,
          "addressRegion": "NJ",
          "postalCode": settings?.company_zip || "07047",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": location.lat,
          "longitude": location.lng
        },
        "priceRange": "$$",
        "telephone": settings?.company_phone || "+12017482070",
        "url": `https://247locksmithandsecurity.com/service-areas/${areaSlug}`,
        "areaServed": {
          "@type": "City",
          "name": location.name,
          "sameAs": `https://en.wikipedia.org/wiki/${location.name.replace(/ /g, '_')},_New_Jersey`
        },
        "sameAs": [
          "https://www.facebook.com/247locksmithandsecurity/",
          "https://www.yelp.com/biz/locksmith-and-security-north-bergen",
          "https://www.google.com/maps?cid=12345678901234567890" // Replace with actual Google Business Profile
        ],
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        }
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": `https://247locksmithandsecurity.com/service-areas/${areaSlug}`,
        "servicePhone": settings?.company_phone || "+12017482070",
        "serviceSmsNumber": settings?.company_phone || "+12017482070"
      },
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "price": "49.00",
        "priceCurrency": "USD",
        "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
        "url": `https://247locksmithandsecurity.com/service-areas/${areaSlug}`
      }
    }
  };

  const locationSchema = createLocationSchema({
    name: location.name,
    description: `Professional locksmith services in ${location.name}, NJ. We provide 24/7 residential, commercial and automotive locksmith solutions with fast response times.`,
    latitude: location.lat,
    longitude: location.lng,
    areaServed: location.name,
    companyName: settings?.company_name || "Locksmith & Security LLC",
    address: settings?.company_address || "",
    phone: settings?.company_phone || ""
  });

  // Enhanced FAQ schema with more location-specific questions and answers
  const faqSchema = createFAQSchema({
    questions: [
      {
        question: `What locksmith services do you offer in ${location.name}, NJ?`,
        answer: `We provide comprehensive locksmith services throughout ${location.name}, including residential locksmith services (lock installation, rekeying, repair), commercial locksmith services (master key systems, access control), and automotive locksmith services (car key replacement, programming, ignition repair). Our professional technicians are licensed, bonded, and insured.`
      },
      {
        question: `How quickly can a locksmith arrive in ${location.name}, NJ?`,
        answer: `As a local locksmith service with technicians based in and around ${location.name}, we typically arrive within 15-30 minutes for emergency situations. We prioritize emergency lockouts and aim to provide the fastest possible response throughout ${location.name}, NJ and surrounding areas.`
      },
      {
        question: `Are your locksmiths in ${location.name} licensed and insured?`,
        answer: `Yes, all our technicians serving ${location.name} are fully licensed, bonded, and insured professionals. We maintain all necessary certifications and stay up-to-date with the latest security technologies and techniques to provide the highest quality service.`
      },
      {
        question: `What types of locks do you service in ${location.name}, NJ?`,
        answer: `We service all types of locks in ${location.name}, including traditional deadbolts, smart locks, high-security locks, keyless entry systems, mortise locks, and padlocks. Our technicians are experienced with all major brands including Schlage, Kwikset, Yale, Baldwin, and more.`
      },
      {
        question: `Do you offer emergency lockout services in ${location.name} 24/7?`,
        answer: `Yes, we provide genuine 24/7 emergency lockout services throughout ${location.name}. Whether you're locked out of your home, business, or vehicle at any hour, our emergency technicians are on call to help you regain access quickly and safely, even on holidays.`
      },
      {
        question: `Can you cut and program transponder keys and key fobs in ${location.name}?`,
        answer: `Yes, we have the advanced equipment necessary to cut and program all types of transponder keys and key fobs for virtually all vehicle makes and models in ${location.name}. Our automotive locksmith specialists are extensively trained in modern vehicle key technology.`
      },
      {
        question: `What are your service rates for locksmith services in ${location.name}?`,
        answer: `Our rates for ${location.name} locksmith services are competitive and transparent. We provide upfront pricing before beginning any work. The exact cost depends on the specific service needed, time of day, and complexity of the job. Call us for a free quote specific to your needs.`
      },
      {
        question: `Do you offer emergency lock repair services in ${location.name}?`,
        answer: `Yes, we provide emergency lock repair services throughout ${location.name}. If your lock is damaged, malfunctioning, or compromised after a break-in attempt, our technicians can quickly respond to secure your property and restore your peace of mind.`
      }
    ]
  });

  return [breadcrumbSchema, serviceSchema, locationSchema, faqSchema].filter(Boolean);
};
