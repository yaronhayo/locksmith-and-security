
import React from 'react';
import ServiceLayout from '@/components/services/common/ServiceLayout';
import KeyFobProgrammingContent from '@/components/services/key-fob-programming/KeyFobProgrammingContent';
import { keyFobProgrammingServiceSchema, keyFobProgrammingFaqSchema, keyFobProgrammingFaqs } from '@/components/services/key-fob-programming/KeyFobProgrammingSchema';
import { carServiceReviews } from '@/data/reviews/carServiceReviews';
import { relatedAutomotiveServices } from '@/components/services/key-fob-programming/relatedServices';

const KeyFobProgramming = () => {
  return (
    <ServiceLayout
      title="Key Fob Programming Service | Auto Locksmith Services"
      description="Professional key fob programming by certified technicians. Expert service for all vehicle makes and models with same-day service and fair pricing."
      keywords="key fob programming, remote key programming, car key fob, car remote, automotive locksmith, car key programmer"
      serviceName="Key Fob Programming"
      serviceCategory="Auto Locksmith"
      mainContent={<KeyFobProgrammingContent />}
      faqs={keyFobProgrammingFaqs}
      relatedServices={relatedAutomotiveServices}
      reviewsData={carServiceReviews.slice(0, 8)}
      schemas={[
        { type: 'service', data: keyFobProgrammingServiceSchema },
        { type: 'faq', data: keyFobProgrammingFaqSchema }
      ]}
      canonicalUrl="/services/auto-locksmith/key-fob-programming"
      customBreadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Auto Locksmith", path: "/services/auto-locksmith" },
        { name: "Key Fob Programming", path: "/services/auto-locksmith/key-fob-programming" }
      ]}
    />
  );
};

export default KeyFobProgramming;
