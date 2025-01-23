import { Clock, Shield, Building2, Key } from "lucide-react";
import { ServiceItem } from "@/types/lockoutServices";

export const houseLockoutServices: ServiceItem[] = [
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
];

export const lockChangeServices: ServiceItem[] = [
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
    icon: Building2,
    title: "All Lock Types",
    description: "Expert replacement of all lock types including deadbolts, mortise locks, and smart locks."
  },
  {
    icon: Key,
    title: "Key Solutions",
    description: "New keys provided with every lock change, including options for master key systems and restricted keys."
  }
];

export const lockRekeyServices: ServiceItem[] = [
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
    icon: Building2,
    title: "Master Key Systems",
    description: "Create new master key systems or modify existing ones to match your access control needs."
  },
  {
    icon: Key,
    title: "New Keys Provided",
    description: "Get a fresh set of keys with your rekeying service, cut to precise specifications."
  }
];