
import React from 'react';
import ServiceLayout from '@/components/services/common/ServiceLayout';
import { residentialReviews } from '@/data/reviews';
import { LockRekeyContent } from '@/components/services/lock-rekey/LockRekeyContent';
import { lockRekeyFaqs, lockRekeyServiceSchema, lockRekeyFaqSchema } from '@/components/services/lock-rekey/LockRekeySchema';
import { relatedResidentialServices } from '@/components/services/lock-rekey/relatedServices';

const LockRekey = () => {
  return (
    <ServiceLayout
      title="Professional Lock Rekey Service | Expert Residential Locksmiths"
      description="Expert lock rekeying service by certified locksmiths. Change your keys without replacing locks. Serving North Bergen, Jersey City, Hoboken & all NJ areas."
      keywords="lock rekey, rekey locks, change lock pins, new keys, same lock, key alike, master key, residential locksmith, home security"
      serviceName="Lock Rekey"
      serviceCategory="Residential Locksmith"
      mainContent={<LockRekeyContent />}
      faqs={lockRekeyFaqs}
      relatedServices={relatedResidentialServices}
      reviewsData={residentialReviews.slice(0, 8)}
      schemas={[
        { type: 'service', data: lockRekeyServiceSchema },
        { type: 'faq', data: lockRekeyFaqSchema }
      ]}
      canonicalUrl="/services/residential-locksmith/lock-rekey"
      customBreadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Residential Locksmith", path: "/services/residential-locksmith" },
        { name: "Lock Rekey", path: "/services/residential-locksmith/lock-rekey" }
      ]}
    />
  );
};

export default LockRekey;
