
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ } from "@/data/faqData";

interface FAQAccordionProps {
  faq: FAQ;
  index: number;
}

const FAQAccordion = ({ faq, index }: FAQAccordionProps) => {
  // Create a unique value for each accordion item that is truly unique
  const itemId = `faq-item-${index}-${Math.random().toString(36).substring(2, 9)}`;

  return (
    <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
      <AccordionItem value={itemId} className="border-none">
        <AccordionTrigger className="px-6 py-4 hover:no-underline">
          <div className="flex items-start text-left gap-3">
            <span className="font-bold text-primary text-lg">Q:</span>
            <span className="text-lg font-semibold">{faq.question}</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-6 pb-4">
          <div className="flex gap-3">
            <span className="font-bold text-secondary text-lg">A:</span>
            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FAQAccordion;
