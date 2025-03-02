
import type { Schema } from '@/types/schema';

export const masterKeySchema: Schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Master Key System Design & Installation Services",
  "description": "Professional master key system design and implementation by certified technicians. Expert access control solutions for your business.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Locksmith & Security LLC",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "West New York",
      "addressRegion": "NJ",
      "postalCode": "07093",
      "streetAddress": "5800 Kennedy Blvd"
    },
    "telephone": "+12017482070"
  },
  "areaServed": {
    "@type": "State",
    "name": "New Jersey"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Master Key System Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Master Key System Design",
          "description": "Custom design of a hierarchical master key system tailored to your business requirements."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Master Key Implementation",
          "description": "Professional installation and setup of your master key system with precision and attention to detail."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Key Control Systems",
          "description": "Restricted key systems that prevent unauthorized key duplication to maintain security integrity."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Master Key System Maintenance",
          "description": "Ongoing support and maintenance of your master key system to ensure continued functionality."
        }
      }
    ]
  }
};

export const masterKeyFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a master key system?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A master key system is a hierarchical lock system that allows different levels of access control. It enables specific keys to open only certain doors while master keys can access multiple or all doors within the system. This is ideal for businesses with different departments and security clearance levels."
      }
    },
    {
      "@type": "Question",
      "name": "How secure are master key systems for businesses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When properly designed and implemented by professionals, master key systems are highly secure. We use restricted keyways that prevent unauthorized duplication, implement proper key control protocols, and can integrate with electronic access systems for enhanced security. The key is proper planning and implementation by certified technicians."
      }
    },
    {
      "@type": "Question", 
      "name": "How long does it take to install a master key system?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The timeframe varies depending on the size and complexity of your facility. A small business might be completed in a day, while larger facilities with many doors could take several days to a week. We work efficiently to minimize disruption to your operations during implementation."
      }
    },
    {
      "@type": "Question",
      "name": "Can a master key system be expanded as my business grows?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, a properly designed master key system is scalable and can accommodate business growth. Our master key systems are designed with expansion in mind, allowing for the addition of new doors and access levels without compromising the existing structure."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if a master key is lost or stolen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If a master key is lost or stolen, it's important to act quickly. Depending on the system design, we may need to rekey specific sections or the entire system. This is why we implement proper key control protocols and can offer solutions like restricted keyways to mitigate risks associated with lost keys."
      }
    }
  ]
};
