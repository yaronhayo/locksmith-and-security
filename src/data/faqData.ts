import { generalFaqs } from './faq/general';
import { residentialFaqs } from './faq/residential';
import { automotiveFaqs } from './faq/automotive';
import { commercialFaqs } from './faq/commercial';
import { emergencyFaqs } from './faq/emergency';

export const initialFaqs = [...generalFaqs];

export const additionalFaqs = [
  ...residentialFaqs,
  ...automotiveFaqs,
  ...commercialFaqs,
  ...emergencyFaqs
];