
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
    question: "How quickly can you arrive?",
    answer: "We typically arrive within 30 minutes for emergency calls in our service area."
  },
  {
    question: "What forms of payment do you accept?",
    answer: "We accept all major credit cards, cash, and digital payments for your convenience."
  },
  {
    question: "Do you provide free estimates?",
    answer: "Yes, we provide free estimates for all our services. Contact us to get a quote."
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
    answer: "Call us immediately - we provide 24/7 emergency lockout services with fast response times."
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
    question: "What's your emergency response time?",
    answer: "We typically arrive within 20-30 minutes for emergencies in our service area."
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

// Show first 5 general FAQs initially
export const initialFaqs = generalFaqs.slice(0, 5);

// Combine all remaining FAQs for infinite loading
export const additionalFaqs = [
  ...generalFaqs.slice(5),
  ...residentialFaqs,
  ...automotiveFaqs,
  ...commercialFaqs,
  ...emergencyFaqs
];
