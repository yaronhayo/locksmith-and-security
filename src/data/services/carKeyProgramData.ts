import { Clock, Building2, Key, Shield } from "lucide-react";
import { ServiceContent } from "@/types/lockoutServices";

export const carKeyProgramData: ServiceContent = {
  title: "Car Key Programming Services",
  description: "Professional programming services for all types of car keys and remote fobs.",
  services: [
    {
      icon: Clock,
      title: "Quick Programming",
      description: "Efficient key programming service using advanced diagnostic equipment."
    },
    {
      icon: Building2,
      title: "All Makes & Models",
      description: "Programming capabilities for all vehicle brands, including luxury and imported cars."
    },
    {
      icon: Key,
      title: "All Key Types",
      description: "Program transponder chips, proximity keys, smart keys, and remote fobs."
    },
    {
      icon: Shield,
      title: "Certified Equipment",
      description: "Using latest manufacturer-approved programming tools and software."
    }
  ]
};