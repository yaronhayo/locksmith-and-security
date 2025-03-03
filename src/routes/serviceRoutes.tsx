import { lazy } from 'react';
import PageLayout from "@/components/layouts/PageLayout";
import { createBreadcrumbSchema } from "@/components/meta/schema/BreadcrumbSchema";

// Category Landing Pages
const EmergencyLocksmith = lazy(() => import("@/pages/services/emergency-locksmith"));
const ResidentialLocksmith = lazy(() => import("@/pages/services/residential-locksmith"));
const CommercialLocksmith = lazy(() => import("@/pages/services/commercial-locksmith"));
const AutoLocksmith = lazy(() => import("@/pages/services/auto-locksmith"));

// Emergency Locksmith Services
const CarLockout = lazy(() => import("@/pages/services/emergency-locksmith/car-lockout"));
const HouseLockout = lazy(() => import("@/pages/services/emergency-locksmith/house-lockout"));
const BusinessLockout = lazy(() => import("@/pages/services/emergency-locksmith/business-lockout"));
const StorageUnitLockout = lazy(() => import("@/pages/services/emergency-locksmith/storage-unit-lockout"));

// Residential Locksmith Services
const LockReplacement = lazy(() => import("@/pages/services/residential-locksmith/lock-replacement"));
const LockRekey = lazy(() => import("@/pages/services/residential-locksmith/lock-rekey"));
const LockRepair = lazy(() => import("@/pages/services/residential-locksmith/lock-repair"));
const GateLocks = lazy(() => import("@/pages/services/residential-locksmith/gate-locks"));

// Commercial Locksmith Services
const CommercialLockReplacement = lazy(() => import("@/pages/services/commercial-locksmith/lock-replacement"));
const CommercialLockRekey = lazy(() => import("@/pages/services/commercial-locksmith/lock-rekey"));
const EmergencyExitDevice = lazy(() => import("@/pages/services/commercial-locksmith/emergency-exit-device"));
const MasterKey = lazy(() => import("@/pages/services/commercial-locksmith/master-key"));
const AccessControl = lazy(() => import("@/pages/services/commercial-locksmith/access-control"));

// Auto Locksmith Services
const CarKeyReplacement = lazy(() => import("@/pages/services/auto-locksmith/car-key-replacement"));
const KeyFobProgramming = lazy(() => import("@/pages/services/auto-locksmith/key-fob-programming"));
const CarKeyDuplicate = lazy(() => import("@/pages/services/auto-locksmith/car-key-duplicate"));
const CarKeyCutting = lazy(() => import("@/pages/services/auto-locksmith/car-key-cutting"));
const IgnitionLockCylinder = lazy(() => import("@/pages/services/auto-locksmith/ignition-lock-cylinder"));

// Helper function to create breadcrumbs for service pages
const createServiceBreadcrumbs = (category: string, service: string) => {
  return createBreadcrumbSchema({
    breadcrumbs: [
      { name: "Home", item: "/" },
      { name: "Services", item: "/services" },
      { name: category, item: `/services/${category.toLowerCase().replace(' ', '-')}` },
      { name: service, item: `/services/${category.toLowerCase().replace(' ', '-')}/${service.toLowerCase().replace(' ', '-')}` }
    ]
  });
};

