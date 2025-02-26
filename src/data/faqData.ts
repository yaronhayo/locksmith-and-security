import { Clock, Shield, Phone, Car, Home, Building } from 'lucide-react';

export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

export const generalFaqs: FAQ[] = [
  {
    question: "What areas do you serve?",
    answer: "We serve North Bergen and surrounding areas including Jersey City, Union City, West New York, Secaucus, Weehawken, Hoboken, and Guttenberg."
  },
  {
    question: "Are you available 24/7?",
    answer: "Yes, we provide 24/7 emergency locksmith services for all your residential, commercial, and automotive needs."
  },
  {
    question: "Can you help right now?",
    answer: "Yes, we provide prompt emergency service throughout our service area."
  },
  {
    question: "What forms of payment do you accept?",
    answer: "We accept all major credit cards, cash, and digital payments for your convenience."
  },
  {
    question: "Do you provide free estimates?",
    answer: "Yes, we provide free estimates for all our services. Contact us to get a quote."
  },
  {
    question: "How quickly can you arrive in an emergency?",
    answer: "In most cases, we can arrive within 20-30 minutes of your call in our service area."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, we are fully licensed, bonded, and insured for your peace of mind."
  },
  {
    question: "Do you offer warranties on your work?",
    answer: "Yes, we provide warranties on all our workmanship and installed products."
  },
  {
    question: "Can you make high-security keys?",
    answer: "Yes, we can duplicate and create high-security keys for most major brands."
  },
  {
    question: "Do you work with smart home security systems?",
    answer: "Yes, we install and service various smart home security systems and smart locks."
  },
  {
    question: "What should I do if my key breaks in the lock?",
    answer: "Don't try to remove it yourself as this could damage the lock. Call us immediately, and we'll safely extract the key and repair any damage."
  },
  {
    question: "Do you provide written estimates?",
    answer: "Yes, we provide detailed written estimates before beginning any work."
  }
];

export const residentialFaqs: FAQ[] = [
  {
    question: "Can you rekey my house locks?",
    answer: "Yes, we provide professional rekeying services for all types of residential locks."
  },
  {
    question: "Do you install smart locks?",
    answer: "Yes, we install and program various brands of smart locks including Yale, Schlage, and August."
  },
  {
    question: "What should I do if I'm locked out late at night?",
    answer: "Call us immediately - we provide 24/7 emergency lockout services with reliable service."
  }
];

export const automotiveFaqs: FAQ[] = [
  {
    question: "Can you make new car keys?",
    answer: "Yes, we can create new keys for most vehicle makes and models."
  },
  {
    question: "Do you program car key fobs?",
    answer: "Yes, we program key fobs and transponder keys for most vehicle brands."
  },
  {
    question: "Can you unlock my car without damaging it?",
    answer: "Yes, we use professional tools and techniques to safely unlock vehicles without damage."
  }
];

export const commercialFaqs: FAQ[] = [
  {
    question: "Do you install commercial grade locks?",
    answer: "Yes, we install and service high-security commercial grade locks."
  },
  {
    question: "Can you set up a master key system?",
    answer: "Yes, we design and implement master key systems for businesses of any size."
  },
  {
    question: "Do you offer maintenance contracts?",
    answer: "Yes, we provide ongoing maintenance contracts for commercial clients."
  }
];

export const emergencyFaqs: FAQ[] = [
  {
    question: "Do you offer 24/7 emergency service?",
    answer: "Yes, we provide emergency services throughout our entire service area."
  },
  {
    question: "Do you charge extra for night calls?",
    answer: "No, we maintain the same fair rates 24/7 without overtime charges."
  },
  {
    question: "Are you available on holidays?",
    answer: "Yes, we provide emergency services 365 days a year, including holidays."
  }
];

// Show first 12 general FAQs initially (increased from 5)
export const initialFaqs = generalFaqs.slice(0, 12);

// Combine all remaining FAQs for infinite loading
export const additionalFaqs = [
  ...generalFaqs.slice(12),
  ...residentialFaqs,
  ...automotiveFaqs,
  ...commercialFaqs,
  ...emergencyFaqs
];
