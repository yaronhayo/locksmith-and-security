
import React from 'react';
import ServiceLayout from '@/components/services/common/ServiceLayout';
import LockRepairContent from '@/components/services/lock-repair/LockRepairContent';
import { lockRepairFaqs, lockRepairServiceSchema, lockRepairFaqSchema } from '@/components/services/lock-repair/LockRepairSchema';
import { relatedResidentialServices } from '@/components/services/lock-repair/relatedServices';

const LockRepair = () => {
  return (
    <ServiceLayout
      title="Professional Lock Repair Services | 24/7 Residential Locksmith"
      description="Expert lock repair services by certified technicians. We diagnose and fix all types of lock issues including stuck locks, broken keys, and misalignments."
      keywords="lock repair, fix lock, stuck lock, broken key in lock, lock not working, residential locksmith, lock malfunction, lock service"
      serviceName="Lock Repair"
      serviceCategory="Residential Locksmith"
      mainContent={<LockRepairContent />}
      faqs={lockRepairFaqs}
      relatedServices={relatedResidentialServices}
      schemas={[
        { type: 'service', data: lockRepairServiceSchema },
        { type: 'faq', data: lockRepairFaqSchema }
      ]}
      canonicalUrl="/services/residential-locksmith/lock-repair"
      customBreadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Residential Locksmith", path: "/services/residential-locksmith" },
        { name: "Lock Repair", path: "/services/residential-locksmith/lock-repair" }
      ]}
    />
  );
};

export default LockRepair;
