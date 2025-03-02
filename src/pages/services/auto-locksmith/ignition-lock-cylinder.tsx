
import React from 'react';
import ServiceLayout from '@/components/services/common/ServiceLayout';
import { IgnitionLockCylinderContent } from '@/components/services/ignition-lock-cylinder/IgnitionLockCylinderContent';
import { ignitionLockCylinderFaqs, ignitionLockCylinderServiceSchema, ignitionLockCylinderFaqSchema } from '@/components/services/ignition-lock-cylinder/IgnitionLockCylinderSchema';
import { relatedAutomotiveServices } from '@/components/services/ignition-lock-cylinder/relatedServices';
import { carServiceReviews } from '@/data/reviews/carServiceReviews';

const IgnitionLockCylinder = () => {
  return (
    <ServiceLayout
      title="Ignition Lock Cylinder Replacement & Repair | Auto Locksmith Services"
      description="Professional ignition lock cylinder replacement and repair for all vehicle makes and models. Expert service with fast response and fair pricing."
      keywords="ignition lock cylinder, ignition repair, ignition replacement, car ignition problems, ignition switch, automotive locksmith, car ignition repair"
      serviceName="Ignition Lock Cylinder"
      serviceCategory="Auto Locksmith"
      mainContent={<IgnitionLockCylinderContent />}
      faqs={ignitionLockCylinderFaqs}
      relatedServices={relatedAutomotiveServices}
      reviewsData={carServiceReviews.slice(0, 8)}
      schemas={[
        { type: 'service', data: ignitionLockCylinderServiceSchema },
        { type: 'faq', data: ignitionLockCylinderFaqSchema }
      ]}
      canonicalUrl="/services/auto-locksmith/ignition-lock-cylinder"
      customBreadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Auto Locksmith", path: "/services/auto-locksmith" },
        { name: "Ignition Lock Cylinder", path: "/services/auto-locksmith/ignition-lock-cylinder" }
      ]}
    />
  );
};

export default IgnitionLockCylinder;
