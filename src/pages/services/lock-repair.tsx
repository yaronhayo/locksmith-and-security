
import ServiceLayout from "@/components/layouts/ServiceLayout";
import { Settings, Wrench, Shield, Search } from "lucide-react";

const LockRepairPage = () => {
  return (
    <ServiceLayout
      title="Professional Lock Repair Services"
      description="Expert lock repair services to fix any lock issues. We diagnose and repair all types of locks using professional tools and techniques to restore your security."
      icon={Settings}
      benefits={[
        "Professional diagnostic service",
        "All lock types repaired",
        "Expert technicians",
        "Non-destructive repair methods",
        "Complete testing after repair",
        "Security assessment included",
        "Preventive maintenance advice",
        "Long-term solutions provided"
      ]}
      features={[
        {
          title: "Expert Diagnosis",
          description: "Professional assessment of lock issues using advanced diagnostic techniques.",
          icon: Search
        },
        {
          title: "Professional Repair",
          description: "Skilled technicians using professional-grade tools and genuine parts.",
          icon: Wrench
        },
        {
          title: "Security Solutions",
          description: "Comprehensive security solutions to prevent future lock issues.",
          icon: Shield
        },
        {
          title: "Quality Service",
          description: "Thorough testing and verification of repaired locks for reliability.",
          icon: Wrench
        }
      ]}
      process={[
        {
          step: 1,
          title: "Initial Assessment",
          description: "We thoroughly examine your lock to identify the root cause of the problem."
        },
        {
          step: 2,
          title: "Problem Diagnosis",
          description: "Our experts determine the best repair approach based on the lock condition."
        },
        {
          step: 3,
          title: "Professional Repair",
          description: "Using specialized tools and techniques, we repair your lock to restore functionality."
        },
        {
          step: 4,
          title: "Quality Testing",
          description: "Comprehensive testing to ensure the lock operates smoothly and securely."
        },
        {
          step: 5,
          title: "Maintenance Advice",
          description: "We provide guidance on proper lock maintenance to prevent future issues."
        }
      ]}
    />
  );
};

export default LockRepairPage;
