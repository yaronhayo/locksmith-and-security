import { Building2 } from "lucide-react";
import ServiceLayout from "@/components/layouts/ServiceLayout";
import ServiceDescription from "@/components/services/business-lock-change/ServiceDescription";
import EmergencyCallout from "@/components/services/business-lock-change/EmergencyCallout";
import RealWorldExamples from "@/components/services/business-lock-change/RealWorldExamples";

const BusinessLockChangePage = () => {
  return (
    <ServiceLayout
      title="Business Lock Change Services"
      description="Professional commercial lock change solutions for enhanced business security"
      icon={Building2}
      service="Business Lock Change"
      callToAction="Need to Change Your Business Locks?"
      benefits={[
        "24/7 Emergency Service",
        "Licensed & Insured Technicians",
        "High-Security Lock Options",
        "Master Key System Setup",
        "Access Control Integration",
        "Competitive Business Rates"
      ]}
    >
      <ServiceDescription />
      <EmergencyCallout />
      <RealWorldExamples />
    </ServiceLayout>
  );
};

export default BusinessLockChangePage;