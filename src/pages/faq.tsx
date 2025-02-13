
import PageLayout from "@/components/layouts/PageLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { generalFaqs, residentialFaqs, automotiveFaqs, commercialFaqs, emergencyFaqs } from "@/data/faqData";

const FAQPage = () => {
  const allFaqs = [
    ...generalFaqs,
    ...residentialFaqs,
    ...automotiveFaqs,
    ...commercialFaqs,
    ...emergencyFaqs
  ];

  return (
    <PageLayout
      title="Frequently Asked Questions"
      description="Find answers to common questions about our locksmith services"
      heroTitle="Common Questions"
      heroDescription="Everything you need to know about our locksmith services"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="mb-12">
            {allFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
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
    </PageLayout>
  );
};

export default FAQPage;
