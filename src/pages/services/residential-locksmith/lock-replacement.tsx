
import React from 'react';
import EnhancedServicesHero from '@/components/sections/services/EnhancedServicesHero';
import ServicePageContent from '@/components/sections/services/service-page';
import { residentialReviews } from '@/data/reviews';
import ServicesProof from '@/components/sections/services/ServicesProof';
import { SchemaScripts } from '@/components/meta/SchemaScripts';
import { Helmet } from 'react-helmet';
import { LockReplacementContent } from '@/components/services/lock-replacement/LockReplacementContent';
import { lockReplacementFaqs, lockReplacementServiceSchema, lockReplacementFaqSchema } from '@/components/services/lock-replacement/LockReplacementSchema';
import { relatedResidentialServices } from '@/components/services/lock-replacement/relatedServices';
import SEOHead from '@/components/meta/SEOHead';

const LockReplacement = () => {
  return (
    <main className="flex-grow">
      <SEOHead
        title="Home Lock Replacement | Security Grade Upgrades | Expert Installation"
        description="Upgrade your home security with professional lock installation. We offer deadbolts, smart locks, keyless entry & high-security options with same-day service."
        keywords="lock replacement, change locks, new locks, deadbolt installation, smart lock installation, home security upgrade, residential locksmith"
        canonicalUrl="https://247locksmithandsecurity.com/services/residential-locksmith/lock-replacement"
        schemas={[
          { type: 'service', data: lockReplacementServiceSchema },
          { type: 'faq', data: lockReplacementFaqSchema }
        ]}
      />
      
      <EnhancedServicesHero 
        title="Residential Lock Replacement Service"
        description="Professional lock replacement services to enhance your home security. Our certified technicians provide expert installation of high-quality locks from trusted brands."
        serviceName="Lock Replacement"
        serviceLabel="Residential Locksmith"
      />
      
      <ServicePageContent
        title="Professional Lock Replacement Service"
        description="Expert lock replacement solutions for enhanced home security"
        serviceName="Lock Replacement"
        serviceCategory="Residential Locksmith"
        canonicalUrl="/services/residential-locksmith/lock-replacement"
        mainContent={<LockReplacementContent />}
        relatedServices={relatedResidentialServices}
        faqs={lockReplacementFaqs}
      />
      
      <ServicesProof reviewsData={residentialReviews.slice(0, 8)} />
    </main>
  );
};

export default LockReplacement;
