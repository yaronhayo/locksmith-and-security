
import React from 'react';
import ServiceLayout from '@/components/services/common/ServiceLayout';
import { GateLocksContent } from '@/components/services/gate-locks/GateLocksContent';
import { gateLocksServiceSchema, gateLocksFaqs, gateLocksRelatedServices } from '@/components/services/gate-locks/GateLocksSchema';

const GateLocks = () => {
  return (
    <ServiceLayout
      title="Gate Lock Installation & Repair | Residential Locksmith Services"
      description="Professional gate lock installation and repair by certified technicians. Expert solutions for all types of residential gates with quality hardware and guaranteed workmanship."
      schema={gateLocksServiceSchema}
      keywords="gate locks, gate lock installation, gate lock repair, driveway gate locks, garden gate locks, residential gate security, gate lock replacement"
      serviceName="Gate Lock"
      serviceCategory="Residential Security"
      mainContent={<GateLocksContent />}
      faqs={gateLocksFaqs}
      relatedServices={gateLocksRelatedServices}
      customBreadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Residential Locksmith", path: "/services/residential-locksmith" },
        { name: "Gate Locks", path: "/services/residential-locksmith/gate-locks" }
      ]}
    />
  );
};

export default GateLocks;
