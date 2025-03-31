
import React from 'react';
import EnhancedServicesHero from '@/components/sections/services/EnhancedServicesHero';
import ServicePageContent from '@/components/sections/services/service-page';
import { commercialReviews } from '@/data/reviews';
import ServicesProof from '@/components/sections/services/ServicesProof';
import { SchemaScripts } from '@/components/meta/SchemaScripts';
import { Helmet } from 'react-helmet';
import { CommercialLockRekeyContent } from '@/components/services/commercial-lock-rekey/CommercialLockRekeyContent';
import { commercialLockRekeyFaqs, commercialLockRekeyServiceSchema, commercialLockRekeyFaqSchema, commercialLockRekeyRelatedServices } from '@/components/services/commercial-lock-rekey/CommercialLockRekeySchema';

const CommercialLockRekey = () => {
  return (
    <main className="flex-grow">
      <Helmet>
        <title>Commercial Lock Rekeying | Instant Security Restoration</title>
        <meta name="description" content="Regain complete access control after employee turnover or key loss with our cost-effective rekeying that instantly renders old keys useless." />
        <meta name="keywords" content="commercial lock rekey, business lock rekeying, change business keys, master key system, employee turnover security, business security" />
        <link rel="canonical" href="https://247locksmithandsecurity.com/services/commercial-locksmith/lock-rekey" />
      </Helmet>
      
      <SchemaScripts 
        schemas={[
          { type: 'service', data: commercialLockRekeyServiceSchema },
          { type: 'faq', data: commercialLockRekeyFaqSchema }
        ]} 
      />
      
      <EnhancedServicesHero 
        title="Commercial Lock Rekey Service"
        description="Professional lock rekeying for your business. Our certified technicians reconfigure your existing locks to work with new keys, rendering old keys useless and improving security cost-effectively."
        serviceName="Commercial Lock Rekey"
        serviceLabel="Commercial Locksmith"
      />
      
      <ServicePageContent
        title="Professional Commercial Lock Rekeying"
        description="Change your locks' internal pins to work with new keys while keeping your existing hardware"
        serviceName="Commercial Lock Rekey"
        serviceCategory="Commercial Locksmith"
        canonicalUrl="/services/commercial-locksmith/lock-rekey"
        mainContent={<CommercialLockRekeyContent />}
        relatedServices={commercialLockRekeyRelatedServices}
        faqs={commercialLockRekeyFaqs}
      />
      
      <ServicesProof reviewsData={commercialReviews.slice(0, 8)} />
    </main>
  );
};

export default CommercialLockRekey;
