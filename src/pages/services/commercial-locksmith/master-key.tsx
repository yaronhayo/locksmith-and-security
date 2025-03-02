
import React from 'react';
import ServiceLayout from '@/components/services/common/ServiceLayout';
import MasterKeyContent from '@/components/services/master-key/MasterKeyContent';
import { masterKeyServiceSchema, masterKeyFaqs, masterKeyRelatedServices } from '@/components/services/master-key/MasterKeySchema';

const MasterKey = () => {
  return (
    <ServiceLayout
      title="Master Key System Design & Installation | Commercial Locksmith Services"
      description="Professional master key system design and implementation by certified technicians. Expert access control solutions for your business."
      keywords="master key system, commercial locksmith, access control, key hierarchy, restricted keyways, business security"
      serviceName="Master Key System"
      serviceCategory="Commercial Security"
      mainContent={<MasterKeyContent />}
      faqs={masterKeyFaqs}
      relatedServices={masterKeyRelatedServices}
      schemas={[
        { type: 'service', data: masterKeyServiceSchema }
      ]}
      canonicalUrl="/services/commercial-locksmith/master-key"
      customBreadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Commercial Locksmith", path: "/services/commercial-locksmith" },
        { name: "Master Key Systems", path: "/services/commercial-locksmith/master-key" }
      ]}
    />
  );
};

export default MasterKey;
