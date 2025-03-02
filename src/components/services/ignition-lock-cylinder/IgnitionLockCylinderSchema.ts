
// Ignition Lock Cylinder FAQs
export const ignitionLockCylinderFaqs = [
  {
    question: "How do I know if my ignition lock cylinder needs to be replaced?",
    answer: "Common signs include: difficulty inserting or turning the key, key getting stuck in the ignition, ignition that turns but doesn't start the engine, or visible damage to the ignition cylinder. If you're experiencing any of these issues, it's best to have a professional diagnose the problem."
  },
  {
    question: "How long does it take to replace an ignition lock cylinder?",
    answer: "Most ignition lock cylinder replacements can be completed in 1-2 hours, depending on your vehicle make and model. Some luxury or complex vehicles may require additional time."
  },
  {
    question: "Will I need new keys after an ignition cylinder replacement?",
    answer: "In most cases, we can match your new ignition cylinder to work with your existing keys. However, if your original cylinder is severely damaged or the key is worn, a new key may be necessary. We'll discuss all options with you before beginning work."
  },
  {
    question: "Can you repair a damaged ignition cylinder instead of replacing it?",
    answer: "In some cases, minor ignition cylinder issues can be repaired rather than replaced. Our technicians will assess the condition of your ignition and recommend the most cost-effective solution. However, for security and reliability, replacement is often the better long-term solution."
  },
  {
    question: "My car won't start but the battery is good. Could it be the ignition cylinder?",
    answer: "Yes, a faulty ignition lock cylinder can prevent your vehicle from starting even with a good battery. The ignition cylinder is responsible for sending the electrical signal to start your engine. If it's damaged or worn out, it may not properly activate the starter or ignition system."
  },
  {
    question: "Do you provide mobile ignition lock cylinder replacement?",
    answer: "Yes, we provide mobile ignition lock cylinder replacement services. Our certified technicians come to your location equipped with all the necessary tools and parts to replace your ignition cylinder on-site."
  }
];

// Ignition Lock Cylinder Service Schema
export const ignitionLockCylinderServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Ignition Lock Cylinder Replacement",
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
  "description": "Professional ignition lock cylinder replacement and repair service for all vehicle makes and models. Our certified automotive locksmiths provide efficient, reliable service at competitive rates.",
  "offers": {
    "@type": "Offer",
    "price": "149.00",
    "priceCurrency": "USD"
  }
};

// Ignition Lock Cylinder FAQ Schema
export const ignitionLockCylinderFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": ignitionLockCylinderFaqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};
