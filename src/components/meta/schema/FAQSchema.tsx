
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
  
  // Return in the correct nested format to match expected schema structure
  return {
    type: 'FAQPage',
    data: {
      type: 'FAQPage',
      data: faqData
    }
  };
};
