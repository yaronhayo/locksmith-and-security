
import { residentialReviews } from "@/data/reviews";

// Define the FAQItem interface since it's not exported from ServicePageContent
export interface FAQItem {
  question: string;
  answer: string;
}

export const houseLockoutFaqs: FAQItem[] = [
  {
    question: "How long does it typically take to unlock a house?",
    answer: "Most residential lockouts can be resolved within 15-30 minutes after our technician arrives. The exact time depends on the type of lock, security features, and complexity of your home's locking system."
  },
  {
    question: "Will unlocking my house door cause any damage?",
    answer: "Our professional locksmiths use specialized tools and techniques designed to open your door without causing damage. We prioritize non-destructive entry methods to protect your property's integrity."
  },
  {
    question: "What information should I have ready when calling for house lockout service?",
    answer: "To provide efficient service, please have your address, type of lock if known, and be prepared to show proof of residence upon the locksmith's arrival for security purposes."
  },
  {
    question: "Can you unlock all types of residential locks?",
    answer: "Yes, our technicians are trained to handle virtually all types of residential locks, including standard doorknobs, deadbolts, mortise locks, smart locks, high-security locks, and keypad systems."
  },
  {
    question: "How do I prove the house is mine when the locksmith arrives?",
    answer: "For security purposes, you'll need to provide identification that matches the address or documents showing proof of residence such as a utility bill, lease agreement, or property deed."
  }
];

export const houseServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Residential Lockout Service",
  "description": "Professional residential locksmith services for house lockouts. Our certified technicians provide fast, reliable, and damage-free home entry.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Locksmith & Security LLC",
    "telephone": "(201) 748-2070",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "North Bergen",
      "addressRegion": "NJ"
    },
    "url": "https://247locksmithandsecurity.com/services/emergency-locksmith/house-lockout"
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
  "offers": {
    "@type": "Offer",
    "price": "95.00",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "priceType": "https://schema.org/MinimumPrice",
      "price": "95.00",
      "priceCurrency": "USD"
    },
    "availability": "https://schema.org/InStock",
    "availabilityStarts": "2023-01-01T00:00:00-05:00",
    "availabilityEnds": "2025-12-31T23:59:59-05:00"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Residential Lockout Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Standard House Lockout"
        },
        "price": "95.00",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emergency House Lockout"
        },
        "price": "145.00",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Broken Key Extraction"
        },
        "price": "85.00",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
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
  })),
  "serviceOutput": {
    "@type": "Thing",
    "name": "Property Access Restoration"
  },
  "hoursAvailable": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  }
};

export const houseLockoutFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": houseLockoutFaqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};
