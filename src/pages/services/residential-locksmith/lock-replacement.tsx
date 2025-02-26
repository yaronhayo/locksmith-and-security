
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
        description="Professional lock replacement services for homes. Expert installation of high-security locks."
      />
      <ServicesFeatures />
      <ServicesProof />
      <ServicesCTA />
    </main>
  );
};

export default LockReplacement;
