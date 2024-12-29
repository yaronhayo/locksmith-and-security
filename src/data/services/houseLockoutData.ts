import { Clock, Shield, Building2, Key } from "lucide-react";
import { ServiceContent } from "@/types/lockoutServices";

export const houseLockoutData: ServiceContent = {
  title: "Residential Lockout Services",
  description: "Professional residential locksmith services for your home security needs, delivered with expertise and care.",
  services: [
    {
      icon: Clock,
      title: "24/7 Emergency House Lockout",
      description: "Available around the clock for immediate response to your home lockout emergency. Our team arrives within 15-30 minutes."
    },
    {
      icon: Shield,
      title: "Damage-Free Entry",
      description: "We use advanced techniques to unlock your door without causing any damage to your locks, protecting your home security."
    },
    {
      icon: Building2,
      title: "All Door Types",
      description: "Professional service for all types of residential doors, including front doors, back doors, garage doors, and more."
    },
    {
      icon: Key,
      title: "Lock Solutions",
      description: "Expert lock repair, replacement, and rekeying services to ensure your home's security after the lockout."
    }
  ]
};