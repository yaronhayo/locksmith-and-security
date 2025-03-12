
import React from 'react';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import FAQAccordion from '@/components/sections/FAQAccordion';

interface ServiceFAQSectionProps {
  faqs: Array<{ question: string; answer: string }>;
  title?: string;
  description?: string;
}

const ServiceFAQSection = ({ 
  faqs, 
  title = "Frequently Asked Questions",
  description = "Find answers to common questions about our services"
}: ServiceFAQSectionProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
          <Separator className="mt-8 max-w-md mx-auto" />
        </motion.div>
        
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <FAQAccordion faqs={faqs} />
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceFAQSection;
