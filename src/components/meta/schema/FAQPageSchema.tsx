
import { createFAQSchema } from "./FAQSchema";

export type FAQItem = {
  question: string;
  answer: string;
};

interface FAQPageSchemaProps {
  mainEntity: FAQItem[];
  additionalType?: string;
}

export const createFAQPageSchema = ({ mainEntity, additionalType }: FAQPageSchemaProps) => {
  const faqSchema = createFAQSchema({ questions: mainEntity });
  
  if (additionalType) {
    return {
      ...faqSchema,
      data: {
        ...faqSchema.data,
        "@type": ["FAQPage", additionalType],
      }
    };
  }
  
  return faqSchema;
};
