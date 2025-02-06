
import ServiceLayout from "@/components/layouts/ServiceLayout";
import { Wrench, Shield, Key, Lock, Tool } from "lucide-react";

const LockInstallationPage = () => {
  return (
    <ServiceLayout
      title="Professional Lock Installation Services"
      description="Expert lock installation services for residential and commercial properties. We provide secure, reliable installation of all types of locks to ensure maximum security for your property."
      icon={Wrench}
      benefits={[
        "Professional installation by certified technicians",
        "All types of locks installed and configured",
        "Expert security consultation included",
        "High-security lock options available",
        "Proper installation guaranteed",
        "Complete testing and quality assurance",
        "Detailed usage instructions provided",
        "Long-term reliability ensured"
      ]}
      features={[
        {
          title: "Expert Installation",
          description: "Professional installation by certified technicians using industry-best practices and tools.",
          icon: Tool
        },
        {
          title: "Security Consultation",
          description: "Expert advice on choosing the right lock system for your specific security needs.",
          icon: Shield
        },
        {
          title: "All Lock Types",
          description: "Installation of deadbolts, smart locks, keypad locks, and high-security lock systems.",
          icon: Key
        },
        {
          title: "Quality Assurance",
          description: "Thorough testing and verification of every installation for optimal security.",
          icon: Lock
        }
      ]}
      process={[
        {
          step: 1,
          title: "Initial Consultation",
          description: "We assess your security needs and recommend the most suitable lock systems for your property."
        },
        {
          step: 2,
          title: "Lock Selection",
          description: "Choose from our range of high-quality locks based on your security requirements and preferences."
        },
        {
          step: 3,
          title: "Professional Installation",
          description: "Our certified technicians carefully install your new locks using professional-grade tools and techniques."
        },
        {
          step: 4,
          title: "Testing & Verification",
          description: "Thorough testing of all installed locks to ensure proper operation and maximum security."
        },
        {
          step: 5,
          title: "Final Inspection",
          description: "Complete review of the installation and detailed instructions on lock operation and maintenance."
        }
      ]}
    />
  );
};

export default LockInstallationPage;
