
import { carServiceReviews } from "@/data/reviews/carServiceReviews";

// Define the FAQItem interface
export interface FAQItem {
  question: string;
  answer: string;
}

export const carKeyReplacementFaqs: FAQItem[] = [
  {
    question: "How long does it take to replace a car key?",
    answer: "The time required to replace a car key depends on the type of key and vehicle. Basic metal keys can be cut in minutes, while transponder keys, remote fobs, and smart keys typically take 30-60 minutes to cut and program. Complex key systems for luxury vehicles might take longer. Our mobile service means we come to you, eliminating the wait time at a dealership."
  },
  {
    question: "Do I need all my car keys lost before getting a replacement?",
    answer: "No, you don't need to lose all your keys before getting a replacement. In fact, it's much more convenient and cost-effective to get a spare key made while you still have at least one working key. If you've lost all keys, we can still help, but the process may take longer and could require additional steps to program your vehicle's security system."
  },
  {
    question: "Can you replace keys for any car make and model?",
    answer: "We can replace keys for virtually all domestic and imported vehicles, including cars, trucks, SUVs, and vans. Our technicians have experience with a wide range of manufacturers from Toyota and Honda to BMW and Mercedes, as well as less common makes. We regularly update our equipment and databases to stay current with newer vehicle models."
  },
  {
    question: "What information do I need to provide for car key replacement?",
    answer: "To replace your car key, we'll need your vehicle identification number (VIN), proof of vehicle ownership (such as registration or title), a valid photo ID, and information about the make, model, and year of your vehicle. This information ensures security and allows us to create the correct key for your specific vehicle."
  },
  {
    question: "Can you replace a key fob that's no longer working?",
    answer: "Yes, we can replace non-functioning key fobs. If the remote buttons have stopped working but the key still starts the car, we can often replace just the remote portion. If the entire unit is damaged, we provide complete replacement key fobs and program them to work with your vehicle. We can also troubleshoot issues that might be caused by dead batteries or programming errors rather than physical damage."
  }
];

export const carKeyReplacementServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Car Key Replacement Service",
  "description": "Professional car key replacement service for all vehicle makes and models. Our certified automotive locksmiths provide expert key cutting and programming for traditional keys, transponders, remote fobs, and smart keys.",
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
          "name": "Transponder Key Replacement"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Key Fob Replacement"
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
