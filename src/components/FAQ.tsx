
import React from 'react';
import { motion } from 'framer-motion';
import FAQAccordion from '@/components/sections/FAQAccordion';
import { generalFaqs } from '@/data/faqData';

const FAQ = () => {
  return (
    <motion.div
      className="space-y-6"
      variants={{
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      <FAQAccordion faqs={generalFaqs} />
    </motion.div>
  );
};

export default FAQ;
