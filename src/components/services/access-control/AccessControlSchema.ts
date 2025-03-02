
import { FAQSchema } from "@/types/schema";

export const accessControlSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Access Control Systems",
  "description": "Professional access control system design, installation and maintenance for enhanced business security",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Locksmith & Security LLC",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "104 Harrison St",
      "addressLocality": "Hoboken",
      "addressRegion": "NJ",
      "postalCode": "07030"
    },
    "telephone": "2017482070"
  },
  "areaServed": {
    "@type": "State",
    "name": "New Jersey"
  },
  "serviceType": "Access Control System Installation",
  "offers": {
    "@type": "Offer",
    "price": "199.00",
    "priceCurrency": "USD"
  }
};

export const accessControlFAQSchema: FAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What types of access control systems do you offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer a wide range of access control systems including card/fob readers, keypad entry systems, biometric solutions (fingerprint, retina, and facial recognition), and mobile credential systems that use smartphones as access devices. Our team will help you determine the best solution based on your security requirements and budget."
      }
    },
    {
      "@type": "Question",
      "name": "Can access control systems be integrated with existing security systems?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, most modern access control systems can integrate with existing security infrastructure like video surveillance, alarm systems, and building management systems. We specialize in creating cohesive security solutions that work together to protect your business while maximizing your existing investments."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to install an access control system?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Installation time varies depending on the complexity of the system and number of access points. A basic system for a small business might take 1-2 days, while enterprise solutions for larger facilities may take several weeks. During our initial consultation, we'll provide a detailed timeline specific to your project."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if an employee leaves the company or loses their access credential?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "One of the primary benefits of electronic access control is the ability to immediately revoke access privileges. If an employee leaves or loses their credential, we can quickly deactivate it in the system, eliminating security risks. There's no need to rekey locks or worry about unauthorized access from lost keys."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide maintenance and support for access control systems?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer comprehensive maintenance plans and technical support for all our access control installations. Our service packages include regular system checks, software updates, troubleshooting, and emergency response services to ensure your system remains operational and secure at all times."
      }
    },
    {
      "@type": "Question",
      "name": "Can an access control system track when employees enter and exit the building?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all of our access control systems include detailed reporting capabilities that track entry and exit events. These systems create logs showing who accessed which doors and when, providing valuable information for security monitoring, time tracking, and accountability purposes."
      }
    }
  ]
};
