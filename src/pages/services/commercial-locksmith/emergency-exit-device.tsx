
import React from 'react';
import ServiceLayout from '@/components/services/common/ServiceLayout';
import { EmergencyExitDeviceContent } from '@/components/services/emergency-exit-device/EmergencyExitDeviceContent';
import { emergencyExitDeviceFaqs, emergencyExitDeviceServiceSchema, emergencyExitDeviceFaqSchema, emergencyExitDeviceRelatedServices } from '@/components/services/emergency-exit-device/EmergencyExitDeviceSchema';
import { commercialReviews } from '@/data/reviews';

const EmergencyExitDevice = () => {
  return (
    <ServiceLayout
      title="Emergency Exit Device Installation | Commercial Panic Bar Services"
      description="Professional emergency exit device installation and repairs by certified technicians. Ensure your business meets fire code requirements with expert panic bar services."
      keywords="emergency exit device, panic bar, push bar, exit device installation, commercial fire code, business emergency exit, panic hardware"
      serviceName="Emergency Exit Device"
      serviceCategory="Commercial Locksmith"
      mainContent={<EmergencyExitDeviceContent />}
      faqs={emergencyExitDeviceFaqs}
      relatedServices={emergencyExitDeviceRelatedServices}
      reviewsData={commercialReviews.slice(0, 8)}
      schemas={[
        { type: 'service', data: emergencyExitDeviceServiceSchema },
        { type: 'faq', data: emergencyExitDeviceFaqSchema }
      ]}
      canonicalUrl="/services/commercial-locksmith/emergency-exit-device"
      customBreadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Commercial Locksmith", path: "/services/commercial-locksmith" },
        { name: "Emergency Exit Device", path: "/services/commercial-locksmith/emergency-exit-device" }
      ]}
    />
  );
};

export default EmergencyExitDevice;
