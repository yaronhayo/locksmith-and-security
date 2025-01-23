import { Clock, Shield, Building2, Key } from "lucide-react";
import { ServiceItem } from "@/types/lockoutServices";

export const businessLockoutServices: ServiceItem[] = [
  {
    icon: Clock,
    title: "24/7 Emergency Response",
    description: "Available around the clock for immediate response to your business lockout emergency. Our team arrives within 15-30 minutes in North Bergen area."
  },
  {
    icon: Shield,
    title: "Licensed & Insured Service",
    description: "Our commercial locksmiths are fully licensed, bonded, and insured, ensuring professional and liability-protected service for your business."
  },
  {
    icon: Building2,
    title: "All Commercial Properties",
    description: "Expert service for offices, retail stores, warehouses, and industrial facilities. We handle all types of commercial locks and security systems."
  },
  {
    icon: Key,
    title: "Non-Destructive Entry",
    description: "Advanced techniques and professional tools to gain entry without damaging your locks or door, preserving your property's security."
  }
];

export const businessLockChangeServices: ServiceItem[] = [
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
];