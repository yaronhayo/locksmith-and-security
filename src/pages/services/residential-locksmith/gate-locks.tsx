
import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import ServicePageContent from '@/components/sections/services/service-page';
import { GateLocksContent } from '@/components/services/gate-locks/GateLocksContent';
import { gateLocksServiceSchema, gateLocksFaqs, gateLocksRelatedServices } from '@/components/services/gate-locks/GateLocksSchema';
import EnhancedServicesHero from '@/components/sections/services/EnhancedServicesHero';
import SEOHead from '@/components/meta/SEOHead';

const GateLocks = () => {
  return (
    <>
      <SEOHead
        title="Gate Lock Solutions | Complete Perimeter Security Systems"
        description="Secure your property boundaries with weather-resistant, tamper-proof gate locks professionally installed for optimal security and convenience."
        keywords="gate locks, gate lock installation, gate lock repair, driveway gate locks, garden gate locks, residential gate security, gate lock replacement"
        canonicalUrl="/services/residential-locksmith/gate-locks"
        schemas={[{ type: 'service', data: gateLocksServiceSchema }]}
      />
      
      <EnhancedServicesHero
        title="Gate Lock Installation & Repair"
        description="Professional installation and repair of secure gate locks for residential properties. Our certified technicians provide expert solutions for all types of gates."
        serviceName="Gate Lock"
        serviceLabel="Residential Security"
      />
      
      <ServicePageContent
        title="Gate Lock Installation & Repair"
        description="Professional installation and repair of secure gate locks for residential properties. Our certified technicians provide expert solutions for all types of gates."
        serviceName="Gate Lock"
        serviceCategory="Residential"
        mainContent={<GateLocksContent />}
        faqs={gateLocksFaqs}
        relatedServices={gateLocksRelatedServices}
      />
    </>
  );
};

export default GateLocks;
