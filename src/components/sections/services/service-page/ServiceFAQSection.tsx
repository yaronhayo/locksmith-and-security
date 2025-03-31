
import React from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQSectionProps {
  faqs: FAQItem[];
}

const ServiceFAQSection: React.FC<ServiceFAQSectionProps> = ({ faqs }) => {
  if (!faqs || faqs.length === 0) {
    return null;
  }
  
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="service-faq-item">
            <h3 className="service-faq-question">{faq.question}</h3>
            <div className="text-gray-700">{faq.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceFAQSection;
