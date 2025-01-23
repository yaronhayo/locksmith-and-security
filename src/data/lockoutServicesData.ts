import { ServicesData } from "@/types/lockoutServices";
import { businessLockoutServices, businessLockChangeServices } from "./services/businessServices";
import { carLockoutServices, carKeyServices } from "./services/carServices";
import { houseLockoutServices, lockChangeServices, lockRekeyServices } from "./services/residentialServices";

export const servicesData: ServicesData = {
  'business-lockout': {
    title: "Commercial Lockout Solutions",
    description: "Professional business lockout services available 24/7 for all types of commercial properties. Fast response and secure entry by licensed locksmiths.",
    services: businessLockoutServices
  },
  'business-lock-change': {
    title: "Commercial Lock Change Services",
    description: "Professional lock replacement services for businesses, ensuring maximum security and access control for your commercial property.",
    services: businessLockChangeServices
  },
  'car-lockout': {
    title: "Car Lockout Services",
    description: "Professional auto locksmith services tailored to your emergency needs, delivered with expertise and care.",
    services: carLockoutServices
  },
  'house-lockout': {
    title: "Residential Lockout Services",
    description: "Professional residential locksmith services for your home security needs, delivered with expertise and care.",
    services: houseLockoutServices
  },
  'lock-change': {
    title: "Lock Change Services",
    description: "Professional lock replacement services for enhanced security, delivered with expertise and care.",
    services: lockChangeServices
  },
  'lock-rekey': {
    title: "Lock Rekeying Services",
    description: "Professional lock rekeying services to enhance your security without full lock replacement.",
    services: lockRekeyServices
  },
  'new-car-key': {
    title: "New Car Key Services",
    description: "Professional car key creation and programming services for all vehicle makes and models.",
    services: carKeyServices
  },
  'car-key-program': {
    title: "Car Key Programming Services",
    description: "Professional programming services for all types of car keys and remote fobs.",
    services: carKeyServices
  }
};