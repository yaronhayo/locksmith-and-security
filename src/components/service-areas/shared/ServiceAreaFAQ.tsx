
import React from "react";
import { FAQSchema } from "@/types/schema";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ServiceAreaFAQProps {
  locationName: string;
  faqSchema: FAQSchema;
}

const ServiceAreaFAQ = ({ locationName, faqSchema }: ServiceAreaFAQProps) => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white rounded-xl" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <HelpCircle className="w-12 h-12 mx-auto mb-4 text-primary animate-bounce" />
          <h2 className="text-3xl font-bold mb-4">
            Frequently Asked Questions About Our {locationName} Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our locksmith services in {locationName}. 
            Can't find what you're looking for? Feel free to contact us.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {faqSchema.data.mainEntity.map((faq: any, index: number) => {
              // Create a unique ID for each FAQ item using random string to ensure uniqueness
              const uniqueId = `area-faq-${index}-${Math.random().toString(36).substring(2, 9)}`;
              
              return (
                <Accordion
                  key={`service-area-faq-${index}`}
                  type="single"
                  collapsible
                  className="bg-white rounded-lg shadow-sm"
                >
                  <AccordionItem value={uniqueId} className="border-none">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-start text-left gap-3">
                        <span className="font-bold text-primary text-lg">Q:</span>
                        <span className="text-lg font-semibold">{faq.name}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="flex gap-3">
                        <span className="font-bold text-secondary text-lg">A:</span>
                        <p className="text-gray-600 leading-relaxed">
                          {faq.acceptedAnswer.text}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaFAQ;
