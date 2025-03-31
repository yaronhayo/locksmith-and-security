
import React from 'react';
import EnhancedServicesHero from '@/components/sections/services/EnhancedServicesHero';
import ServicePageContent from '@/components/sections/services/service-page';
import { carServiceReviews } from '@/data/reviews/carServiceReviews';
import ServicesProof from '@/components/sections/services/ServicesProof';
import { SchemaScripts } from '@/components/meta/SchemaScripts';
import { Helmet } from 'react-helmet';
import { IgnitionLockCylinderContent } from '@/components/services/ignition-lock-cylinder/IgnitionLockCylinderContent';
import { ignitionLockCylinderFaqs, ignitionLockCylinderServiceSchema, ignitionLockCylinderFaqSchema } from '@/components/services/ignition-lock-cylinder/IgnitionLockCylinderSchema';
import { relatedAutomotiveServices } from '@/components/services/ignition-lock-cylinder/relatedServices';

const IgnitionLockCylinder = () => {
  return (
    <main className="flex-grow">
      <Helmet>
        <title>Ignition Lock Cylinder Service | Restore Smooth Vehicle Starting</title>
        <meta name="description" content="Fix frustrating ignition problems with expert cylinder repair and replacement. Restore reliable starting and prevent key-related damage to your vehicle." />
        <meta name="keywords" content="ignition lock cylinder, ignition repair, ignition replacement, car ignition problems, ignition switch, automotive locksmith, car ignition repair" />
        <link rel="canonical" href="https://247locksmithandsecurity.com/services/auto-locksmith/ignition-lock-cylinder" />
      </Helmet>
      
      <SchemaScripts 
        schemas={[
          { type: 'service', data: ignitionLockCylinderServiceSchema },
          { type: 'faq', data: ignitionLockCylinderFaqSchema }
        ]} 
      />
      
      <EnhancedServicesHero 
        title="Ignition Lock Cylinder Service"
        description="Professional ignition lock cylinder replacement and repair for all vehicle makes and models. Our certified technicians provide reliable solutions at competitive rates."
        serviceName="Ignition Lock Cylinder"
        serviceLabel="Auto Locksmith"
      />
      
      <ServicePageContent
        title="Professional Ignition Lock Cylinder Replacement & Repair"
        description="Expert ignition repair services by certified automotive locksmiths"
        serviceName="Ignition Lock Cylinder"
        serviceCategory="Auto Locksmith"
        canonicalUrl="/services/auto-locksmith/ignition-lock-cylinder"
        mainContent={<IgnitionLockCylinderContent />}
        faqs={ignitionLockCylinderFaqs}
        relatedServices={relatedAutomotiveServices}
      />
      
      <ServicesProof reviewsData={carServiceReviews.slice(0, 8)} />
    </main>
  );
};

export default IgnitionLockCylinder;
