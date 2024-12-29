import { Clock, Shield, Building2, Lock } from "lucide-react";
import { ServiceContent } from "@/types/lockoutServices";

export const businessLockoutData: ServiceContent = {
  title: "Commercial Lockout Solutions",
  description: "Professional business lockout services available 24/7 for all types of commercial properties. Fast response and secure entry by licensed locksmiths.",
  services: [
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
      icon: Lock,
      title: "Non-Destructive Entry",
      description: "Advanced techniques and professional tools to gain entry without damaging your locks or door, preserving your property's security."
    }
  ]
};