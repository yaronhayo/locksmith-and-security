
import { createFAQSchema } from "@/components/meta/schema/FAQSchema";

// FAQ data for the access control page
export const accessControlFaqs = [
  {
    question: "What is an access control system?",
    answer: "An access control system is a security solution that manages and restricts entry to a building, room, or area. It allows property owners to control who can enter specific spaces through electronic or digital authentication methods like key cards, PIN codes, or biometrics."
  },
  {
    question: "How does a keyless entry system work?",
    answer: "Keyless entry systems use electronic or digital credentials instead of traditional keys. Users can gain access through PIN codes, key cards, key fobs, smartphone apps, or biometric identification (fingerprints, facial recognition). When valid credentials are presented, the system's electronic lock releases, granting access."
  },
  {
    question: "What are the benefits of installing an access control system?",
    answer: "Access control systems offer numerous benefits including: enhanced security through controlled access and entry logs, elimination of key management issues, instant access revocation for former employees, customizable access levels for different users, integration with other security systems, and detailed audit trails of who entered where and when."
  },
  {
    question: "Can access control systems be installed in residential properties?",
    answer: "Yes, access control systems are increasingly popular for residential properties. They're particularly useful for single-family homes, apartment buildings, gated communities, and vacation rentals. Modern residential systems offer features like remote access control via smartphone apps, temporary codes for visitors, and integration with home automation systems."
  },
  {
    question: "What types of businesses benefit most from access control systems?",
    answer: "While businesses of all sizes can benefit from access control, they're particularly valuable for: offices with sensitive information, retail stores with inventory areas, healthcare facilities, educational institutions, government buildings, data centers, financial institutions, multi-tenant buildings, warehouses, and manufacturing facilities."
  },
  {
    question: "How much does an access control system cost?",
    answer: "Access control system costs vary widely based on factors like system complexity, number of entry points, credential type, and additional features. Simple single-door systems might start around $1,000-$1,500 installed, while comprehensive multi-door systems with advanced features can range from $2,500-$10,000+ depending on requirements. We provide free consultations and quotes based on your specific needs."
  },
  {
    question: "Can existing locks be converted to electronic access control?",
    answer: "In many cases, yes. Existing door hardware can often be retrofitted with electronic components that enable access control functionality. Options include electric strikes, electromagnetic locks, and smart lock cylinders that work with existing hardware. Our technicians can evaluate your current setup and recommend the most efficient conversion approach."
  },
  {
    question: "What happens during a power outage with electronic access control?",
    answer: "Most quality access control systems have backup power solutions and fail-safe/fail-secure mechanisms. Battery backups maintain functionality during power outages, and systems can be configured to either default to unlocked (fail-safe, common for fire exits) or remain locked (fail-secure, for high-security areas) when power is lost, depending on security needs and building codes."
  }
];

// Create the FAQ schema using the FAQSchema component
export const accessControlFaqSchema = createFAQSchema({
  questions: accessControlFaqs
});

// Service schema for Access Control systems
export const accessControlServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Access Control System Installation & Maintenance",
  "serviceType": "Security System Installation",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Locksmith & Security LLC",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "North Bergen",
      "addressRegion": "NJ",
      "postalCode": "07047"
    },
    "telephone": "(201) 748-2070"
  },
  "areaServed": {
    "@type": "State",
    "name": "New Jersey"
  },
  "description": "Professional access control system installation, maintenance and repair for businesses and residential properties. We offer keyless entry systems, card readers, biometric access solutions and more.",
  "offers": {
    "@type": "Offer",
    "price": "1000.00",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "priceType": "https://schema.org/MinimumPrice",
      "price": "1000.00",
      "priceCurrency": "USD"
    }
  }
};
