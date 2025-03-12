
import React from 'react';
import FAQAccordion from "@/components/sections/FAQAccordion";
import { motion } from 'framer-motion';

export interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQSectionProps {
  faqs?: FAQItem[];
  title?: string;
  description?: string;
}

const ServiceFAQSection: React.FC<ServiceFAQSectionProps> = ({ 
  faqs = [], 
  title = "Frequently Asked Questions",
  description = "Find answers to common questions about our services. If you don't see your question answered below, please feel free to contact us."
}) => {
  return (
    <motion.div 
      className="mt-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-6 border-l-4 border-secondary pl-4">
        {title}
      </h2>
      <p className="text-gray-600 mb-6">{description}</p>
      <FAQAccordion faqs={faqs} />
    </motion.div>
  );
};

export default ServiceFAQSection;
