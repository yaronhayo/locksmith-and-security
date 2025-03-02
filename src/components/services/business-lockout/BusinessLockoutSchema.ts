
import { commercialReviews } from "@/data/reviews";

// Define the FAQItem interface to match what's expected by ServicePageContent
export interface FAQItem {
  question: string;
  answer: string;
}

export const businessLockoutFaqs: FAQItem[] = [
  {
    question: "What types of businesses do you provide lockout services for?",
    answer: "We provide lockout services for a wide range of businesses, including offices, retail stores, restaurants, warehouses, and more. No matter the type of business, our experienced locksmiths can help you regain access quickly and safely."
  },
  {
    question: "How quickly can you respond to a business lockout call?",
    answer: "We understand that time is of the essence when you're locked out of your business. That's why we offer 24/7 emergency lockout services with a fast response time. In most cases, we can arrive at your location within 30 minutes to an hour, depending on traffic and location."
  },
  {
    question: "What information do I need to provide when calling for a business lockout service?",
    answer: "When you call us for a business lockout service, please provide the following information: your business name, address, contact person, and a brief description of the situation. This will help us dispatch the right technician with the appropriate tools for your specific needs."
  },
  {
    question: "Can you unlock all types of commercial doors and locks?",
    answer: "Yes, our technicians are trained to handle virtually all types of commercial doors and locks, including standard doors, high-security doors, and electronic access control systems. We use specialized tools and techniques to safely unlock your business without causing damage."
  },
  {
    question: "Do I need to provide proof of ownership or authorization to access the business?",
    answer: "Yes, for security purposes, we require proof of ownership or authorization to access the business. This typically involves showing identification and business registration or lease documentation. We may also contact the property owner or manager to verify your authorization."
  }
];

export const businessServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Business Lockout Service",
  "description": "Professional commercial locksmith services for business lockouts. Our certified technicians provide fast, reliable, and damage-free entry.",
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
    "name": "Business Lockout Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emergency Business Lockout"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Office Unlock"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Building Unlock"
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

export const businessLockoutFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": businessLockoutFaqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};
