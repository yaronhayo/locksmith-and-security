import { NavItem } from "../types/navigation";

export const navItems: readonly NavItem[] = [
  { path: "/", label: "Home", showMobileOnly: true },
  { 
    path: "/services", 
    label: "Services",
    children: [
      { path: "/services/house-lockout", label: "House Lockout" },
      { path: "/services/car-lockout", label: "Car Lockout" },
      { path: "/services/business-lockout", label: "Business Lockout" },
      { path: "/services/lock-change", label: "Lock Change" },
      { path: "/services/lock-rekey", label: "Lock Rekey" },
      { path: "/services/business-lock-change", label: "Business Lock Change" },
      { path: "/services/new-car-key", label: "New Car Key" },
      { path: "/services/car-key-program", label: "Car Key Program" },
    ]
  },
  { path: "/service-areas", label: "Service Areas" },
  { path: "/about", label: "About" },
  { path: "/reviews", label: "Reviews" },
  { path: "/contact", label: "Contact" },
] as const;