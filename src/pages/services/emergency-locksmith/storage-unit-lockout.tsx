
import React from 'react';
import EnhancedServicesHero from '@/components/sections/services/EnhancedServicesHero';
import ServicePageContent from '@/components/sections/services/service-page';
import { residentialReviews } from '@/data/reviews';
import ServicesProof from '@/components/sections/services/ServicesProof';
import { SchemaScripts } from '@/components/meta/SchemaScripts';
import { Helmet } from 'react-helmet';
import StorageUnitLockoutContent from '@/components/services/storage-unit-lockout/StorageUnitLockoutContent';
import { storageUnitLockoutFaqs, storageUnitServiceSchema, storageUnitLockoutFaqSchema } from '@/components/services/storage-unit-lockout/StorageUnitLockoutSchema';
import { relatedEmergencyServices } from '@/components/services/storage-unit-lockout/relatedServices';

const StorageUnitLockout = () => {
  return (
    <main className="flex-grow">
      <Helmet>
        <title>Storage Unit Lockout Solutions | Protect Your Stored Valuables</title>
        <meta name="description" content="Secure access to your storage unit with our specialized lockout solutions that protect your belongings while maintaining the integrity of facility security systems." />
        <meta name="keywords" content="storage unit lockout, locked out of storage unit, storage unit lock opening, emergency locksmith, storage unit lock replacement, storage unit key" />
        <link rel="canonical" href="https://247locksmithandsecurity.com/services/emergency-locksmith/storage-unit-lockout" />
      </Helmet>
      
      <SchemaScripts 
        schemas={[
          { type: 'service', data: storageUnitServiceSchema },
          { type: 'faq', data: storageUnitLockoutFaqSchema }
        ]} 
      />
      
      <EnhancedServicesHero 
        title="Storage Unit Lockout Service"
        description="Professional locksmith services for when you're locked out of your storage unit. Our certified technicians provide fast, reliable, and damage-free entry methods."
        serviceName="Storage Unit Lockout"
        serviceLabel="Emergency Locksmith"
      />
      
      <ServicePageContent
        title="Professional Storage Unit Lockout Assistance"
        description="Expert storage unit lockout services by certified locksmiths"
        serviceName="Storage Unit Lockout"
        serviceCategory="Emergency Locksmith"
        mainContent={<StorageUnitLockoutContent />}
        relatedServices={relatedEmergencyServices}
        faqs={storageUnitLockoutFaqs}
      />
      
      <ServicesProof reviewsData={residentialReviews.slice(0, 8)} />
    </main>
  );
};

export default StorageUnitLockout;
