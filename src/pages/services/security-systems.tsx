import ServiceLayout from "@/components/layouts/ServiceLayout";
import { Shield } from "lucide-react";

const SecuritySystemsPage = () => {
  return (
    <ServiceLayout
      title="Security System Installation"
      description="Advanced security system installation services to protect your property. We provide cutting-edge security solutions tailored to your needs."
      icon={Shield}
      serviceName="Security Systems"
      serviceUrl="/services/security-systems"
      benefits={[
        "Advanced security system installation",
        "Modern security solutions",
        "Professional setup and configuration",
        "24/7 monitoring options",
        "Custom security plans"
      ]}
    />
  );
};

export default SecuritySystemsPage;