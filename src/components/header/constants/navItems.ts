
import { NavItem } from "../types/navigation";

export const navItems: readonly NavItem[] = [
  { path: "/", label: "Home", showMobileOnly: true },
  { 
    path: "/services", 
    label: "Services",
    children: [
      { 
        path: "/services/emergency-locksmith",
        label: "Emergency Locksmith",
        children: [
          { path: "/services/emergency-locksmith/car-lockout", label: "Car Lockout" },
          { path: "/services/emergency-locksmith/house-lockout", label: "House Lockout" },
          { path: "/services/emergency-locksmith/business-lockout", label: "Business Lockout" },
          { path: "/services/emergency-locksmith/storage-unit-lockout", label: "Storage Unit Lockout" }
        ]
      },
      { 
        path: "/services/residential-locksmith",
        label: "Residential Locksmith",
        children: [
          { path: "/services/residential-locksmith/lock-replacement", label: "Lock Replacement" },
          { path: "/services/residential-locksmith/lock-rekey", label: "Lock Rekey" },
          { path: "/services/residential-locksmith/lock-repair", label: "Lock Repair" },
          { path: "/services/residential-locksmith/gate-locks", label: "Gate Locks" }
        ]
      },
      { 
        path: "/services/commercial-locksmith",
        label: "Commercial Locksmith",
        children: [
          { path: "/services/commercial-locksmith/lock-replacement", label: "Commercial Lock Replacement" },
          { path: "/services/commercial-locksmith/lock-rekey", label: "Commercial Lock Rekey" },
          { path: "/services/commercial-locksmith/emergency-exit-device", label: "Emergency Exit Device" },
          { path: "/services/commercial-locksmith/master-key", label: "Master Key" },
          { path: "/services/commercial-locksmith/access-control", label: "Access Control" }
        ]
      },
      { 
        path: "/services/auto-locksmith",
        label: "Auto Locksmith",
        children: [
          { path: "/services/auto-locksmith/car-key-replacement", label: "Car Key Replacement" },
          { path: "/services/auto-locksmith/key-fob-programming", label: "Key Fob Programming" },
          { path: "/services/auto-locksmith/car-key-duplicate", label: "Car Key Duplicate" },
          { path: "/services/auto-locksmith/car-key-cutting", label: "Car Key Cutting" },
          { path: "/services/auto-locksmith/ignition-lock-cylinder", label: "Ignition Lock Cylinder" }
        ]
      }
    ]
  },
  { 
    path: "/service-areas", 
    label: "Service Areas",
    children: [
      { path: "/service-areas/north-bergen", label: "North Bergen" },
      { path: "/service-areas/union-city", label: "Union City" },
      { path: "/service-areas/west-new-york", label: "West New York" },
      { path: "/service-areas/weehawken", label: "Weehawken" },
      { path: "/service-areas/jersey-city", label: "Jersey City" },
      { path: "/service-areas/hoboken", label: "Hoboken" },
      { path: "/service-areas/secaucus", label: "Secaucus" },
      { path: "/service-areas/guttenberg", label: "Guttenberg" }
    ]
  },
  { path: "/faq", label: "FAQ" },
  { path: "/reviews", label: "Reviews" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" }
] as const;
