
import { residentialReviews } from "@/data/reviews";

// Define the FAQItem interface to match what's expected by ServicePageContent
export interface FAQItem {
  question: string;
  answer: string;
}

export const gateLocksFaqs: FAQItem[] = [
  {
    question: "How long does it take to install a new gate lock?",
    answer: "Most standard gate lock installations take between 1-2 hours, depending on the type of lock, gate material, and any modifications needed. Complex installations or electronic systems may take longer."
  },
  {
    question: "Can you install locks on any type of gate?",
    answer: "Yes, we can install locks on virtually all gate types including wood, metal, vinyl, and composite gates. We have solutions for driveway gates, garden gates, pool gates, and security gates of various sizes and designs."
  },
  {
    question: "What types of gate locks are best for outdoor use?",
    answer: "For outdoor gates, we recommend weather-resistant locks made of stainless steel, brass, or specially coated materials that resist corrosion. Depending on your needs, options include keyed padlocks, mortise locks, digital keypads with weather protection, or smart locks designed for outdoor use."
  },
  {
    question: "Can my existing gate locks be rekeyed instead of replaced?",
    answer: "In many cases, yes. If your lock mechanism is in good condition but you want to change who has access, rekeying is often a cost-effective solution. However, if the lock is damaged, worn, or outdated, replacement might be the better option for long-term security."
  },
  {
    question: "Do you offer electronic or smart locks for gates?",
    answer: "Yes, we offer a variety of electronic and smart lock solutions for gates, including keypad entry systems, Bluetooth-enabled locks, WiFi-connected systems, and locks that integrate with home automation platforms. These provide convenient keyless entry while maintaining high security standards."
  },
  {
    question: "How much does it cost to install a gate lock?",
    answer: "Gate lock installation costs vary depending on the type of lock, gate material, complexity of installation, and any additional hardware needed. Basic mechanical lock installations typically start around $150-200 including hardware, while electronic or smart lock systems start around $250-350. We provide detailed quotes after assessing your specific needs."
  },
  {
    question: "Can you repair my existing gate lock if it's stuck or difficult to operate?",
    answer: "Yes, we can repair most gate lock issues including stuck mechanisms, misalignments, and wear-related problems. Our technicians will diagnose the issue and recommend either repair or replacement based on the condition of your lock and cost-effectiveness."
  }
];

export const gateLocksRelatedServices = [
  {
    title: "Lock Replacement",
    path: "/services/residential-locksmith/lock-replacement",
    description: "Complete lock replacement services for doors, windows, and other access points in your home."
  },
  {
    title: "Lock Rekey",
    path: "/services/residential-locksmith/lock-rekey",
    description: "Rekey your existing locks to work with new keys without replacing the entire lock hardware."
  },
  {
    title: "Lock Repair",
    path: "/services/residential-locksmith/lock-repair",
    description: "Professional repair services for damaged or malfunctioning locks throughout your home."
  }
];

export const gateLocksServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Gate Lock Installation & Repair Service",
  "description": "Professional gate lock installation and repair services by certified technicians. We offer expert solutions for all types of residential gates with quality hardware and guaranteed workmanship.",
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
    "name": "Gate Lock Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Gate Lock Installation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Gate Lock Repair"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Gate Lock Upgrade"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Electronic Gate Lock Installation"
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

export const gateLocksFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": gateLocksFaqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};
