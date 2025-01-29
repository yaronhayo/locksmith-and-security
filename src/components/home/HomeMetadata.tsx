import React from "react";

export const getHomeMetadata = () => ({
  title: "24/7 Emergency Locksmith Services North Bergen NJ | Professional Locksmith",
  description: "Expert 24/7 locksmith services in North Bergen, NJ. Fast 15-30 minute response for residential, commercial & automotive locksmith needs. Licensed & insured professionals serving Hudson County.",
  schema: {
    "@type": "WebPage",
    "@id": "https://247locksmithandsecurity.com/",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://247locksmithandsecurity.com/#website",
      "name": "Locksmith & Security LLC",
      "description": "Professional Locksmith Services in North Bergen, NJ",
      "publisher": {
        "@type": "Organization",
        "name": "Locksmith & Security LLC",
        "logo": {
          "@type": "ImageObject",
          "url": "/lovable-uploads/950b5c4c-f0b8-4d22-beb0-66a7d7554476.png"
        }
      }
    }
  },
  keywords: "emergency locksmith, 24/7 locksmith, North Bergen locksmith, car lockout, house lockout, business lockout, lock change, lock rekey, commercial locksmith, residential locksmith, automotive locksmith",
  faqSchema: [
    {
      question: "What areas do you serve?",
      answer: "We serve North Bergen, Jersey City, Union City, West New York, Secaucus, Weehawken, Hoboken, and Guttenberg."
    },
    {
      question: "Are you available 24/7?",
      answer: "Yes, we provide 24/7 emergency locksmith services for all residential, commercial, and automotive needs."
    },
    {
      question: "How quickly can you arrive?",
      answer: "We typically arrive within 15-30 minutes for emergency calls in our service area."
    }
  ],
  breadcrumbs: [
    { name: "Home", item: "/" }
  ],
  alternateLanguages: [
    { hrefLang: "en", href: "https://247locksmithandsecurity.com" },
    { hrefLang: "es", href: "https://247locksmithandsecurity.com/es" }
  ]
});

export default getHomeMetadata;