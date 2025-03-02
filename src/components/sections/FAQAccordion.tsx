
import React, { memo } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SchemaScripts } from '@/components/meta/SchemaScripts';
import { createFAQSchema } from '@/components/meta/schema/FAQSchema';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
  includeSchema?: boolean;
  structuredData?: any;
}

const FAQAccordion = memo(({ 
  faqs, 
  includeSchema = true,
  structuredData
}: FAQAccordionProps) => {
  // Create FAQ schema if not provided via structuredData
  const faqSchema = structuredData || createFAQSchema({ questions: faqs });
  
  return (
    <>
      {includeSchema && faqSchema && (
        <SchemaScripts schemas={[{ type: 'FAQPage', data: faqSchema.data || faqSchema }]} />
      )}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <Accordion key={index} type="single" collapsible className="bg-white rounded-lg border border-gray-200">
            <AccordionItem value={`faq-${index}`} className="border-none">
              <AccordionTrigger className="px-6 py-4 hover:no-underline data-[state=open]:text-primary">
                <span className="text-left font-medium">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </>
  );
});

FAQAccordion.displayName = 'FAQAccordion';

export default FAQAccordion;
