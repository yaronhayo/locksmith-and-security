
import { residentialReviews } from "@/data/reviews";

// Define the FAQItem interface
export interface FAQItem {
  question: string;
  answer: string;
}

export const lockRekeyFaqs: FAQItem[] = [
  {
    question: "What's the difference between rekeying a lock and replacing it?",
    answer: "Rekeying changes the internal pins of a lock so it works with a new key, while keeping the existing hardware. Replacing a lock involves removing the entire lock assembly and installing a new one. Rekeying is typically more cost-effective when the lock is in good condition but you want to change who has access."
  },
  {
    question: "How long does it take to rekey a lock?",
    answer: "Most standard locks can be rekeyed in about 10-15 minutes per lock. If you have multiple locks to rekey, the process is usually very efficient as our technicians bring all the necessary tools and equipment to handle the job in a single visit."
  },
  {
    question: "Can you rekey all types of locks?",
    answer: "We can rekey most conventional pin tumbler locks, including deadbolts, doorknobs, lever handles, and mortise locks from major manufacturers. Some high-security locks, electronic locks, or very old locks may have limitations. Our technicians can quickly assess if your locks can be rekeyed."
  },
  {
    question: "Do I need to have the original key to rekey a lock?",
    answer: "Having the original key makes the rekeying process faster and more economical. However, if you don't have the original key, our locksmiths can still rekey the lock using specialized techniques, though it may take slightly longer and could incur additional service costs."
  },
  {
    question: "Can you make all my doors use the same key when rekeying?",
    answer: "Yes, this is called 'keying alike' and is one of the most common requests. We can rekey multiple locks to work with the same key, as long as they are compatible lock brands and models. This is convenient for homeowners who want to carry fewer keys while maintaining security."
  }
];

export const lockRekeyServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Lock Rekey Service",
  "description": "Professional lock rekeying service that changes your lock pins, allowing you to keep your existing hardware but use new keys. Ideal after moving, losing keys, or when wanting to simplify your key system.",
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
    "name": "Lock Rekey Services",
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
          "name": "Keying Alike"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Master Key Systems"
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

export const lockRekeyFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": lockRekeyFaqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};
