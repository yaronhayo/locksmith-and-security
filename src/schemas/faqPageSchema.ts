
export const createFAQPageSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  type: 'FAQPage',
  data: {
    type: 'FAQPage',
    data: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  }
});
