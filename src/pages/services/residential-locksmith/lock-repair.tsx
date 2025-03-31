
import React from 'react';
import EnhancedServicesHero from '@/components/sections/services/EnhancedServicesHero';
import ServicePageContent from '@/components/sections/services/service-page';
import { SchemaScripts } from '@/components/meta/SchemaScripts';
import { Helmet } from 'react-helmet';
import LockRepairContent from '@/components/services/lock-repair/LockRepairContent';
import { lockRepairFaqs, lockRepairServiceSchema, lockRepairFaqSchema } from '@/components/services/lock-repair/LockRepairSchema';
import { relatedResidentialServices } from '@/components/services/lock-repair/relatedServices';
import ServicesProof from '@/components/sections/services/ServicesProof';
import ServicesCTA from '@/components/sections/services/ServicesCTA';
import SEOHead from '@/components/meta/SEOHead';

const LockRepair = () => {
  return (
    <main className="flex-grow">
      <SEOHead
        title="Professional Lock Repair Services | 24/7 Residential Locksmith"
        description="Expert lock repair services by certified technicians. We diagnose and fix all types of lock issues including stuck locks, broken keys, and misalignments."
        keywords="lock repair, fix lock, stuck lock, broken key in lock, lock not working, residential locksmith, lock malfunction, lock service"
        canonicalUrl="https://247locksmithandsecurity.com/services/residential-locksmith/lock-repair"
        schemas={[
          { type: 'service', data: lockRepairServiceSchema },
          { type: 'faq', data: lockRepairFaqSchema }
        ]}
      />
      
      <EnhancedServicesHero 
        title="Professional Lock Repair Services"
        description="Expert lock repair services by our certified technicians. We diagnose and fix all types of lock issues to restore the security of your home or business."
        serviceName="Lock Repair"
        serviceLabel="Residential Locksmith Service"
      />
      
      <ServicePageContent
        title="Expert Lock Repair Solutions"
        description="Professional restoration of malfunctioning locks for homes and businesses"
        serviceName="Lock Repair"
        serviceCategory="Residential Locksmith"
        mainContent={<LockRepairContent />}
        relatedServices={relatedResidentialServices}
        faqs={lockRepairFaqs}
      />
      
      <ServicesProof category="residential" />
      <ServicesCTA />
    </main>
  );
};

export default LockRepair;
