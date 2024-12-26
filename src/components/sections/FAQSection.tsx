import PageLayout from "@/components/layouts/PageLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { generalFaqs } from "@/data/faq/general";
import { residentialFaqs } from "@/data/faq/residential";
import { automotiveFaqs } from "@/data/faq/automotive";
import { commercialFaqs } from "@/data/faq/commercial";
import { emergencyFaqs } from "@/data/faq/emergency";

const FAQSection = () => {
  const allFaqs = [
    ...generalFaqs,
    ...residentialFaqs,
    ...automotiveFaqs,
    ...commercialFaqs,
    ...emergencyFaqs
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our locksmith services
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="mb-12">
            {allFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 mb-6">
              Our team is here to help. Contact us anytime for immediate assistance.
            </p>
            <Button size="lg" asChild>
              <a href="tel:5513037874">
                <Phone className="mr-2 h-5 w-5" />
                Call (551) 303-7874
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
