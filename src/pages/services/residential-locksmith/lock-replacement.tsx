
import React from 'react';
import ServiceLayout from '@/components/services/common/ServiceLayout';
import { residentialReviews } from '@/data/reviews';
import { LockReplacementContent } from '@/components/services/lock-replacement/LockReplacementContent';
import { lockReplacementFaqs, lockReplacementServiceSchema, lockReplacementFaqSchema } from '@/components/services/lock-replacement/LockReplacementSchema';
import { relatedResidentialServices } from '@/components/services/lock-replacement/relatedServices';

const LockReplacement = () => {
  return (
    <ServiceLayout
      title="Professional Residential Lock Replacement Service | Expert Locksmiths"
      description="Expert lock replacement service by certified residential locksmiths. Upgrade your home security with professional installation of high-quality locks."
      keywords="lock replacement, change locks, new locks, deadbolt installation, smart lock installation, home security upgrade, residential locksmith"
      serviceName="Lock Replacement"
      serviceCategory="Residential Locksmith"
      mainContent={<LockReplacementContent />}
      faqs={lockReplacementFaqs}
      relatedServices={relatedResidentialServices}
      reviewsData={residentialReviews.slice(0, 8)}
      schemas={[
        { type: 'service', data: lockReplacementServiceSchema },
        { type: 'faq', data: lockReplacementFaqSchema }
      ]}
      canonicalUrl="/services/residential-locksmith/lock-replacement"
      customBreadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Residential Locksmith", path: "/services/residential-locksmith" },
        { name: "Lock Replacement", path: "/services/residential-locksmith/lock-replacement" }
      ]}
    />
  );
};

export default LockReplacement;
