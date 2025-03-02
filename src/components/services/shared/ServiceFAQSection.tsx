
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

interface ServiceFAQSectionProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  title?: string;
  description?: string;
}

const ServiceFAQSection: React.FC<ServiceFAQSectionProps> = ({
  faqs,
  title = "Frequently Asked Questions",
  description = "Find answers to common questions about our services."
}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={item}>
                <AccordionItem value={`item-${index}`} className="border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 bg-gray-50 hover:bg-gray-100 text-left font-medium text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-white text-gray-700">
                    <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceFAQSection;
