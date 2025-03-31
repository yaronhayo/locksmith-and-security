
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
  // Check if the schema has the expected structure and data with proper type checking
  if (!faqSchema?.data || 
      !faqSchema.type || 
      faqSchema.type !== 'FAQPage' || 
      faqSchema.data["@type"] !== "FAQPage" || 
      !('mainEntity' in faqSchema.data) || 
      !Array.isArray(faqSchema.data.mainEntity) || 
      faqSchema.data.mainEntity.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white rounded-xl" id="faq" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <HelpCircle className="w-12 h-12 mx-auto mb-4 text-primary animate-bounce" aria-hidden="true" />
          <h2 className="text-3xl font-bold mb-4" id="faq-heading">
            Frequently Asked Questions About Our {locationName} Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our locksmith services in {locationName}. 
            Can't find what you're looking for? Feel free to contact us.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {faqSchema.data.mainEntity.map((faq, index) => (
              <Accordion key={index} type="single" collapsible className="bg-white rounded-lg shadow-sm" data-qa={`faq-item-${index}`}>
                <AccordionItem value={`faq-${index}`} className="border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline" aria-controls={`faq-content-${index}`}>
                    <div className="flex items-start text-left gap-3">
                      <span className="font-bold text-primary text-lg" aria-hidden="true">Q:</span>
                      <span className="text-lg font-semibold">{faq.name}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4" id={`faq-content-${index}`}>
                    <div className="flex gap-3">
                      <span className="font-bold text-secondary text-lg" aria-hidden="true">A:</span>
                      <p className="text-gray-600 leading-relaxed">
                        {faq.acceptedAnswer.text}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaFAQ;
