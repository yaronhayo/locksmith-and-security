import { Clock, Building2, Key, Shield } from "lucide-react";
import { ServiceContent } from "@/types/lockoutServices";

export const newCarKeyData: ServiceContent = {
  title: "New Car Key Services",
  description: "Professional car key creation and programming services for all vehicle makes and models.",
  services: [
    {
      icon: Clock,
      title: "Fast Key Creation",
      description: "Quick and efficient car key cutting and programming service, often completed within an hour."
    },
    {
      icon: Building2,
      title: "All Vehicle Types",
      description: "Service for all car brands including luxury vehicles and modern cars with advanced key systems."
    },
    {
      icon: Key,
      title: "Complete Key Solutions",
      description: "From basic keys to complex transponder and smart keys, we handle all types of car keys."
    },
    {
      icon: Shield,
      title: "Certified Service",
      description: "Professional key creation using manufacturer-approved equipment and procedures."
    }
  ]
};