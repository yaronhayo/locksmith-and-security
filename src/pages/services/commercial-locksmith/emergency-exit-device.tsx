
import React from 'react';
import EnhancedServicesHero from '@/components/sections/services/EnhancedServicesHero';
import ServicePageContent from '@/components/sections/services/service-page';
import { commercialReviews } from '@/data/reviews';
import ServicesProof from '@/components/sections/services/ServicesProof';
import { EmergencyExitDeviceContent } from '@/components/services/emergency-exit-device/EmergencyExitDeviceContent';
import { emergencyExitDeviceFaqs, emergencyExitDeviceServiceSchema, emergencyExitDeviceFaqSchema, emergencyExitDeviceRelatedServices } from '@/components/services/emergency-exit-device/EmergencyExitDeviceSchema';
import MetaTags from '@/components/layouts/MetaTags';

const EmergencyExitDevice = () => {
  return (
    <main className="flex-grow">
      <MetaTags
        title="Emergency Exit Device Installation | Commercial Panic Bar Services"
        description="Professional emergency exit device installation and repairs by certified technicians. Ensure your business meets fire code requirements with expert panic bar services."
        keywords="emergency exit device, panic bar, push bar, exit device installation, commercial fire code, business emergency exit, panic hardware"
        canonicalUrl="https://247locksmithandsecurity.com/services/commercial-locksmith/emergency-exit-device"
        schema={[
          emergencyExitDeviceServiceSchema,
          emergencyExitDeviceFaqSchema
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
        mainContent={<EmergencyExitDeviceContent />}
        relatedServices={emergencyExitDeviceRelatedServices}
        faqs={emergencyExitDeviceFaqs}
      />
      
      <ServicesProof reviewsData={commercialReviews.slice(0, 8)} />
    </main>
  );
};

export default EmergencyExitDevice;
