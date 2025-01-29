import ServiceLayout from "@/components/layouts/ServiceLayout";
import { Wrench } from "lucide-react";

const LockInstallationPage = () => {
  return (
    <ServiceLayout
      title="Lock Installation Services"
      description="Professional lock installation services for all types of properties. We ensure proper fitting and security for your peace of mind."
      icon={Wrench}
      serviceName="Lock Installation"
      serviceUrl="/services/lock-installation"
      benefits={[
        "Professional lock fitting service",
        "All lock types installed",
        "Expert technicians",
        "Quality assurance",
        "Warranty included"
      ]}
    />
  );
};

export default LockInstallationPage;