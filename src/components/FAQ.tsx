
import React from 'react';
import { motion } from 'framer-motion';
import FAQAccordion from "@/components/sections/FAQAccordion";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs?: FAQItem[];
}

const defaultFaqs: FAQItem[] = [
  {
    question: "What services do you offer?",
    answer: "We offer a full range of locksmith services including emergency lockouts, key cutting, lock installation and repair, lock rekeying, master key systems, safe installation, and security consultations for residential, commercial, and automotive needs."
  },
  {
    question: "Are you available 24/7?",
    answer: "Yes, we provide 24/7 emergency locksmith services for residential, commercial, and automotive lockouts. Our technicians are always on call to assist you whenever you need help."
  },
  {
    question: "How quickly can you respond to an emergency?",
    answer: "Our average response time for emergencies is 15-30 minutes, depending on your location and current demand. We prioritize emergency calls and always strive to reach you as quickly as possible."
  },
  {
    question: "Are your locksmiths licensed and insured?",
    answer: "Yes, all our technicians are fully licensed, bonded, and insured. We maintain all required credentials and stay updated with the latest security technologies and techniques."
  },
  {
    question: "Do you provide upfront pricing?",
    answer: "Yes, we provide clear and transparent pricing before beginning any work. Our technicians will assess your situation and provide a detailed quote so there are no surprises when the job is complete."
  }
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const FAQ: React.FC<FAQProps> = ({ faqs = defaultFaqs }) => {
  return (
    <motion.div 
      className="space-y-4"
      variants={{ 
        visible: { 
          transition: { 
            staggerChildren: 0.1 
          } 
        } 
      }}
    >
      <FAQAccordion faqs={faqs} />
    </motion.div>
  );
};

export default FAQ;
