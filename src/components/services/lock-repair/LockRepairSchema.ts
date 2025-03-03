
import { createFAQSchema } from "@/components/meta/schema/FAQSchema";

// Lock Repair Service FAQs
export const lockRepairFaqs = [
  {
    question: "How can I tell if my lock needs repair rather than replacement?",
    answer: "Signs that indicate repair may be sufficient include: the lock is sticking but still functions, the key turns with difficulty, the latch doesn't extend or retract properly, or the lock is misaligned with the strike plate. Our technicians can assess the condition and recommend whether repair or replacement is more appropriate."
  },
  {
    question: "Can you repair antique or vintage locks?",
    answer: "Yes, our technicians are skilled in repairing antique and vintage locks. We understand the unique mechanisms of older locks and have the specialized tools needed to work on them while preserving their historical value and aesthetic appeal."
  },
  {
    question: "What causes locks to malfunction over time?",
    answer: "Locks can malfunction due to several factors including: regular wear and tear, improper installation, weather exposure, dirt and debris accumulation, attempted break-ins, or using the wrong key. Regular maintenance can help extend the life of your locks."
  },
  {
    question: "Is it possible to repair a smart lock?",
    answer: "Yes, many smart lock issues can be repaired. Problems may be mechanical, electronic, or related to connectivity. Our technicians are trained to diagnose and repair both the mechanical and electronic components of smart locks."
  }
];

// FAQ Schema
export const lockRepairFaqSchema = createFAQSchema({
  questions: lockRepairFaqs
});

// Service Schema
export const lockRepairServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Lock Repair Service",
  "serviceType": "Residential Locksmith",
  "description": "Professional lock repair services to fix jammed, stuck, or malfunctioning locks on homes and businesses. Our certified technicians diagnose and repair all types of lock issues.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "24/7 Locksmith and Security LLC",
    "telephone": "(201) 748-2070",
    "priceRange": "$$"
  },
  "areaServed": {
    "@type": "State",
    "name": "New Jersey",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "NJ"
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Lock Repair Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Residential Lock Repair"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Lock Repair"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emergency Lock Repair"
        }
      }
    ]
  }
};
