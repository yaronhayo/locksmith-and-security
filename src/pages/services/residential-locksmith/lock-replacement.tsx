
import React from 'react';
import ServicesHero from '@/components/sections/services/ServicesHero';
import ServicesCTA from '@/components/sections/services/ServicesCTA';
import ServicesFeatures from '@/components/sections/services/ServicesFeatures';
import ServicesProof from '@/components/sections/services/ServicesProof';

const LockReplacement = () => {
  return (
    <main className="flex-grow">
      <ServicesHero 
        title="Residential Lock Replacement"
        description="Professional lock replacement services by experienced technicians. Expert installation of high-security locks."
      />
      <ServicesFeatures />
      <ServicesProof category="residential" />
      <ServicesCTA />
    </main>
  );
};

export default LockReplacement;
