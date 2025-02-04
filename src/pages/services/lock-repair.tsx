import ServiceLayout from "@/components/layouts/ServiceLayout";
import { Settings } from "lucide-react";

const LockRepairPage = () => {
  return (
    <ServiceLayout
      title="Lock Repair Services"
      description="Expert lock repair services to fix any lock issues. We diagnose and repair all types of locks to ensure your security is maintained."
      icon={Settings}
      benefits={[
        "Professional lock repair service",
        "Fast response times",
        "All types of locks serviced",
        "Cost-effective solutions",
        "Expert technicians"
      ]}
    />
  );
};

export default LockRepairPage;