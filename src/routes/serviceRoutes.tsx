
import { lazy } from 'react';
import { createPageRoute } from './utils.tsx';

// Lazy load service pages
const EmergencyLockout = lazy(() => import("@/pages/services/emergency-locksmith/index"));
const CarLockout = lazy(() => import("@/pages/services/emergency-locksmith/car-lockout"));
const HouseLockout = lazy(() => import("@/pages/services/emergency-locksmith/house-lockout"));
const BusinessLockout = lazy(() => import("@/pages/services/emergency-locksmith/business-lockout"));
const StorageUnitLockout = lazy(() => import("@/pages/services/emergency-locksmith/storage-unit-lockout"));

const ResidentialLocksmith = lazy(() => import("@/pages/services/residential-locksmith/index"));
const LockReplacement = lazy(() => import("@/pages/services/residential-locksmith/lock-replacement"));
const LockRekey = lazy(() => import("@/pages/services/residential-locksmith/lock-rekey"));
const LockRepair = lazy(() => import("@/pages/services/residential-locksmith/lock-repair"));
const GateLocks = lazy(() => import("@/pages/services/residential-locksmith/gate-locks"));

const CommercialLocksmith = lazy(() => import("@/pages/services/commercial-locksmith/index"));
const CommercialLockReplacement = lazy(() => import("@/pages/services/commercial-locksmith/lock-replacement"));
const CommercialLockRekey = lazy(() => import("@/pages/services/commercial-locksmith/lock-rekey"));
const EmergencyExitDevice = lazy(() => import("@/pages/services/commercial-locksmith/emergency-exit-device"));
const MasterKeySystems = lazy(() => import("@/pages/services/commercial-locksmith/master-key"));
const AccessControlSystems = lazy(() => import("@/pages/services/commercial-locksmith/access-control"));

const AutoLocksmith = lazy(() => import("@/pages/services/auto-locksmith/index"));
const CarKeyReplacement = lazy(() => import("@/pages/services/auto-locksmith/car-key-replacement"));
const KeyFobProgramming = lazy(() => import("@/pages/services/auto-locksmith/key-fob-programming"));
const KeyDuplication = lazy(() => import("@/pages/services/auto-locksmith/car-key-duplicate"));
const CarKeyCutting = lazy(() => import("@/pages/services/auto-locksmith/car-key-cutting"));
const IgnitionLockCylinder = lazy(() => import("@/pages/services/auto-locksmith/ignition-lock-cylinder"));

const ServicesIndex = lazy(() => import("@/pages/services/index"));

