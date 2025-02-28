
import React from 'react';
import ServicesHero from '@/components/sections/services/ServicesHero';
import ServicesCTA from '@/components/sections/services/ServicesCTA';
import ServicesFeatures from '@/components/sections/services/ServicesFeatures';
import ServicesProof from '@/components/sections/services/ServicesProof';

const LockRekey = () => {
  return (
    <main className="flex-grow">
      <ServicesHero 
        title="Residential Lock Rekey"
        description="Professional lock rekeying services by experienced technicians. Maintain your existing locks while updating security."
      />
      <ServicesFeatures />
      <ServicesProof category="residential" />
      <ServicesCTA />
    </main>
  );
};

export default LockRekey;
