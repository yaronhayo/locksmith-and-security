
interface FAQSchemaProps {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export const createFAQSchema = ({ questions }: FAQSchemaProps) => ({
  type: 'FAQPage',
  data: {
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
  }
});
