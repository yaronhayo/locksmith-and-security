
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
        description="Professional lock rekeying services. Keep your existing locks while updating your keys for improved security."
      />
      <ServicesFeatures />
      <ServicesProof />
      <ServicesCTA />
    </main>
  );
};

export default LockRekey;
