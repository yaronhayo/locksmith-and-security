
import { residentialReviews } from "@/data/reviews";

// Define the FAQItem interface to match what's expected by ServicePageContent
export interface FAQItem {
  question: string;
  answer: string;
}

export const storageUnitLockoutFaqs: FAQItem[] = [
  {
    question: "What should I do if I'm locked out of my storage unit?",
    answer: "First, verify that you have the correct unit number and that your account is in good standing with the storage facility. Then, contact us for professional lockout assistance."
  },
  {
    question: "Can you open any storage unit lock?",
    answer: "In most cases, yes. Our experienced locksmiths have the tools and knowledge to open a variety of storage unit locks without causing damage to the unit."
  },
  {
    question: "Do I need to provide proof that I own the storage unit?",
    answer: "Yes, we require proof of ownership or authorization to access the storage unit. This typically involves showing identification and your storage unit rental agreement."
  },
  {
    question: "Will you damage my storage unit lock when opening it?",
    answer: "Our priority is to open your storage unit lock without causing damage. However, in some cases, the lock may need to be drilled or cut, especially if it's a high-security lock."
  },
  {
    question: "How long will it take for you to arrive and open my storage unit?",
    answer: "Our response time varies depending on our current workload and your location. However, we strive to arrive as quickly as possible to resolve your storage unit lockout situation."
  }
];

export const storageUnitServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Storage Unit Lockout Service",
  "description": "Professional locksmith services for storage unit lockouts. Our certified technicians provide fast, reliable, and damage-free entry.",
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
    "name": "Storage Unit Lockout Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emergency Storage Unit Lockout"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Lock Drilling"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Lock Cutting"
        }
      }
    ]
  },
  "review": residentialReviews.slice(0, 5).map(review => ({
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

export const storageUnitLockoutFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": storageUnitLockoutFaqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};
