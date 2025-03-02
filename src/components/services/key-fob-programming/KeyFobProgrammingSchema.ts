
// Key Fob Programming FAQs
export const keyFobProgrammingFaqs = [
  {
    question: "How long does key fob programming take?",
    answer: "Most key fob programming services can be completed in 15-30 minutes, depending on your vehicle make and model. Our certified technicians work efficiently to minimize your wait time."
  },
  {
    question: "Can you program a key fob I purchased online?",
    answer: "Yes, we can program key fobs that you've purchased separately. However, we recommend consulting with us before buying to ensure compatibility with your vehicle. Not all aftermarket key fobs are programmable for all vehicles."
  },
  {
    question: "Is key fob programming cheaper than going to the dealership?",
    answer: "Yes, our key fob programming service typically costs 30-50% less than dealership prices. We provide the same professional service at more competitive rates without compromising quality."
  },
  {
    question: "Do I need to bring my vehicle for key fob programming?",
    answer: "Yes, your vehicle must be present for key fob programming as we need to connect to your vehicle's onboard computer system. However, as a mobile service, we come to your location."
  },
  {
    question: "Will programming a new key fob delete my old ones?",
    answer: "In most cases, programming a new key fob won't affect existing fobs. However, for security reasons, if a key fob was lost or stolen, we recommend reprogramming all fobs to ensure the missing one can't be used."
  },
  {
    question: "What types of key fobs can you program?",
    answer: "We can program virtually all types of automotive key fobs, including standard remote entry fobs, push-to-start smart keys, proximity keys, flip keys, and integrated key fobs for most vehicle makes and models."
  }
];

// Key Fob Programming Service Schema
export const keyFobProgrammingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Key Fob Programming",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Locksmith & Security LLC",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7611 Bergenline Ave",
      "addressLocality": "North Bergen",
      "addressRegion": "NJ",
      "postalCode": "07047",
      "addressCountry": "US"
    },
    "telephone": "(201) 748-2070",
    "priceRange": "$$"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "North Bergen",
      "sameAs": "https://en.wikipedia.org/wiki/North_Bergen,_New_Jersey"
    },
    {
      "@type": "City",
      "name": "Jersey City",
      "sameAs": "https://en.wikipedia.org/wiki/Jersey_City,_New_Jersey"
    },
    {
      "@type": "City",
      "name": "Hoboken",
      "sameAs": "https://en.wikipedia.org/wiki/Hoboken,_New_Jersey"
    }
  ],
  "description": "Professional key fob programming service for all vehicle makes and models. Our certified automotive locksmiths provide efficient, reliable programming at competitive rates.",
  "offers": {
    "@type": "Offer",
    "price": "99.00",
    "priceCurrency": "USD"
  }
};

// Key Fob Programming FAQ Schema
export const keyFobProgrammingFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": keyFobProgrammingFaqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

// Related automotive services
export const keyFobProgrammingRelatedServices = [
  {
    title: "Car Key Replacement",
    path: "/services/auto-locksmith/car-key-replacement",
    description: "Complete replacement solutions for lost or damaged car keys"
  },
  {
    title: "Car Key Duplicate",
    path: "/services/auto-locksmith/car-key-duplicate",
    description: "Create spare keys for your vehicle for convenience and emergencies"
  },
  {
    title: "Car Key Cutting",
    path: "/services/auto-locksmith/car-key-cutting",
    description: "Precision cutting for all types of automotive keys"
  },
  {
    title: "Car Lockout Service",
    path: "/services/emergency-locksmith/car-lockout",
    description: "Emergency assistance when locked out of your vehicle"
  }
];