export const serviceRoutes = [
  // Main services page
  createPageRoute("/services", <ServicesIndex />, {
    title: "Professional Locksmith Services | North Bergen, NJ",
    description: "Comprehensive locksmith services for residential, commercial, and automotive needs. Available 24/7 for emergency locksmith services.",
    keywords: "locksmith services, emergency locksmith, residential locksmith, commercial locksmith, auto locksmith",
    canonicalUrl: "https://247locksmithandsecurity.com/services",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),

  // Emergency Locksmith Routes
  createPageRoute("/services/emergency-locksmith", <EmergencyLockout />, {
    title: "24/7 Emergency Locksmith Services | Fast Response",
    description: "Emergency locksmith services available 24/7. Fast response for lockouts, broken keys, and other urgent situations.",
    keywords: "emergency locksmith, 24/7 locksmith, emergency lockout, broken key extraction",
    canonicalUrl: "https://247locksmithandsecurity.com/services/emergency-locksmith",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
  createPageRoute("/services/emergency-locksmith/car-lockout", <CarLockout />, {
    title: "Car Lockout Services | 24/7 Emergency Locksmith",
    description: "Professional car lockout services by certified locksmiths. Available 24/7 for emergency vehicle lockouts.",
    keywords: "car lockout, auto lockout, vehicle lockout, emergency car locksmith",
    canonicalUrl: "https://247locksmithandsecurity.com/services/emergency-locksmith/car-lockout",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
  createPageRoute("/services/emergency-locksmith/house-lockout", <HouseLockout />, {
    title: "House Lockout Services | 24/7 Emergency Locksmith",
    description: "Professional house lockout services by certified locksmiths. Available 24/7 for residential lockouts.",
    keywords: "house lockout, home lockout, residential lockout, emergency locksmith",
    canonicalUrl: "https://247locksmithandsecurity.com/services/emergency-locksmith/house-lockout",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
  createPageRoute("/services/emergency-locksmith/business-lockout", <BusinessLockout />, {
    title: "Business Lockout Services | 24/7 Commercial Locksmith",
    description: "Professional business lockout services by certified locksmiths. Available 24/7 for commercial lockouts.",
    keywords: "business lockout, commercial lockout, office lockout, emergency locksmith",
    canonicalUrl: "https://247locksmithandsecurity.com/services/emergency-locksmith/business-lockout",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
  createPageRoute("/services/emergency-locksmith/storage-unit-lockout", <StorageUnitLockout />, {
    title: "Storage Unit Lockout Services | 24/7 Locksmith",
    description: "Professional storage unit lockout services by certified locksmiths. Available 24/7 for storage emergencies.",
    keywords: "storage unit lockout, storage lockout, emergency locksmith",
    canonicalUrl: "https://247locksmithandsecurity.com/services/emergency-locksmith/storage-unit-lockout",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
  
  // Residential Locksmith Routes
  createPageRoute("/services/residential-locksmith", <ResidentialLocksmith />, {
    title: "Residential Locksmith Services | Home Security Experts",
    description: "Professional residential locksmith services for all your home security needs. Lock installation, repair, and rekeying.",
    keywords: "residential locksmith, home security, lock installation, lock repair, rekey",
    canonicalUrl: "https://247locksmithandsecurity.com/services/residential-locksmith",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
  createPageRoute("/services/residential-locksmith/lock-replacement", <LockReplacement />, {
    title: "Lock Replacement Services | Residential Locksmith",
    description: "Professional lock replacement services for homes. Upgrade your security with modern locks and hardware.",
    keywords: "lock replacement, new locks, residential locksmith, home security",
    canonicalUrl: "https://247locksmithandsecurity.com/services/residential-locksmith/lock-replacement",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
  createPageRoute("/services/residential-locksmith/lock-rekey", <LockRekey />, {
    title: "Lock Rekey Services | Residential Locksmith",
    description: "Professional lock rekeying services for homes. Change your locks without replacing the hardware.",
    keywords: "lock rekey, change locks, residential locksmith, home security",
    canonicalUrl: "https://247locksmithandsecurity.com/services/residential-locksmith/lock-rekey",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
  createPageRoute("/services/residential-locksmith/lock-repair", <LockRepair />, {
    title: "Lock Repair Services | Residential Locksmith",
    description: "Professional lock repair services for homes. Fix malfunctioning locks and restore security.",
    keywords: "lock repair, fix locks, residential locksmith, home security",
    canonicalUrl: "https://247locksmithandsecurity.com/services/residential-locksmith/lock-repair",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
  createPageRoute("/services/residential-locksmith/gate-locks", <GateLocks />, {
    title: "Gate Lock Installation & Repair | Residential Locksmith",
    description: "Professional gate lock services for homes. Installation, repair, and maintenance of gate security systems.",
    keywords: "gate locks, gate security, residential locksmith, outdoor security",
    canonicalUrl: "https://247locksmithandsecurity.com/services/residential-locksmith/gate-locks",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
  
  // Commercial Locksmith Routes
  createPageRoute("/services/commercial-locksmith", <CommercialLocksmith />, {
    title: "Commercial Locksmith Services | Business Security Solutions",
    description: "Professional commercial locksmith services for businesses. Lock systems, access control, and security solutions.",
    keywords: "commercial locksmith, business security, commercial locks, access control",
    canonicalUrl: "https://247locksmithandsecurity.com/services/commercial-locksmith",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
  createPageRoute("/services/commercial-locksmith/lock-replacement", <CommercialLockReplacement />, {
    title: "Commercial Lock Replacement | Business Security",
    description: "Professional commercial lock replacement services. Secure your business with high-quality locks and hardware.",
    keywords: "commercial lock replacement, business locks, security hardware, commercial locksmith",
    canonicalUrl: "https://247locksmithandsecurity.com/services/commercial-locksmith/lock-replacement",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
  createPageRoute("/services/commercial-locksmith/lock-rekey", <CommercialLockRekey />, {
    title: "Commercial Lock Rekey | Business Security",
    description: "Professional commercial lock rekeying services. Update your business security by rekeying existing locks.",
    keywords: "commercial lock rekey, business security, change locks, commercial locksmith",
    canonicalUrl: "https://247locksmithandsecurity.com/services/commercial-locksmith/lock-rekey",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
  createPageRoute("/services/commercial-locksmith/emergency-exit-device", <EmergencyExitDevice />, {
    title: "Emergency Exit Device Services | Commercial Security",
    description: "Professional emergency exit device installation and repair. Ensure safety standards for your business exits.",
    keywords: "emergency exit device, panic bar, exit hardware, commercial security",
    canonicalUrl: "https://247locksmithandsecurity.com/services/commercial-locksmith/emergency-exit-device",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
  createPageRoute("/services/commercial-locksmith/master-key", <MasterKeySystems />, {
    title: "Master Key System Services | Commercial Security",
    description: "Professional master key system design and implementation. Customize access control for your business.",
    keywords: "master key system, access control, key hierarchy, commercial security",
    canonicalUrl: "https://247locksmithandsecurity.com/services/commercial-locksmith/master-key",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
  createPageRoute("/services/commercial-locksmith/access-control", <AccessControlSystems />, {
    title: "Access Control System Services | Commercial Security",
    description: "Professional access control system installation and management. Advanced security solutions for businesses.",
    keywords: "access control system, keyless entry, security system, commercial security",
    canonicalUrl: "https://247locksmithandsecurity.com/services/commercial-locksmith/access-control",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
  
  // Auto Locksmith Routes
  createPageRoute("/services/auto-locksmith", <AutoLocksmith />, {
    title: "Auto Locksmith Services | Vehicle Key & Lock Solutions",
    description: "Professional automotive locksmith services. Car key replacement, programming, and lockout assistance.",
    keywords: "auto locksmith, car key, key fob, vehicle lockout, ignition repair",
    canonicalUrl: "https://247locksmithandsecurity.com/services/auto-locksmith",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
  createPageRoute("/services/auto-locksmith/car-key-replacement", <CarKeyReplacement />, {
    title: "Car Key Replacement Services | Auto Locksmith",
    description: "Professional car key replacement services. New keys for all makes and models, including transponder keys.",
    keywords: "car key replacement, lost car key, new car key, auto locksmith",
    canonicalUrl: "https://247locksmithandsecurity.com/services/auto-locksmith/car-key-replacement",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
  createPageRoute("/services/auto-locksmith/key-fob-programming", <KeyFobProgramming />, {
    title: "Key Fob Programming Services | Auto Locksmith",
    description: "Professional key fob programming services. Program remote keys and fobs for all vehicle makes and models.",
    keywords: "key fob programming, remote key, car remote, auto locksmith",
    canonicalUrl: "https://247locksmithandsecurity.com/services/auto-locksmith/key-fob-programming",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
  createPageRoute("/services/auto-locksmith/car-key-duplicate", <KeyDuplication />, {
    title: "Car Key Duplication Services | Auto Locksmith",
    description: "Professional car key duplication services. Get spare keys for all vehicle makes and models.",
    keywords: "car key duplicate, spare car key, copy car key, auto locksmith",
    canonicalUrl: "https://247locksmithandsecurity.com/services/auto-locksmith/car-key-duplicate",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
  createPageRoute("/services/auto-locksmith/car-key-cutting", <CarKeyCutting />, {
    title: "Car Key Cutting Services | Auto Locksmith",
    description: "Professional car key cutting services. Precision key cutting for all vehicle makes and models.",
    keywords: "car key cutting, cut car key, auto locksmith, vehicle key",
    canonicalUrl: "https://247locksmithandsecurity.com/services/auto-locksmith/car-key-cutting",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
  createPageRoute("/services/auto-locksmith/ignition-lock-cylinder", <IgnitionLockCylinder />, {
    title: "Ignition Lock Cylinder Repair & Replacement | Auto Locksmith",
    description: "Professional ignition lock cylinder services. Repair and replacement for all vehicle makes and models.",
    keywords: "ignition lock cylinder, ignition repair, ignition replacement, auto locksmith",
    canonicalUrl: "https://247locksmithandsecurity.com/services/auto-locksmith/ignition-lock-cylinder",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
];
