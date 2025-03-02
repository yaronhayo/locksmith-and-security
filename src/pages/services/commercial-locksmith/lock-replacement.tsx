
import React from 'react';
import ServiceLayout from '@/components/services/common/ServiceLayout';
import { CommercialLockReplacementContent } from '@/components/services/commercial-lock-replacement/CommercialLockReplacementContent';
import { commercialLockReplacementFaqs, commercialLockReplacementServiceSchema, commercialLockReplacementFaqSchema } from '@/components/services/commercial-lock-replacement/CommercialLockReplacementSchema';
import { relatedCommercialServices } from '@/components/services/commercial-lock-replacement/relatedServices';
import { commercialReviews } from '@/data/reviews';

const CommercialLockReplacement = () => {
  return (
    <ServiceLayout
      title="Professional Commercial Lock Replacement | Business Security Solutions"
      description="Expert commercial lock replacement services by certified locksmiths. Upgrade your business security with professional installation of high-grade commercial locks."
      keywords="commercial lock replacement, business locks, mortise locks, commercial door hardware, high-security locks, exit devices, ADA compliant locks, panic hardware"
      serviceName="Commercial Lock Replacement"
      serviceCategory="Commercial Locksmith"
      mainContent={<CommercialLockReplacementContent />}
      faqs={commercialLockReplacementFaqs}
      relatedServices={relatedCommercialServices}
      reviewsData={commercialReviews.slice(0, 8)}
      schemas={[
        { type: 'service', data: commercialLockReplacementServiceSchema },
        { type: 'faq', data: commercialLockReplacementFaqSchema }
      ]}
      canonicalUrl="/services/commercial-locksmith/lock-replacement"
      customBreadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Commercial Locksmith", path: "/services/commercial-locksmith" },
        { name: "Lock Replacement", path: "/services/commercial-locksmith/lock-replacement" }
      ]}
    />
  );
};

export default CommercialLockReplacement;
