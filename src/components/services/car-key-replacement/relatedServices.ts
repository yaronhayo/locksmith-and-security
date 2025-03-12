
import { Car, Key, KeySquare, Wrench } from "lucide-react";

export const relatedAutoServices = [
  {
    title: "Key Fob Programming",
    description: "Professional programming for remote key fobs and smart keys",
    path: "/services/auto-locksmith/key-fob-programming",
    icon: KeySquare
  },
  {
    title: "Car Key Duplicate",
    description: "Create spare keys for your vehicle to prevent lockouts",
    path: "/services/auto-locksmith/car-key-duplicate",
    icon: Key
  },
  {
    title: "Car Lockout",
    description: "Emergency lockout service when you're locked out of your vehicle",
    path: "/services/emergency-locksmith/car-lockout",
    icon: Car
  },
  {
    title: "Ignition Lock Cylinder",
    description: "Repair or replace damaged ignition systems",
    path: "/services/auto-locksmith/ignition-lock-cylinder",
    icon: Wrench
  }
];
