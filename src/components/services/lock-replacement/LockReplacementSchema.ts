
import { residentialReviews } from "@/data/reviews";

// Define the FAQItem interface to match what's expected by ServicePageContent
export interface FAQItem {
  question: string;
  answer: string;
}

export const lockReplacementFaqs: FAQItem[] = [
  {
    question: "How long does it take to replace a door lock?",
    answer: "A standard lock replacement typically takes 30-60 minutes per door. However, the time can vary depending on the type of lock, door condition, and if any modifications are needed. Complex installations, such as smart locks or high-security systems, may take longer."
  },
  {
    question: "Should I replace my locks or rekey them?",
    answer: "Replace locks if they're old, damaged, worn out, or you want to upgrade your security. Rekeying is more cost-effective if the locks are in good condition but you want to change who has access, such as after losing keys or moving into a new home. Our technicians can assess your specific situation and recommend the best option."
  },
  {
    question: "What types of locks do you recommend for exterior doors?",
    answer: "For exterior doors, we generally recommend high-quality deadbolts (ANSI Grade 1 or 2) as they provide the best security. Depending on your needs, we might suggest smart locks, electronic keypads, or mechanical locks. The best choice depends on your specific security requirements, budget, and convenience preferences."
  },
  {
    question: "Can you match new locks to my existing keys?",
    answer: "In many cases, yes. This process is called keying alike, where we can set up multiple new locks to work with the same key. However, this depends on the lock brand and type. Our technicians can discuss your options during the service visit."
  },
  {
    question: "Do you install smart locks and electronic access systems?",
    answer: "Yes, we install a wide variety of smart locks and electronic access systems from leading brands. These include keypad locks, Bluetooth-enabled locks, Wi-Fi connected systems, and locks that integrate with home automation platforms. We can help you choose the right system and provide complete setup assistance."
  }
];

export const lockReplacementServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Residential Lock Replacement Service",
  "description": "Professional lock replacement service for homes. Our certified technicians provide expert installation of high-quality locks for enhanced security.",
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
    "name": "Lock Replacement Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Deadbolt Installation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Smart Lock Installation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "High-Security Lock Installation"
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

export const lockReplacementFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": lockReplacementFaqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};
