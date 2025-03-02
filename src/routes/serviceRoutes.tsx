import { lazy } from 'react';
import { createPageRoute } from './utils.tsx';

// Lazy load service pages
const EmergencyLockout = lazy(() => import("@/pages/services/emergency-lockout"));
const CarKeyReplacement = lazy(() => import("@/pages/services/car-key-replacement"));
const LockRepair = lazy(() => import("@/pages/services/lock-repair"));
const KeyDuplication = lazy(() => import("@/pages/services/key-duplication"));
const MasterKeySystems = lazy(() => import("@/pages/services/master-key-systems"));
const AccessControlSystems = lazy(() => import("@/pages/services/access-control-systems"));
const SecuritySystemInstallation = lazy(() => import("@/pages/services/security-system-installation"));
const SafeInstallation = lazy(() => import("@/pages/services/safe-installation"));

export const serviceRoutes = [
  createPageRoute("/services/emergency-lockout", <EmergencyLockout />, {
    title: "24/7 Emergency Lockout Service | Fast Response Locksmith",
    description: "24/7 emergency lockout services for homes, businesses, and vehicles. Fast and reliable locksmith service in North Bergen and surrounding areas.",
    keywords: "emergency lockout, 24/7 locksmith, car lockout, house lockout, business lockout",
    canonicalUrl: "https://247locksmithandsecurity.com/services/emergency-lockout",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
  createPageRoute("/services/car-key-replacement", <CarKeyReplacement />, {
    title: "Car Key Replacement | Professional Car Key Services",
    description: "Professional car key replacement services for all makes and models. Car key cutting and programming by certified technicians.",
    keywords: "car key replacement, car key cutting, car key programming, lost car key, car key locksmith",
    canonicalUrl: "https://247locksmithandsecurity.com/services/car-key-replacement",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
  createPageRoute("/services/lock-repair", <LockRepair />, {
    title: "Professional Lock Repair Services | Residential & Commercial",
    description: "Expert lock repair services for residential and commercial properties. Repairing damaged locks and ensuring your security.",
    keywords: "lock repair, residential lock repair, commercial lock repair, damaged lock, broken lock",
    canonicalUrl: "https://247locksmithandsecurity.com/services/lock-repair",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
  createPageRoute("/services/key-duplication", <KeyDuplication />, {
    title: "Key Duplication Services | Fast & Accurate Key Cutting",
    description: "Fast and accurate key duplication services for all types of keys. Get your keys duplicated by professional locksmiths.",
    keywords: "key duplication, key cutting, duplicate keys, key copy, locksmith key services",
    canonicalUrl: "https://247locksmithandsecurity.com/services/key-duplication",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
  createPageRoute("/services/master-key-systems", <MasterKeySystems />, {
    title: "Master Key Systems | Customized Security Solutions",
    description: "Customized master key systems for businesses and properties. Control access and enhance security with our master key solutions.",
    keywords: "master key system, commercial security, access control, key control, business security",
    canonicalUrl: "https://247locksmithandsecurity.com/services/master-key-systems",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
  createPageRoute("/services/access-control-systems", <AccessControlSystems />, {
    title: "Access Control Systems | Advanced Security Solutions",
    description: "Advanced access control systems for businesses. Keyless entry, card access, and biometric systems for enhanced security.",
    keywords: "access control, keyless entry, card access, biometric systems, commercial access control",
    canonicalUrl: "https://247locksmithandsecurity.com/services/access-control-systems",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
  createPageRoute("/services/security-system-installation", <SecuritySystemInstallation />, {
    title: "Security System Installation | Professional Security Solutions",
    description: "Professional security system installation for homes and businesses. Protect your property with our advanced security solutions.",
    keywords: "security system installation, home security, business security, alarm system, security solutions",
    canonicalUrl: "https://247locksmithandsecurity.com/services/security-system-installation",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
  createPageRoute("/services/safe-installation", <SafeInstallation />, {
    title: "Safe Installation Services | Secure Your Valuables",
    description: "Professional safe installation services for homes and businesses. Secure your valuables with our expert safe installation.",
    keywords: "safe installation, home safe, business safe, secure safe, valuables protection",
    canonicalUrl: "https://247locksmithandsecurity.com/services/safe-installation",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
];
