
import { useState, useRef } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ChevronRight, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { initialFaqs } from "@/data/faqData";
import { FAQ } from "@/data/faqData";

interface FAQSectionProps {
  title?: string;
  description?: string;
  faqs?: FAQ[];
}

const FAQSection = ({ title = "Frequently Asked Questions", description = "Find answers to common questions about our services.", faqs = initialFaqs }: FAQSectionProps) => {
  // Only take the first 12 FAQs from the provided FAQs or initialFAQs
  const displayedFaqs = faqs.slice(0, 12);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  
  // Create a unique ID for this accordion group
  const accordionId = React.useId();

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white rounded-xl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <HelpCircle className="w-12 h-12 mx-auto mb-4 text-primary animate-bounce" />
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        
        <ScrollArea 
          className="h-[600px] max-w-6xl mx-auto rounded-lg border border-gray-200 p-4"
          ref={scrollAreaRef}
        >
          <div className="grid md:grid-cols-2 gap-6">
            {displayedFaqs.map((faq, index) => {
              // Generate a unique value for each accordion item
              const uniqueValue = `${accordionId}-home-faq-${index}-${faq.question.substring(0, 10).replace(/\s+/g, '-')}`;
              
              return (
                <Accordion 
                  key={`home-faq-${index}`} 
                  type="single" 
                  collapsible 
                  className="bg-white rounded-lg shadow-sm"
                >
                  <AccordionItem 
                    value={uniqueValue}
                    className="border-none"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-start text-left gap-3">
                        <span className="font-bold text-primary text-lg">Q:</span>
                        <span className="text-lg font-semibold">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="flex gap-3">
                        <span className="font-bold text-secondary text-lg">A:</span>
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              );
            })}
          </div>
        </ScrollArea>
        
        <div className="flex justify-center mt-8">
          <Button asChild variant="outline" size="lg" className="group">
            <Link to="/faq">
              Read More FAQ's
              <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
