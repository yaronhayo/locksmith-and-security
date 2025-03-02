
import { commercialReviews } from "@/data/reviews";

// Define the FAQItem interface to match what's expected by ServicePageContent
export interface FAQItem {
  question: string;
  answer: string;
}

export const commercialLockRekeyFaqs: FAQItem[] = [
  {
    question: "What is lock rekeying?",
    answer: "Lock rekeying is the process of changing a lock's internal pins and springs to work with a different key. Unlike lock replacement, rekeying keeps the existing hardware but changes the internal mechanism so that old keys no longer work."
  },
  {
    question: "Why should I rekey my commercial locks?",
    answer: "You should rekey your commercial locks when you want to maintain your existing hardware but need to restrict access, such as after employee turnover, lost/stolen keys, moving into a new property, or to create a master key system. It's a cost-effective security solution."
  },
  {
    question: "How long does commercial lock rekeying take?",
    answer: "Most commercial lock rekeying jobs take between 20-40 minutes per lock. The total time depends on the number of locks, their complexity, and whether they need to be keyed alike or separately. For a typical small business with 5-10 locks, the entire process usually takes 2-4 hours."
  },
  {
    question: "Can you rekey locks to work with existing keys?",
    answer: "Yes, we can rekey locks to work with an existing key you already have. This is useful when you want all doors to open with the same key (keyed alike system) or when implementing a master key system."
  },
  {
    question: "Is rekeying cheaper than replacing locks?",
    answer: "Yes, rekeying is typically 50-70% less expensive than replacing locks entirely. Rekeying allows you to keep your existing hardware while changing only the internal components, making it a cost-effective security solution for businesses."
  },
  {
    question: "Can all types of commercial locks be rekeyed?",
    answer: "Most standard commercial locks can be rekeyed, including cylindrical locks, mortise locks, rim cylinders, and many high-security lock systems. However, some proprietary or specialty locks may have limitations. Our technicians can assess your specific locks and provide guidance."
  },
  {
    question: "Do I need to provide all current keys when rekeying?",
    answer: "No, you don't need to have all current keys to rekey a lock. A skilled locksmith can rekey a lock without the original key by disassembling the lock cylinder. However, having at least one working key can make the process faster and more cost-effective."
  }
];

export const commercialLockRekeyRelatedServices = [
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
    title: "Business Lockout Service",
    path: "/services/emergency-locksmith/business-lockout",
    description: "Emergency assistance when you're locked out of your business premises with quick, damage-free entry methods."
  }
];

export const commercialLockRekeyServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Commercial Lock Rekey Service",
  "description": "Professional commercial lock rekeying by certified technicians. We change your lock internals to work with new keys while keeping the existing hardware, providing a cost-effective security solution for businesses.",
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
    "name": "Commercial Lock Rekey Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Standard Lock Rekeying"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "High-Security Lock Rekeying"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Master Key System Implementation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emergency Lock Rekeying"
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

export const commercialLockRekeyFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": commercialLockRekeyFaqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};
