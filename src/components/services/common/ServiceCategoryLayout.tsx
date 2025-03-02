import React from 'react';
import ReviewsSection from '@/components/sections/ReviewsSection';
import FAQAccordion from '@/components/sections/FAQAccordion';
import { ServiceCategory } from '@/types/reviews';

interface ServiceCategoryLayoutProps {
  serviceType: 'car' | 'residential' | 'commercial' | 'emergency' | 'auto';
  faqs: { question: string; answer: string }[];
}

const ServiceCategoryLayout: React.FC<ServiceCategoryLayoutProps> = ({
  serviceType,
  faqs
}) => {
  // Map serviceType to appropriate category for reviews
  const getReviewCategory = (): ServiceCategory => {
    if (serviceType === 'residential') return 'residential';
    if (serviceType === 'commercial') return 'commercial';
    if (serviceType === 'emergency') return 'emergency';
    if (serviceType === 'auto') return 'car'; // Change 'auto' to 'car' to match ServiceCategory type
    return 'car'; // Default to 'car' if no match
  };

  return (
    <>
      <ReviewsSection category={getReviewCategory()} />
      {faqs && faqs.length > 0 && (
        <FAQAccordion faqs={faqs} />
      )}
    </>
  );
};

export default ServiceCategoryLayout;
