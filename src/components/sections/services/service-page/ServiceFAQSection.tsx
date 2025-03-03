
import React from 'react';
import FAQAccordion from "@/components/sections/FAQAccordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQSectionProps {
  title?: string;
  faqs: FAQItem[];
}

const ServiceFAQSection: React.FC<ServiceFAQSectionProps> = ({ title = "Frequently Asked Questions", faqs }) => {
  return (
    <div className="mt-16">
      <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-6 border-l-4 border-secondary pl-4">
        {title}
      </h2>
      <p className="text-gray-600 mb-6">Find answers to common questions about our services. If you don't see your question answered below, please feel free to contact us.</p>
      <FAQAccordion faqs={faqs} />
    </div>
  );
};

export default ServiceFAQSection;
