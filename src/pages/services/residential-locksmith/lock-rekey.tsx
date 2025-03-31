
import React from 'react';
import EnhancedServicesHero from '@/components/sections/services/EnhancedServicesHero';
import ServicePageContent from '@/components/sections/services/service-page';
import { residentialReviews } from '@/data/reviews';
import ServicesProof from '@/components/sections/services/ServicesProof';
import { SchemaScripts } from '@/components/meta/SchemaScripts';
import { Helmet } from 'react-helmet';
import { LockRekeyContent } from '@/components/services/lock-rekey/LockRekeyContent';
import { lockRekeyFaqs, lockRekeyServiceSchema, lockRekeyFaqSchema } from '@/components/services/lock-rekey/LockRekeySchema';
import { relatedResidentialServices } from '@/components/services/lock-rekey/relatedServices';
import SEOHead from '@/components/meta/SEOHead';

const LockRekey = () => {
  return (
    <main className="flex-grow">
      <SEOHead
        title="Professional Lock Rekey Service | Expert Residential Locksmiths"
        description="Expert lock rekeying service by certified locksmiths. Change your keys without replacing locks. Serving North Bergen, Jersey City, Hoboken & all NJ areas."
        keywords="lock rekey, rekey locks, change lock pins, new keys, same lock, key alike, master key, residential locksmith, home security"
        canonicalUrl="https://247locksmithandsecurity.com/services/residential-locksmith/lock-rekey"
        schemas={[
          { type: 'service', data: lockRekeyServiceSchema },
          { type: 'faq', data: lockRekeyFaqSchema }
        ]}
      />
      
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
        canonicalUrl="/services/residential-locksmith/lock-rekey"
        mainContent={<LockRekeyContent />}
        relatedServices={relatedResidentialServices}
        faqs={lockRekeyFaqs}
      />
      
      <ServicesProof reviewsData={residentialReviews.slice(0, 8)} />
    </main>
  );
};

export default LockRekey;
