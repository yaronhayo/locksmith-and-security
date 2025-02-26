
import React from 'react';
import ServicesHero from '@/components/sections/services/ServicesHero';
import ServicesCTA from '@/components/sections/services/ServicesCTA';
import ServicesFeatures from '@/components/sections/services/ServicesFeatures';
import ServicesProof from '@/components/sections/services/ServicesProof';

const CarLockout = () => {
  return (
    <main className="flex-grow">
      <ServicesHero 
        title="Car Lockout Service"
        description="Professional automotive locksmith services. Available 24/7 for all vehicle lockout situations."
      />
      <ServicesFeatures />
      <ServicesProof />
      <ServicesCTA />
    </main>
  );
};

export default CarLockout;
