import ServiceLayout from "@/components/layouts/ServiceLayout";
import { Key } from "lucide-react";

const KeyDuplicationPage = () => {
  return (
    <ServiceLayout
      title="Key Duplication Services"
      description="Professional key duplication services for all types of keys. We ensure precise copying for perfect functionality every time."
      icon={Key}
      benefits={[
        "Precise key copying services",
        "All key types supported",
        "Fast service",
        "High-quality key blanks",
        "Guaranteed accuracy"
      ]}
    />
  );
};

export default KeyDuplicationPage;