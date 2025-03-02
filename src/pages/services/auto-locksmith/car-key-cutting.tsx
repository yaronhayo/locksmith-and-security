
import React from 'react';
import ServiceLayout from '@/components/services/common/ServiceLayout';
import { CarKeyContent } from '@/components/services/car-key-cutting/CarKeyContent';
import { carKeyFaqs, carKeyServiceSchema, carKeyFaqSchema } from '@/components/services/car-key-cutting/CarKeySchema';
import { relatedAutomotiveServices } from '@/components/services/car-key-cutting/relatedServices';
import { carServiceReviews } from '@/data/reviews/carServiceReviews';

const CarKeyCutting = () => {
  return (
    <ServiceLayout
      title="Professional Car Key Cutting Service | Auto Locksmith Services"
      description="Expert car key cutting services for all vehicle makes and models. Precision key cutting using advanced equipment with fast service and competitive prices."
      keywords="car key cutting, auto locksmith, car key duplication, car key copy, vehicle key cutting, auto keys"
      serviceName="Car Key Cutting"
      serviceCategory="Auto Locksmith"
      mainContent={<CarKeyContent />}
      faqs={carKeyFaqs}
      relatedServices={relatedAutomotiveServices}
      reviewsData={carServiceReviews.slice(0, 8)}
      schemas={[
        { type: 'service', data: carKeyServiceSchema },
        { type: 'faq', data: carKeyFaqSchema }
      ]}
      canonicalUrl="/services/auto-locksmith/car-key-cutting"
      customBreadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Auto Locksmith", path: "/services/auto-locksmith" },
        { name: "Car Key Cutting", path: "/services/auto-locksmith/car-key-cutting" }
      ]}
    />
  );
};

export default CarKeyCutting;
