import { generalFaqs } from './faq/general';
import { residentialFaqs } from './faq/residential';
import { automotiveFaqs } from './faq/automotive';
import { commercialFaqs } from './faq/commercial';
import { emergencyFaqs } from './faq/emergency';

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