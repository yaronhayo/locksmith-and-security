
import React from 'react';
import ServiceLayout from '@/components/services/common/ServiceLayout';
import { HouseLockoutContent } from '@/components/services/house-lockout/HouseLockoutContent';
import { houseLockoutFaqs, houseServiceSchema, houseLockoutFaqSchema } from '@/components/services/house-lockout/HouseLockoutSchema';
import { relatedEmergencyServices } from '@/components/services/house-lockout/relatedServices';
import { residentialReviews } from '@/data/reviews';

const HouseLockout = () => {
  return (
    <ServiceLayout
      title="Professional Residential Lockout Service | 24/7 Emergency Home Locksmith"
      description="Expert house lockout service by certified residential locksmiths. Fast, damage-free home entry 24/7. Serving North Bergen, Jersey City, Hoboken & all NJ areas."
      keywords="house lockout, residential lockout, home locksmith, emergency house lockout, locked out of house, home door unlock, residential locksmith, home security"
      serviceName="House Lockout"
      serviceCategory="Emergency Residential Locksmith"
      mainContent={<HouseLockoutContent />}
      faqs={houseLockoutFaqs}
      relatedServices={relatedEmergencyServices}
      reviewsData={residentialReviews.slice(0, 8)}
      schemas={[
        { type: 'service', data: houseServiceSchema },
        { type: 'faq', data: houseLockoutFaqSchema }
      ]}
      canonicalUrl="/services/emergency-locksmith/house-lockout"
      customBreadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Emergency Locksmith", path: "/services/emergency-locksmith" },
        { name: "House Lockout", path: "/services/emergency-locksmith/house-lockout" }
      ]}
    />
  );
};

export default HouseLockout;
