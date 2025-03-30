
interface Question {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  questions: Question[];
}

export const createFAQSchema = ({ questions }: FAQSchemaProps) => {
  const faqData = {
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
  };
  
  // Return the schema in the format expected by our components
  return {
    type: 'FAQPage',
    data: faqData
  };
};
