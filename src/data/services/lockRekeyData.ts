import { Clock, Shield, Lock, Key } from "lucide-react";
import { ServiceContent } from "@/types/lockoutServices";

export const lockRekeyData: ServiceContent = {
  title: "Lock Rekeying Services",
  description: "Professional lock rekeying services to enhance your security without full lock replacement.",
  services: [
    {
      icon: Clock,
      title: "Quick Rekeying Service",
      description: "Fast and efficient rekeying of your existing locks while maintaining their integrity."
    },
    {
      icon: Shield,
      title: "Security Enhancement",
      description: "Make old keys obsolete while keeping your current locks in place, perfect for security updates."
    },
    {
      icon: Lock,
      title: "Master Key Systems",
      description: "Create new master key systems or modify existing ones to match your access control needs."
    },
    {
      icon: Key,
      title: "New Keys Provided",
      description: "Get a fresh set of keys with your rekeying service, cut to precise specifications."
    }
  ]
};