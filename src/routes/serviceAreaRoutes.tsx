
import { lazy } from 'react';

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
    element: <NorthBergen />
  },
  {
    path: "/service-areas/union-city",
    element: <UnionCity />
  },
  {
    path: "/service-areas/west-new-york",
    element: <WestNewYork />
  },
  {
    path: "/service-areas/guttenberg",
    element: <Guttenberg />
  },
  {
    path: "/service-areas/weehawken",
    element: <Weehawken />
  },
  {
    path: "/service-areas/jersey-city",
    element: <JerseyCity />
  },
  {
    path: "/service-areas/hoboken",
    element: <Hoboken />
  },
  {
    path: "/service-areas/secaucus",
    element: <Secaucus />
  }
];
