
import React from 'react';
import ServiceLayout from '@/components/services/common/ServiceLayout';
import StorageUnitLockoutContent from '@/components/services/storage-unit-lockout/StorageUnitLockoutContent';
import { storageUnitLockoutFaqs, storageUnitServiceSchema, storageUnitLockoutFaqSchema } from '@/components/services/storage-unit-lockout/StorageUnitLockoutSchema';
import { relatedEmergencyServices } from '@/components/services/storage-unit-lockout/relatedServices';
import { residentialReviews } from '@/data/reviews';

const StorageUnitLockout = () => {
  return (
    <ServiceLayout
      title="Professional Storage Unit Lockout Service | 24/7 Emergency Locksmith"
      description="Expert storage unit lockout service by certified locksmiths. Fast, reliable, and damage-free entry 24/7. Serving North Bergen, Jersey City, Hoboken & all NJ areas."
      keywords="storage unit lockout, locked out of storage unit, storage unit lock opening, emergency locksmith, storage unit lock replacement, storage unit key"
      serviceName="Storage Unit Lockout"
      serviceCategory="Emergency Locksmith"
      mainContent={<StorageUnitLockoutContent />}
      faqs={storageUnitLockoutFaqs}
      relatedServices={relatedEmergencyServices}
      reviewsData={residentialReviews.slice(0, 8)}
      schemas={[
        { type: 'service', data: storageUnitServiceSchema },
        { type: 'faq', data: storageUnitLockoutFaqSchema }
      ]}
      canonicalUrl="/services/emergency-locksmith/storage-unit-lockout"
      customBreadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Emergency Locksmith", path: "/services/emergency-locksmith" },
        { name: "Storage Unit Lockout", path: "/services/emergency-locksmith/storage-unit-lockout" }
      ]}
    />
  );
};

export default StorageUnitLockout;
