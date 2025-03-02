
import React from 'react';
import ServiceLayout from '@/components/services/common/ServiceLayout';
import { accessControlSchema, accessControlFAQSchema, accessControlFaqs } from '@/components/services/access-control/AccessControlSchema';
import AccessControlContent from '@/components/services/access-control/AccessControlContent';
import { commercialReviews } from '@/data/reviews/commercialReviews';
import { relatedCommercialServices } from '@/components/services/access-control/relatedServices';

const AccessControl = () => {
  return (
    <ServiceLayout
      title="Access Control Systems | Commercial Security Solutions"
      description="Professional access control system design, installation and maintenance for enhanced business security by certified technicians."
      keywords="access control, door access control, card readers, biometric access, electronic locks, keyless entry, commercial security"
      serviceName="Access Control"
      serviceCategory="Commercial Security"
      mainContent={<AccessControlContent />}
      faqs={accessControlFaqs}
      relatedServices={relatedCommercialServices}
      reviewsData={commercialReviews.slice(0, 8)}
      schemas={[
        { type: 'service', data: accessControlSchema },
        { type: 'faq', data: accessControlFAQSchema }
      ]}
      canonicalUrl="/services/commercial-locksmith/access-control"
      customBreadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Commercial Locksmith", path: "/services/commercial-locksmith" },
        { name: "Access Control", path: "/services/commercial-locksmith/access-control" }
      ]}
    />
  );
};

export default AccessControl;
