
import React from 'react';
import ServicesHero from '@/components/sections/services/ServicesHero';
import ServicesCTA from '@/components/sections/services/ServicesCTA';
import ServicesFeatures from '@/components/sections/services/ServicesFeatures';
import ServicesProof from '@/components/sections/services/ServicesProof';

const StorageUnitLockout = () => {
  return (
    <main className="flex-grow">
      <ServicesHero 
        title="Storage Unit Lockout Service"
        description="Professional storage unit lockout assistance. Fast response times and secure unit access restoration."
      />
      <ServicesFeatures />
      <ServicesProof />
      <ServicesCTA />
    </main>
  );
};

export default StorageUnitLockout;
