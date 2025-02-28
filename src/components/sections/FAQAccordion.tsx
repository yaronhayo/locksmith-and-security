
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs }) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="border-l-0 border-r-0 border-b border-t-0 py-2 first:border-t">
          <AccordionTrigger className="text-left font-medium text-gray-900 hover:text-secondary transition-colors py-4">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-gray-700 border-l-2 border-secondary/20 pl-4">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQAccordion;
