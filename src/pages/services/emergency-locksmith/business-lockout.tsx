
import React from 'react';
import ServicesHero from '@/components/sections/services/ServicesHero';
import ServicesCTA from '@/components/sections/services/ServicesCTA';
import ServicesFeatures from '@/components/sections/services/ServicesFeatures';
import ServicesProof from '@/components/sections/services/ServicesProof';

const BusinessLockout = () => {
  return (
    <main className="flex-grow">
      <ServicesHero 
        title="Business Lockout Service"
        description="Professional locksmith services for commercial lockouts. Available 24/7 for all business security needs."
      />
      <ServicesFeatures />
      <ServicesProof />
      <ServicesCTA />
    </main>
  );
};

export default BusinessLockout;
