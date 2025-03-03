
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
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <Accordion key={index} type="single" collapsible className="w-full">
          <AccordionItem value={`item-${index}`} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <AccordionTrigger className="text-left font-medium text-gray-900 hover:text-secondary transition-colors p-4 bg-gray-50">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 p-4 bg-white border-t border-gray-100">
              <div dangerouslySetInnerHTML={{ __html: faq.answer.replace(
                /\*\*(.*?)\*\*/g, 
                '<strong class="text-primary">$1</strong>'
              ).replace(
                /\*(.*?)\*/g, 
                '<em class="text-secondary font-medium">$1</em>'
              ) }} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};

export default FAQAccordion;
