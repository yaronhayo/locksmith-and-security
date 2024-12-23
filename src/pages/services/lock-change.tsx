import ServiceLayout from "@/components/layouts/ServiceLayout";
import { Key } from "lucide-react";

const LockChangePage = () => {
  return (
    <ServiceLayout
      title="Lock Change Services"
      description="Professional lock replacement services for your home, business, or vehicle. We ensure your security with high-quality locks and expert installation."
      icon={Key}
      benefits={[
        "Complete lock replacement service",
        "High-security lock options available",
        "Expert installation by certified technicians",
        "24/7 emergency service available",
        "Residential and commercial solutions"
      ]}
    />
  );
};

export default LockChangePage;