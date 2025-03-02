
export const carLockoutFaqs = [
  {
    question: "How long does it typically take to unlock a car?",
    answer: "Most standard car lockouts can be resolved in 15-30 minutes after our technician arrives. However, the exact time depends on the vehicle make, model, and lock type. High-security vehicles or those with advanced locking mechanisms may require additional time."
  },
  {
    question: "Will unlocking my car cause any damage?",
    answer: "Our professional locksmiths use specialized tools and techniques designed to open your vehicle without causing damage. We prioritize non-destructive entry methods to protect your vehicle's integrity."
  },
  {
    question: "What information do I need to provide when calling for car lockout service?",
    answer: "To provide the most efficient service, please have your vehicle's make, model, year, and your exact location ready. This helps us dispatch the right technician with the appropriate tools for your specific vehicle."
  },
  {
    question: "Can you unlock all types of vehicles?",
    answer: "Yes, our technicians are trained to handle virtually all passenger vehicles, including cars, trucks, SUVs, and vans. This includes both domestic and foreign vehicles with various locking systems."
  },
  {
    question: "Do I need to prove the car is mine?",
    answer: "Yes, for security purposes, we require proof of ownership or authorization to access the vehicle. This typically involves showing identification and vehicle registration or insurance documentation."
  }
];

export const carLockoutSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Car Lockout Service",
  "description": "Professional automotive locksmith services for car lockouts. Our certified technicians provide fast, reliable, and damage-free vehicle entry.",
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
    "name": "Car Lockout Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emergency Car Lockout"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Broken Key Extraction"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Trunk Unlock"
        }
      }
    ]
  }
};

export const carLockoutFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": carLockoutFaqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};
