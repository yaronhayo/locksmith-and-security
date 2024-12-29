import { Clock, Shield, Building2, Key, Lock } from "lucide-react";
import { ServicesData } from "@/types/lockoutServices";

export const servicesData: ServicesData = {
  'business-lockout': {
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
  },
  'business-lock-change': {
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
  },
  'car-lockout': {
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
  },
  'house-lockout': {
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
  },
  'lock-change': {
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
  },
  'lock-rekey': {
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
  },
  'new-car-key': {
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
  },
  'car-key-program': {
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
  }
};
