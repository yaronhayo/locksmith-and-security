
import React from 'react';
import ServiceLayout from '@/components/services/common/ServiceLayout';
import { CarLockoutContent } from '@/components/services/car-lockout/CarLockoutContent';
import { carLockoutSchema, carLockoutFaqs, carLockoutFaqSchema } from '@/components/services/car-lockout/CarLockoutSchema';
import { relatedEmergencyServices } from '@/components/services/car-lockout/relatedServices';
import { carServiceReviews } from '@/data/reviews/carServiceReviews';

const CarLockout = () => {
  return (
    <ServiceLayout
      title="Professional Car Lockout Service | 24/7 Emergency Automotive Locksmith"
      description="Expert car lockout service by certified automotive locksmiths. Fast, damage-free vehicle entry 24/7. Serving North Bergen, Jersey City, Hoboken & all NJ areas."
      keywords="car lockout, locked out of car, auto locksmith, emergency car lockout, vehicle lockout service, car door unlock, car key locked in car, automotive locksmith"
      serviceName="Car Lockout"
      serviceCategory="Emergency Auto Locksmith"
      mainContent={<CarLockoutContent />}
      faqs={carLockoutFaqs}
      relatedServices={relatedEmergencyServices}
      reviewsData={carServiceReviews.slice(0, 8)}
      schemas={[
        { type: 'service', data: carLockoutSchema },
        { type: 'faq', data: carLockoutFaqSchema }
      ]}
      canonicalUrl="/services/emergency-locksmith/car-lockout"
      customBreadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Emergency Locksmith", path: "/services/emergency-locksmith" },
        { name: "Car Lockout", path: "/services/emergency-locksmith/car-lockout" }
      ]}
    />
  );
};

export default CarLockout;
