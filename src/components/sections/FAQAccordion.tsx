
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
  // Create a unique ID for this accordion group
  const accordionId = React.useId();
  
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => {
        // Generate a unique value for each accordion item
        const uniqueValue = `${accordionId}-faq-${index}-${faq.question.substring(0, 10).replace(/\s+/g, '-')}`;
        
        return (
          <AccordionItem 
            key={`faq-accordion-item-${index}`} 
            value={uniqueValue} 
            className="border-l-0 border-r-0 border-b border-t-0 py-2 first:border-t"
          >
            <AccordionTrigger className="text-left font-medium text-gray-900 hover:text-secondary transition-colors py-4">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 border-l-2 border-secondary/50 pl-4">
              <div dangerouslySetInnerHTML={{ __html: faq.answer.replace(
                /\*\*(.*?)\*\*/g, 
                '<strong class="text-primary">$1</strong>'
              ).replace(
                /\*(.*?)\*/g, 
                '<em class="text-secondary font-medium">$1</em>'
              ) }} />
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default FAQAccordion;
