
import { commercialReviews } from "@/data/reviews";

// Define the FAQItem interface to match what's expected by ServicePageContent
export interface FAQItem {
  question: string;
  answer: string;
}

export const emergencyExitDeviceFaqs: FAQItem[] = [
  {
    question: "What is an emergency exit device?",
    answer: "An emergency exit device, also known as a panic bar or push bar, is a door-opening mechanism that allows for quick and easy exit during emergencies. It consists of a horizontal bar that spans the width of the door and releases the latch when pressed, allowing for immediate egress."
  },
  {
    question: "Are emergency exit devices required by law?",
    answer: "Yes, in most jurisdictions, emergency exit devices are required by law for commercial buildings, especially in areas with high occupancy. Local fire codes, building regulations, and the National Fire Protection Association (NFPA) standards often mandate their installation for public safety compliance and occupational licensing."
  },
  {
    question: "How often should emergency exit devices be inspected?",
    answer: "Emergency exit devices should be inspected at least annually, though many local regulations require quarterly or semi-annual inspections. Regular maintenance ensures proper functioning during emergencies and compliance with local fire safety codes and insurance requirements."
  },
  {
    question: "Can emergency exit devices be locked from the inside?",
    answer: "No, true emergency exit devices should never be locked, chained, or otherwise impeded from the inside. This is a serious safety violation and against fire codes. Special alarmed or delayed egress devices may be used in certain controlled environments, but these must still provide immediate exit during emergencies."
  },
  {
    question: "What types of emergency exit devices are available?",
    answer: "Several types are available including rim devices (most common), mortise lock devices, vertical rod devices (for double doors), and concealed vertical rod devices. Each type serves different door configurations and security needs while maintaining emergency egress requirements."
  },
  {
    question: "Can emergency exit devices work with access control systems?",
    answer: "Yes, modern emergency exit devices can be integrated with electronic access control systems. These configurations allow for controlled entry from the outside while maintaining free egress from the inside, in compliance with fire safety regulations."
  },
  {
    question: "What buildings require emergency exit devices?",
    answer: "Buildings that typically require emergency exit devices include schools, hospitals, theaters, restaurants, retail stores, office buildings, and any facility where public gatherings occur. Local building codes specify which occupancy types and door locations require these devices."
  }
];

export const emergencyExitDeviceRelatedServices = [
  {
    title: "Commercial Lock Replacement",
    path: "/services/commercial-locksmith/lock-replacement",
    description: "Complete lock replacement services for all types of commercial doors and access points."
  },
  {
    title: "Master Key System",
    path: "/services/commercial-locksmith/master-key",
    description: "Create a hierarchical access system that allows specific keys to open specific doors while maintaining security."
  },
  {
    title: "Access Control Systems",
    path: "/services/commercial-locksmith/access-control",
    description: "Electronic access control systems that can be integrated with emergency exit devices for enhanced security."
  }
];

export const emergencyExitDeviceServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Emergency Exit Device Installation & Repair",
  "description": "Professional installation and maintenance of panic bars and push bars for emergency exits. We ensure your business complies with local fire codes and safety regulations while maintaining security.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Locksmith & Security LLC",
    "telephone": "(201) 748-2070",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "North Bergen",
      "addressRegion": "NJ"
    }
  },
  "areaServed": [
    "North Bergen, NJ",
    "Jersey City, NJ",
    "Hoboken, NJ",
    "Weehawken, NJ",
    "Union City, NJ",
    "West New York, NJ",
    "Secaucus, NJ",
    "Guttenberg, NJ"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Emergency Exit Device Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Panic Bar Installation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Push Bar Repair"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emergency Exit Device Maintenance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Compliance Inspection"
        }
      }
    ]
  },
  "review": commercialReviews.slice(0, 5).map(review => ({
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating,
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": review.name
    },
    "reviewBody": review.text
  }))
};

export const emergencyExitDeviceFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": emergencyExitDeviceFaqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};
