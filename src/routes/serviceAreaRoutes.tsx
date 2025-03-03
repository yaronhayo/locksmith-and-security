
import { lazy } from 'react';
import PageLayout from "@/components/layouts/PageLayout";

// Lazy load service area pages
const NorthBergen = lazy(() => import("@/pages/service-areas/north-bergen"));
const UnionCity = lazy(() => import("@/pages/service-areas/union-city"));
const WestNewYork = lazy(() => import("@/pages/service-areas/west-new-york"));
const Guttenberg = lazy(() => import("@/pages/service-areas/guttenberg"));
const Weehawken = lazy(() => import("@/pages/service-areas/weehawken"));
const JerseyCity = lazy(() => import("@/pages/service-areas/jersey-city"));
const Hoboken = lazy(() => import("@/pages/service-areas/hoboken"));
const Secaucus = lazy(() => import("@/pages/service-areas/secaucus"));

export const serviceAreaRoutes = [
  {
    path: "/service-areas/north-bergen",
    element: <PageLayout title="North Bergen Locksmith Services" description="Professional locksmith services in North Bergen, NJ"><NorthBergen /></PageLayout>
  },
  {
    path: "/service-areas/union-city",
    element: <PageLayout title="Union City Locksmith Services" description="Professional locksmith services in Union City, NJ"><UnionCity /></PageLayout>
  },
  {
    path: "/service-areas/west-new-york",
    element: <PageLayout title="West New York Locksmith Services" description="Professional locksmith services in West New York, NJ"><WestNewYork /></PageLayout>
  },
  {
    path: "/service-areas/guttenberg",
    element: <PageLayout title="Guttenberg Locksmith Services" description="Professional locksmith services in Guttenberg, NJ"><Guttenberg /></PageLayout>
  },
  {
    path: "/service-areas/weehawken",
    element: <PageLayout title="Weehawken Locksmith Services" description="Professional locksmith services in Weehawken, NJ"><Weehawken /></PageLayout>
  },
  {
    path: "/service-areas/jersey-city",
    element: <PageLayout title="Jersey City Locksmith Services" description="Professional locksmith services in Jersey City, NJ"><JerseyCity /></PageLayout>
  },
  {
    path: "/service-areas/hoboken",
    element: <PageLayout title="Hoboken Locksmith Services" description="Professional locksmith services in Hoboken, NJ"><Hoboken /></PageLayout>
  },
  {
    path: "/service-areas/secaucus",
    element: <PageLayout title="Secaucus Locksmith Services" description="Professional locksmith services in Secaucus, NJ"><Secaucus /></PageLayout>
  }
];

