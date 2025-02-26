
import React from 'react';
import ServicesHero from '@/components/sections/services/ServicesHero';
import ServicesCTA from '@/components/sections/services/ServicesCTA';
import ServicesFeatures from '@/components/sections/services/ServicesFeatures';
import ServicesProof from '@/components/sections/services/ServicesProof';

const BusinessLockout = () => {
  return (
    <main className="flex-grow">
      <ServicesHero 
        title="24/7 Business Lockout Service"
        description="Professional business lockout assistance available 24/7. Fast response times and damage-free commercial property entry."
      />
      <ServicesFeatures />
      <ServicesProof />
      <ServicesCTA />
    </main>
  );
};

export default BusinessLockout;
