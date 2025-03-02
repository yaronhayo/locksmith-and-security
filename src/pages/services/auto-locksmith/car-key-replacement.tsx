
import React from 'react';
import ServiceLayout from '@/components/services/common/ServiceLayout';
import { CarKeyReplacementContent } from '@/components/services/car-key-replacement/CarKeyReplacementContent';
import { carKeyReplacementFaqs, carKeyReplacementServiceSchema, carKeyReplacementFaqSchema } from '@/components/services/car-key-replacement/CarKeyReplacementSchema';
import { relatedAutoServices } from '@/components/services/car-key-replacement/relatedServices';
import { carServiceReviews } from '@/data/reviews/carServiceReviews';

const CarKeyReplacement = () => {
  return (
    <ServiceLayout
      title="Professional Car Key Replacement Service | Automotive Locksmith"
      description="Expert car key replacement service by certified automotive locksmiths. We replace traditional keys, transponders, remote fobs, and smart keys for all vehicle makes and models."
      keywords="car key replacement, lost car keys, broken car key, car key fob, transponder key, smart key, replacement car keys, automotive locksmith, vehicle key"
      serviceName="Car Key Replacement"
      serviceCategory="Auto Locksmith"
      mainContent={<CarKeyReplacementContent />}
      faqs={carKeyReplacementFaqs}
      relatedServices={relatedAutoServices}
      reviewsData={carServiceReviews.slice(0, 8)}
      schemas={[
        { type: 'service', data: carKeyReplacementServiceSchema },
        { type: 'faq', data: carKeyReplacementFaqSchema }
      ]}
      canonicalUrl="/services/auto-locksmith/car-key-replacement"
      customBreadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Auto Locksmith", path: "/services/auto-locksmith" },
        { name: "Car Key Replacement", path: "/services/auto-locksmith/car-key-replacement" }
      ]}
    />
  );
};

export default CarKeyReplacement;
