import { Clock, Shield, Key, Lock } from "lucide-react";
import { ServiceContent } from "@/types/lockoutServices";

export const carLockoutData: ServiceContent = {
  title: "Car Lockout Services",
  description: "Professional auto locksmith services tailored to your emergency needs, delivered with expertise and care.",
  services: [
    {
      icon: Clock,
      title: "24/7 Emergency Car Lockout",
      description: "Available around the clock for immediate response to your car lockout emergency. Our team arrives within 15-30 minutes in North Bergen area."
    },
    {
      icon: Shield,
      title: "Damage-Free Entry",
      description: "We use advanced techniques to unlock your car without causing any damage to your locks or vehicle, protecting your investment."
    },
    {
      icon: Key,
      title: "All Vehicle Types",
      description: "Professional service for all car makes and models, including luxury vehicles and modern cars with advanced security systems."
    },
    {
      icon: Lock,
      title: "Key Programming",
      description: "Expert key programming services for transponder keys, smart keys, and remote fobs to get you back on the road."
    }
  ]
};