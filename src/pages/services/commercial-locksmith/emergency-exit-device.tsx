
import React from 'react';
import EnhancedServicesHero from '@/components/sections/services/EnhancedServicesHero';
import ServicePageContent from '@/components/sections/services/service-page';
import { commercialReviews } from '@/data/reviews';
import ServicesProof from '@/components/sections/services/ServicesProof';
import { SchemaScripts } from '@/components/meta/SchemaScripts';
import { Helmet } from 'react-helmet';
import { EmergencyExitDeviceContent } from '@/components/services/emergency-exit-device/EmergencyExitDeviceContent';
import { emergencyExitDeviceFaqs, emergencyExitDeviceServiceSchema, emergencyExitDeviceFaqSchema, emergencyExitDeviceRelatedServices } from '@/components/services/emergency-exit-device/EmergencyExitDeviceSchema';

const EmergencyExitDevice = () => {
  return (
    <main className="flex-grow">
      <Helmet>
        <title>Emergency Exit Devices | Life Safety & Code Compliance Solutions</title>
        <meta name="description" content="Ensure occupant safety and legal compliance with professionally installed panic hardware that provides reliable emergency egress without compromising security." />
        <meta name="keywords" content="emergency exit device, panic bar, push bar, exit device installation, commercial fire code, business emergency exit, panic hardware" />
        <link rel="canonical" href="https://247locksmithandsecurity.com/services/commercial-locksmith/emergency-exit-device" />
      </Helmet>
      
      <SchemaScripts 
        schemas={[
          { type: 'service', data: emergencyExitDeviceServiceSchema },
          { type: 'faq', data: emergencyExitDeviceFaqSchema }
        ]} 
      />
      
      <EnhancedServicesHero 
        title="Emergency Exit Device Services"
        description="Professional installation and maintenance of panic bars and push bars. Our certified technicians ensure your business complies with local fire codes and safety regulations while maintaining proper security."
        serviceName="Emergency Exit Device"
        serviceLabel="Commercial Locksmith"
      />
      
      <ServicePageContent
        title="Emergency Exit Device Installation & Repair"
        description="Expert panic bar and push bar services to ensure safety compliance and proper emergency egress"
        serviceName="Emergency Exit Device"
        serviceCategory="Commercial Locksmith"
        canonicalUrl="/services/commercial-locksmith/emergency-exit-device"
        mainContent={<EmergencyExitDeviceContent />}
        relatedServices={emergencyExitDeviceRelatedServices}
        faqs={emergencyExitDeviceFaqs}
      />
      
      <ServicesProof reviewsData={commercialReviews.slice(0, 8)} />
    </main>
  );
};

export default EmergencyExitDevice;
