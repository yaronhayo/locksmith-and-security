
import { carServiceReviews } from "@/data/reviews";

// Define the FAQItem interface to match what's expected by ServicePageContent
export interface FAQItem {
  question: string;
  answer: string;
}

export interface RelatedService {
  title: string;
  path: string;
  description: string;
}

export const keyFobProgrammingFaqs: FAQItem[] = [
  {
    question: "What is key fob programming?",
    answer: "Key fob programming is the process of syncing a key fob to a vehicle's onboard computer system, allowing it to communicate with the car for functions like remote locking/unlocking, alarm activation, and push-button start."
  },
  {
    question: "When do I need key fob programming?",
    answer: "You'll need key fob programming when you purchase a new key fob, replace a lost one, or if your current key fob stops working properly. It's also necessary when replacing a vehicle's battery or after certain electrical system repairs."
  },
  {
    question: "Can I program a key fob myself?",
    answer: "While some basic key fobs for older vehicles can be self-programmed, most modern key fobs require specialized equipment and technical knowledge. Incorrect programming attempts can sometimes lock out the system, requiring professional intervention."
  },
  {
    question: "How long does key fob programming take?",
    answer: "Most key fob programming services take between 15-30 minutes per key. However, timing can vary depending on the vehicle make, model, year, and complexity of the key system."
  },
  {
    question: "Do you program key fobs for all vehicle makes and models?",
    answer: "Yes, we can program key fobs for virtually all vehicle makes and models, including domestic, foreign, and luxury brands. Our technicians have the necessary equipment and expertise to handle most automotive key systems on the market."
  }
];

export const keyFobProgrammingRelatedServices: RelatedService[] = [
  {
    title: "Car Key Replacement",
    path: "/services/auto-locksmith/car-key-replacement",
    description: "Complete replacement service for lost or damaged car keys."
  },
  {
    title: "Car Key Duplicate",
    path: "/services/auto-locksmith/car-key-duplicate",
    description: "Create backup copies of your existing car keys for emergencies."
  },
  {
    title: "Car Lockout Service",
    path: "/services/emergency-locksmith/car-lockout",
    description: "Emergency assistance when locked out of your vehicle."
  },
  {
    title: "Ignition Lock Cylinder Replacement",
    path: "/services/auto-locksmith/ignition-lock-cylinder",
    description: "Repair or replace damaged ignition systems."
  }
];

export const keyFobProgrammingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Key Fob Programming Service",
  "description": "Professional key fob programming service for all vehicle makes and models by certified automotive locksmiths.",
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
    "name": "Key Fob Programming Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "New Key Fob Programming"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Key Fob Reprogramming"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Push-Button Start Programming"
        }
      }
    ]
  },
  "review": carServiceReviews.slice(0, 5).map(review => ({
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

export const keyFobProgrammingFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": keyFobProgrammingFaqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};
