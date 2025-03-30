
interface Question {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  questions: Question[];
}

export const createFAQSchema = ({ questions }: FAQSchemaProps) => {
  return {
    type: 'FAQPage',
    data: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": questions.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  };
};
