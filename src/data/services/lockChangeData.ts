import { Clock, Shield, Lock, Key } from "lucide-react";
import { ServiceContent } from "@/types/lockoutServices";

export const lockChangeData: ServiceContent = {
  title: "Lock Change Services",
  description: "Professional lock replacement services for enhanced security, delivered with expertise and care.",
  services: [
    {
      icon: Clock,
      title: "Fast Lock Change Service",
      description: "Quick and efficient lock replacement service with minimal disruption to your daily routine."
    },
    {
      icon: Shield,
      title: "High-Security Locks",
      description: "Installation of premium grade locks from trusted manufacturers for maximum security."
    },
    {
      icon: Lock,
      title: "All Lock Types",
      description: "Expert replacement of all lock types including deadbolts, mortise locks, and smart locks."
    },
    {
      icon: Key,
      title: "Key Solutions",
      description: "New keys provided with every lock change, including options for master key systems and restricted keys."
    }
  ]
};