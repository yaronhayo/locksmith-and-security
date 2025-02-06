
import ServiceLayout from "@/components/layouts/ServiceLayout";
import { Key, Shield, Scan, Settings, CheckCircle } from "lucide-react";

const KeyDuplicationPage = () => {
  return (
    <ServiceLayout
      title="Professional Key Duplication Services"
      description="Expert key duplication services with precision cutting and quality assurance. We create perfect copies of your keys using state-of-the-art equipment for reliable performance."
      icon={Key}
      benefits={[
        "Precise key cutting technology",
        "High-quality key blanks used",
        "All key types supported",
        "Quality testing included",
        "Perfect fit guaranteed",
        "Multiple copy options",
        "Expert key analysis",
        "Advanced security keys supported"
      ]}
      features={[
        {
          title: "Precision Cutting",
          description: "State-of-the-art key cutting machines for perfect accuracy every time.",
          icon: Settings
        },
        {
          title: "Quality Materials",
          description: "Premium quality key blanks that ensure long-lasting performance.",
          icon: Shield
        },
        {
          title: "Key Analysis",
          description: "Professional analysis of your original key to ensure perfect duplication.",
          icon: Scan
        },
        {
          title: "Quality Assurance",
          description: "Every duplicated key is tested to ensure proper function and fit.",
          icon: CheckCircle
        }
      ]}
      process={[
        {
          step: 1,
          title: "Key Analysis",
          description: "We examine your original key to determine the exact specifications needed for duplication."
        },
        {
          step: 2,
          title: "Blank Selection",
          description: "We select the appropriate high-quality key blank that matches your original key."
        },
        {
          step: 3,
          title: "Precision Cutting",
          description: "Using advanced key cutting equipment, we create an exact duplicate of your key."
        },
        {
          step: 4,
          title: "Quality Check",
          description: "Each key is carefully inspected and tested to ensure perfect operation."
        }
      ]}
    />
  );
};

export default KeyDuplicationPage;
