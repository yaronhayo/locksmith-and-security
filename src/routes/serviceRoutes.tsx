
import { lazy } from 'react';
import PageLayout from "@/components/layouts/PageLayout";

// Lazy load service pages
const BusinessLockout = lazy(() => import("@/pages/services/business-lockout"));
const CarKeyProgram = lazy(() => import("@/pages/services/car-key-program"));
const CarLockout = lazy(() => import("@/pages/services/car-lockout"));
const HouseLockout = lazy(() => import("@/pages/services/house-lockout"));
const LockRekey = lazy(() => import("@/pages/services/lock-rekey"));
const NewCarKey = lazy(() => import("@/pages/services/new-car-key"));
const BusinessLockChange = lazy(() => import("@/pages/services/business-lock-change"));

export const serviceRoutes = [
  {
    path: "/services/business-lockout",
    element: <PageLayout title="Business Lockout Services" description="Professional business lockout solutions"><BusinessLockout /></PageLayout>
  },
  {
    path: "/services/car-key-program",
    element: <PageLayout title="Car Key Programming" description="Expert car key programming services"><CarKeyProgram /></PageLayout>
  },
  {
    path: "/services/car-lockout",
    element: <PageLayout title="Car Lockout Services" description="24/7 car lockout assistance"><CarLockout /></PageLayout>
  },
  {
    path: "/services/house-lockout",
    element: <PageLayout title="House Lockout Services" description="Emergency house lockout solutions"><HouseLockout /></PageLayout>
  },
  {
    path: "/services/lock-rekey",
    element: <PageLayout title="Lock Rekey Services" description="Expert lock rekeying solutions"><LockRekey /></PageLayout>
  },
  {
    path: "/services/new-car-key",
    element: <PageLayout title="New Car Key Services" description="New car key cutting and programming"><NewCarKey /></PageLayout>
  },
  {
    path: "/services/business-lock-change",
    element: <PageLayout title="Business Lock Change" description="Professional business lock change and replacement services"><BusinessLockChange /></PageLayout>
  }
];
