import { Clock, Shield, Building2, Key } from "lucide-react";
import { ServiceContent } from "@/types/lockoutServices";

export const businessLockChangeData: ServiceContent = {
  title: "Commercial Lock Change Services",
  description: "Professional lock replacement services for businesses, ensuring maximum security and access control for your commercial property.",
  services: [
    {
      icon: Clock,
      title: "Efficient Installation",
      description: "Quick and professional installation of new commercial-grade locks with minimal disruption to your business operations."
    },
    {
      icon: Shield,
      title: "High-Security Solutions",
      description: "Installation of advanced security locks, master key systems, and access control solutions tailored to your business needs."
    },
    {
      icon: Building2,
      title: "Commercial Expertise",
      description: "Specialized experience with all types of commercial properties including retail, office, industrial, and multi-tenant buildings."
    },
    {
      icon: Key,
      title: "Master Key Systems",
      description: "Design and implementation of master key systems for efficient access management across your organization."
    }
  ]
};