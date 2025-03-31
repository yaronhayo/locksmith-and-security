
import React from 'react';
import EnhancedServicesHero from '@/components/sections/services/EnhancedServicesHero';
import ServicePageContent from '@/components/sections/services/service-page';
import { residentialReviews } from '@/data/reviews';
import ServicesProof from '@/components/sections/services/ServicesProof';
import { LockRekeyContent } from '@/components/services/lock-rekey/LockRekeyContent';
import { lockRekeyFaqs, lockRekeyServiceSchema, lockRekeyFaqSchema } from '@/components/services/lock-rekey/LockRekeySchema';
import { relatedResidentialServices } from '@/components/services/lock-rekey/relatedServices';
import SEOHead from '@/components/meta/SEOHead';
import SEOManager from '@/components/meta/SEOManager';

const LockRekey = () => {
  const canonicalUrl = "/services/residential-locksmith/lock-rekey";
  
  return (
    <main className="flex-grow">
      <SEOManager
        pageType="service"
        title="Professional Lock Rekey Service | Expert Residential Locksmiths"
        description="Expert lock rekeying service by certified locksmiths. Change your keys without replacing locks. Serving North Bergen, Jersey City, Hoboken & all NJ areas."
        canonicalUrl={canonicalUrl}
        keywords="lock rekey, rekey locks, change lock pins, new keys, same lock, key alike, master key, residential locksmith, home security"
        serviceName="Lock Rekey"
        serviceCategory="Residential Locksmith"
        serviceDescription="Change your locks' internal pins to work with new keys while keeping your existing hardware. A cost-effective security solution."
        serviceOfferings={[
          "Residential Lock Rekey",
          "Emergency Lock Rekey",
          "Lock Rekeying After Move-In",
          "Key Loss Rekeying",
          "Master Key System Rekeying"
        ]}
        faqs={lockRekeyFaqs}
        modifiedDate={new Date().toISOString()}
      >
        <EnhancedServicesHero 
          title="Professional Lock Rekey Service"
          description="Change your locks' internal pins to work with new keys while keeping your existing hardware. A cost-effective security solution when moving into a new home or after losing keys."
          serviceName="Lock Rekey"
          serviceLabel="Residential Locksmith"
        />
        
        <ServicePageContent
          title="Expert Lock Rekey Service"
          description="Change who has access to your home without replacing your locks"
          serviceName="Lock Rekey"
          serviceCategory="Residential Locksmith"
          canonicalUrl={canonicalUrl}
          mainContent={<LockRekeyContent />}
          relatedServices={relatedResidentialServices}
          faqs={lockRekeyFaqs}
        />
        
        <ServicesProof reviewsData={residentialReviews.slice(0, 8)} />
      </SEOManager>
    </main>
  );
};

export default LockRekey;
