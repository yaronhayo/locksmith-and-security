
import React from 'react';
import ServiceLayout from '@/components/services/common/ServiceLayout';
import { CarKeyDuplicateContent } from '@/components/services/car-key-duplicate/CarKeyDuplicateContent';
import { carKeyDuplicateFaqs, carKeyDuplicateServiceSchema, carKeyDuplicateFaqSchema } from '@/components/services/car-key-duplicate/CarKeyDuplicateSchema';
import { relatedAutomotiveServices } from '@/components/services/car-key-duplicate/relatedServices';
import { carServiceReviews } from '@/data/reviews/carServiceReviews';

const CarKeyDuplicate = () => {
  return (
    <ServiceLayout
      title="Professional Car Key Duplication | 24/7 Automotive Locksmith Services"
      description="Expert car key duplication for all vehicle makes and models. Get reliable spare keys at competitive prices. Serving North Bergen, Jersey City, Hoboken & all NJ areas."
      keywords="car key duplication, duplicate car key, spare car key, copy car key, automotive locksmith, car key copy, transponder key duplication"
      serviceName="Car Key Duplication"
      serviceCategory="Auto Locksmith Service"
      mainContent={<CarKeyDuplicateContent />}
      faqs={carKeyDuplicateFaqs}
      relatedServices={relatedAutomotiveServices}
      reviewsData={carServiceReviews.slice(0, 8)}
      schemas={[
        { type: 'service', data: carKeyDuplicateServiceSchema },
        { type: 'faq', data: carKeyDuplicateFaqSchema }
      ]}
      canonicalUrl="/services/auto-locksmith/car-key-duplicate"
      customBreadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Auto Locksmith", path: "/services/auto-locksmith" },
        { name: "Car Key Duplication", path: "/services/auto-locksmith/car-key-duplicate" }
      ]}
    />
  );
};

export default CarKeyDuplicate;
