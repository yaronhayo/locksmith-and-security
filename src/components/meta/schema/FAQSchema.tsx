
interface FAQSchemaProps {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export const createFAQSchema = ({ questions }: FAQSchemaProps) => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map(q => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer
      }
    }))
  };
  
  return {
    type: 'FAQPage',
    data: faqSchema
  };
};
