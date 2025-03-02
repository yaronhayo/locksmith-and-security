
import React from 'react';
import ServiceLayout from '@/components/services/common/ServiceLayout';
import { CommercialLockRekeyContent } from '@/components/services/commercial-lock-rekey/CommercialLockRekeyContent';
import { commercialLockRekeyFaqs, commercialLockRekeyServiceSchema, commercialLockRekeyFaqSchema, commercialLockRekeyRelatedServices } from '@/components/services/commercial-lock-rekey/CommercialLockRekeySchema';
import { commercialReviews } from '@/data/reviews';

const CommercialLockRekey = () => {
  return (
    <ServiceLayout
      title="Professional Commercial Lock Rekey | Business Security Solutions"
      description="Expert commercial lock rekeying by certified locksmiths. Change your keys without replacing locks for improved business security. Serving North Bergen & all NJ areas."
      keywords="commercial lock rekey, business lock rekeying, change business keys, master key system, employee turnover security, business security"
      serviceName="Commercial Lock Rekey"
      serviceCategory="Commercial Locksmith"
      mainContent={<CommercialLockRekeyContent />}
      faqs={commercialLockRekeyFaqs}
      relatedServices={commercialLockRekeyRelatedServices}
      reviewsData={commercialReviews.slice(0, 8)}
      schemas={[
        { type: 'service', data: commercialLockRekeyServiceSchema },
        { type: 'faq', data: commercialLockRekeyFaqSchema }
      ]}
      canonicalUrl="/services/commercial-locksmith/lock-rekey"
      customBreadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Commercial Locksmith", path: "/services/commercial-locksmith" },
        { name: "Lock Rekey", path: "/services/commercial-locksmith/lock-rekey" }
      ]}
    />
  );
};

export default CommercialLockRekey;
