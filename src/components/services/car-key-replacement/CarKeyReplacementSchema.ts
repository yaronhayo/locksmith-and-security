
import { carServiceReviews } from "@/data/reviews/carServiceReviews";

// Define the FAQItem interface
export interface FAQItem {
  question: string;
  answer: string;
}

export const carKeyReplacementFaqs: FAQItem[] = [
  {
    question: "How much does a car key replacement cost?",
    answer: "The cost varies based on your vehicle's make, model, and key type. Basic metal keys start at $70, while transponder keys, remote fobs, and smart keys range from $120-$400 depending on complexity. We always provide a clear quote before beginning work."
  },
  {
    question: "Can you replace a car key if I've lost all my keys?",
    answer: "Yes, we can replace keys even if you've lost all your original keys. This involves additional steps to extract the key code from your vehicle's locks or ECU and may require proof of ownership for security purposes."
  },
  {
    question: "How long does car key replacement take?",
    answer: "Most standard key replacements take 30-60 minutes. However, more complex keys (like those for luxury vehicles) or situations where all keys are lost might take 1-2 hours. Our mobile service comes to your location, saving you the time and hassle of towing your vehicle."
  },
  {
    question: "Will a replacement key work with my car's immobilizer system?",
    answer: "Yes, our replacement keys are fully programmed to work with your vehicle's immobilizer system. We use specialized equipment to properly code transponder chips and program remote functions to ensure seamless operation with your specific vehicle."
  },
  {
    question: "Do I need to go to the dealership for a replacement key?",
    answer: "No, our automotive locksmiths can provide the same high-quality replacement keys as dealerships, often at 40-60% lower cost and with much faster service. We come to your location and can typically complete the service same-day, while dealerships might take days or weeks."
  }
];

export const carKeyReplacementServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Car Key Replacement Service",
  "description": "Professional car key replacement service for all vehicle makes and models. We replace traditional keys, transponder keys, remote fobs, and smart keys with fast, mobile service at competitive rates.",
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
    "name": "Car Key Replacement Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Traditional Car Key Replacement"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Transponder Key Replacement"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Remote Key Fob Replacement"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Smart Key Replacement"
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

export const carKeyReplacementFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": carKeyReplacementFaqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};
