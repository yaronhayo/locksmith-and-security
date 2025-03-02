
import React from 'react';
import ServiceLayout from '@/components/services/common/ServiceLayout';
import BusinessLockoutContent from '@/components/services/business-lockout/BusinessLockoutContent';
import { businessLockoutFaqs, businessServiceSchema, businessLockoutFaqSchema } from '@/components/services/business-lockout/BusinessLockoutSchema';
import { relatedEmergencyServices } from '@/components/services/business-lockout/relatedServices';
import { commercialReviews } from '@/data/reviews';

const BusinessLockout = () => {
  return (
    <ServiceLayout
      title="Professional Business Lockout Service | 24/7 Emergency Commercial Locksmith"
      description="Expert business lockout service by certified commercial locksmiths. Fast, damage-free entry 24/7. Serving North Bergen, Jersey City, Hoboken & all NJ areas."
      keywords="business lockout, locked out of business, commercial locksmith, emergency business lockout, commercial lockout service, business door unlock, business key locked in business, commercial locksmith"
      serviceName="Business Lockout"
      serviceCategory="Emergency Commercial Locksmith"
      mainContent={<BusinessLockoutContent />}
      faqs={businessLockoutFaqs}
      relatedServices={relatedEmergencyServices}
      reviewsData={commercialReviews.slice(0, 8)}
      schemas={[
        { type: 'service', data: businessServiceSchema },
        { type: 'faq', data: businessLockoutFaqSchema }
      ]}
      canonicalUrl="/services/emergency-locksmith/business-lockout"
      customBreadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Emergency Locksmith", path: "/services/emergency-locksmith" },
        { name: "Business Lockout", path: "/services/emergency-locksmith/business-lockout" }
      ]}
    />
  );
};

export default BusinessLockout;
