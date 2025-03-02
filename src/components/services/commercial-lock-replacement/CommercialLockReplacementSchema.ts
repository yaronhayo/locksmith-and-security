
import { commercialReviews } from "@/data/reviews";

// Define the FAQItem interface
export interface FAQItem {
  question: string;
  answer: string;
}

export const commercialLockReplacementFaqs: FAQItem[] = [
  {
    question: "What is the difference between commercial and residential locks?",
    answer: "Commercial locks are built for higher traffic and greater durability compared to residential locks. They typically feature stronger internal components, more robust construction, and are designed to withstand thousands of uses daily. Commercial locks also often comply with specific building codes and ADA requirements, and may integrate with broader security and access control systems."
  },
  {
    question: "How long does it take to replace commercial locks?",
    answer: "The time required depends on several factors including the number of doors, type of locks being installed, and any special requirements. A single standard commercial door might take 30-60 minutes, while a complete facility with multiple doors and special hardware could take several hours or even multiple days for large complexes. We can provide a time estimate after assessing your specific needs."
  },
  {
    question: "Can you match our existing master key system when replacing locks?",
    answer: "Yes, in most cases we can replace locks while maintaining compatibility with your existing master key system. Our technicians are skilled at working with various key systems and can often integrate new locks into your current hierarchy. During our assessment, we'll determine the best approach to maintain your key control while upgrading your locks."
  },
  {
    question: "Do you offer after-hours commercial lock replacement to avoid business disruption?",
    answer: "Absolutely. We understand that security upgrades shouldn't interfere with your business operations. We offer flexible scheduling including evenings, weekends, and overnight service to minimize disruption to your business. This is particularly important for retail, hospitality, and other businesses that can't afford downtime during operating hours."
  },
  {
    question: "What types of high-security options do you offer for commercial properties?",
    answer: "We provide a wide range of high-security solutions, including restricted keyway systems that prevent unauthorized key duplication, high-security cylinders with drill and pick resistance, electronic access control integration, biometric locks, and multi-point locking systems. Our team can recommend the appropriate security level based on your risk assessment and security requirements."
  }
];

export const commercialLockReplacementServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Commercial Lock Replacement Service",
  "description": "Professional commercial lock replacement services for businesses of all sizes. Our certified technicians provide expert installation of high-grade commercial locks for enhanced security.",
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
    "name": "Commercial Lock Replacement Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mortise Lock Installation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Exit Device Installation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Electronic Access Control Installation"
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

export const commercialLockReplacementFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": commercialLockReplacementFaqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};