export const serviceRoutes = [
  // Category Landing Pages
  {
    path: "/services/emergency-locksmith",
    element: <PageLayout 
      title="Emergency Locksmith Services | 24/7 Urgent Locksmith Solutions" 
      description="Immediate 24/7 emergency locksmith services for car lockouts, home lockouts, business lockouts and more. Fast response, competitive rates, and licensed professionals."
      keywords="emergency locksmith, 24/7 locksmith, lockout service, car lockout, house lockout, business lockout, urgent locksmith"
      canonicalUrl="/services/emergency-locksmith"
      breadcrumbs={[
        { name: "Home", item: "/" },
        { name: "Services", item: "/services" },
        { name: "Emergency Locksmith", item: "/services/emergency-locksmith" }
      ]}
      ogImage="/lovable-uploads/308ce2b0-551b-48b6-b078-c7e793fa2153.png"
      ogType="article"
    >
      <EmergencyLocksmith />
    </PageLayout>
  },
  {
    path: "/services/residential-locksmith",
    element: <PageLayout 
      title="Residential Locksmith Services | Home Security Solutions" 
      description="Professional residential locksmith solutions including lock installation, repair, rekey, and upgrade services. Enhance your home security with our expert locksmiths."
      keywords="residential locksmith, home locksmith, house locks, door locks, lock installation, lock repair, lock rekey, deadbolt installation"
      canonicalUrl="/services/residential-locksmith"
      breadcrumbs={[
        { name: "Home", item: "/" },
        { name: "Services", item: "/services" },
        { name: "Residential Locksmith", item: "/services/residential-locksmith" }
      ]}
      ogImage="/lovable-uploads/5769d20e-e251-4e5f-a743-870d5c267bd1.png"
      ogType="article"
    >
      <ResidentialLocksmith />
    </PageLayout>
  },
  {
    path: "/services/commercial-locksmith",
    element: <PageLayout 
      title="Commercial Locksmith Services | Business Security Solutions" 
      description="Expert commercial locksmith solutions including master key systems, access control, high-security locks, and emergency exit devices for businesses of all sizes."
      keywords="commercial locksmith, business locksmith, commercial security, master key system, access control, high-security locks, emergency exit device"
      canonicalUrl="/services/commercial-locksmith"
      breadcrumbs={[
        { name: "Home", item: "/" },
        { name: "Services", item: "/services" },
        { name: "Commercial Locksmith", item: "/services/commercial-locksmith" }
      ]}
      ogImage="/lovable-uploads/1bbeb1e6-5581-4e09-9600-7d1859bb17c5.png"
      ogType="article"
    >
      <CommercialLocksmith />
    </PageLayout>
  },
  {
    path: "/services/auto-locksmith",
    element: <PageLayout 
      title="Auto Locksmith Services | Car Key & Lock Solutions" 
      description="Professional automotive locksmith services including car key replacement, key fob programming, ignition repair, and car lockouts. Service for all vehicle makes and models."
      keywords="auto locksmith, car locksmith, car key replacement, key fob programming, car lockout, ignition repair, car key duplication"
      canonicalUrl="/services/auto-locksmith"
      breadcrumbs={[
        { name: "Home", item: "/" },
        { name: "Services", item: "/services" },
        { name: "Auto Locksmith", item: "/services/auto-locksmith" }
      ]}
      ogImage="/lovable-uploads/88d354ba-8149-4bb1-9347-d5d0ff65dfe5.png"
      ogType="article"
    >
      <AutoLocksmith />
    </PageLayout>
  },

  // Emergency Locksmith Services
  {
    path: "/services/emergency-locksmith/car-lockout",
    element: <PageLayout title="24/7 Car Lockout Service" description="Emergency car lockout assistance"><CarLockout /></PageLayout>
  },
  {
    path: "/services/emergency-locksmith/house-lockout",
    element: <PageLayout title="24/7 House Lockout Service" description="Emergency house lockout solutions"><HouseLockout /></PageLayout>
  },
  {
    path: "/services/emergency-locksmith/business-lockout",
    element: <PageLayout title="24/7 Business Lockout Service" description="Emergency business lockout assistance"><BusinessLockout /></PageLayout>
  },
  {
    path: "/services/emergency-locksmith/storage-unit-lockout",
    element: <PageLayout title="Storage Unit Lockout Service" description="Emergency storage unit lockout solutions"><StorageUnitLockout /></PageLayout>
  },

  // Residential Locksmith Services
  {
    path: "/services/residential-locksmith/lock-replacement",
    element: <PageLayout title="Residential Lock Replacement" description="Professional lock replacement services"><LockReplacement /></PageLayout>
  },
  {
    path: "/services/residential-locksmith/lock-rekey",
    element: <PageLayout title="Residential Lock Rekey" description="Expert lock rekeying solutions"><LockRekey /></PageLayout>
  },
  {
    path: "/services/residential-locksmith/lock-repair",
    element: <PageLayout title="Lock Repair Service" description="Professional lock repair solutions"><LockRepair /></PageLayout>
  },
  {
    path: "/services/residential-locksmith/gate-locks",
    element: <PageLayout title="Gate Lock Installation & Repair" description="Professional gate lock services"><GateLocks /></PageLayout>
  },

  // Commercial Locksmith Services
  {
    path: "/services/commercial-locksmith/lock-replacement",
    element: <PageLayout title="Commercial Lock Replacement" description="Professional commercial lock replacement"><CommercialLockReplacement /></PageLayout>
  },
  {
    path: "/services/commercial-locksmith/lock-rekey",
    element: <PageLayout title="Commercial Lock Rekey" description="Expert commercial lock rekeying"><CommercialLockRekey /></PageLayout>
  },
  {
    path: "/services/commercial-locksmith/emergency-exit-device",
    element: <PageLayout title="Emergency Exit Device Installation" description="Professional push-bar installation"><EmergencyExitDevice /></PageLayout>
  },
  {
    path: "/services/commercial-locksmith/master-key",
    element: <PageLayout title="Master Key System" description="Professional master key system solutions"><MasterKey /></PageLayout>
  },
  {
    path: "/services/commercial-locksmith/access-control",
    element: <PageLayout title="Access Control Systems" description="Professional access control solutions"><AccessControl /></PageLayout>
  },

  // Auto Locksmith Services
  {
    path: "/services/auto-locksmith/car-key-replacement",
    element: <PageLayout title="Car Key Replacement" description="Professional car key replacement service"><CarKeyReplacement /></PageLayout>
  },
  {
    path: "/services/auto-locksmith/key-fob-programming",
    element: <PageLayout title="Key Fob Programming" description="Professional key fob programming service"><KeyFobProgramming /></PageLayout>
  },
  {
    path: "/services/auto-locksmith/car-key-duplicate",
    element: <PageLayout title="Car Key Duplication" description="Professional car key duplication service"><CarKeyDuplicate /></PageLayout>
  },
  {
    path: "/services/auto-locksmith/car-key-cutting",
    element: <PageLayout title="Car Key Cutting" description="Professional car key cutting service"><CarKeyCutting /></PageLayout>
  },
  {
    path: "/services/auto-locksmith/ignition-lock-cylinder",
    element: <PageLayout title="Ignition Lock Cylinder Replacement" description="Professional ignition lock cylinder service"><IgnitionLockCylinder /></PageLayout>
  }
];
