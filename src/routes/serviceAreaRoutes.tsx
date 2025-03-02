import { lazy } from 'react';
import { createPageRoute } from './utils';

// Lazy load service area pages
const NorthBergen = lazy(() => import("@/pages/service-areas/north-bergen"));
const JerseyCity = lazy(() => import("@/pages/service-areas/jersey-city"));
const Hoboken = lazy(() => import("@/pages/service-areas/hoboken"));
const UnionCity = lazy(() => import("@/pages/service-areas/union-city"));
const WestNewYork = lazy(() => import("@/pages/service-areas/west-new-york"));
const Weehawken = lazy(() => import("@/pages/service-areas/weehawken"));
const Secaucus = lazy(() => import("@/pages/service-areas/secaucus"));
const Guttenberg = lazy(() => import("@/pages/service-areas/guttenberg"));

export const serviceAreaRoutes = [
  createPageRoute("/service-areas/north-bergen", <NorthBergen />, {
    title: "Locksmith in North Bergen, NJ | 24/7 Emergency Service",
    description: "24/7 Emergency Locksmith Services in North Bergen, NJ. Fast response for car lockouts, house lockouts, and business security.",
    keywords: "locksmith North Bergen, emergency locksmith North Bergen, car lockout North Bergen, house lockout North Bergen",
    canonicalUrl: "https://247locksmithandsecurity.com/service-areas/north-bergen",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
  createPageRoute("/service-areas/jersey-city", <JerseyCity />, {
    title: "Locksmith in Jersey City, NJ | 24/7 Emergency Service",
    description: "24/7 Emergency Locksmith Services in Jersey City, NJ. Fast response for car lockouts, house lockouts, and business security.",
    keywords: "locksmith Jersey City, emergency locksmith Jersey City, car lockout Jersey City, house lockout Jersey City",
    canonicalUrl: "https://247locksmithandsecurity.com/service-areas/jersey-city",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
  createPageRoute("/service-areas/hoboken", <Hoboken />, {
    title: "Locksmith in Hoboken, NJ | 24/7 Emergency Service",
    description: "24/7 Emergency Locksmith Services in Hoboken, NJ. Fast response for car lockouts, house lockouts, and business security.",
    keywords: "locksmith Hoboken, emergency locksmith Hoboken, car lockout Hoboken, house lockout Hoboken",
    canonicalUrl: "https://247locksmithandsecurity.com/service-areas/hoboken",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
  createPageRoute("/service-areas/union-city", <UnionCity />, {
    title: "Locksmith in Union City, NJ | 24/7 Emergency Service",
    description: "24/7 Emergency Locksmith Services in Union City, NJ. Fast response for car lockouts, house lockouts, and business security.",
    keywords: "locksmith Union City, emergency locksmith Union City, car lockout Union City, house lockout Union City",
    canonicalUrl: "https://247locksmithandsecurity.com/service-areas/union-city",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
  createPageRoute("/service-areas/west-new-york", <WestNewYork />, {
    title: "Locksmith in West New York, NJ | 24/7 Emergency Service",
    description: "24/7 Emergency Locksmith Services in West New York, NJ. Fast response for car lockouts, house lockouts, and business security.",
    keywords: "locksmith West New York, emergency locksmith West New York, car lockout West New York, house lockout West New York",
    canonicalUrl: "https://247locksmithandsecurity.com/service-areas/west-new-york",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
  createPageRoute("/service-areas/weehawken", <Weehawken />, {
    title: "Locksmith in Weehawken, NJ | 24/7 Emergency Service",
    description: "24/7 Emergency Locksmith Services in Weehawken, NJ. Fast response for car lockouts, house lockouts, and business security.",
    keywords: "locksmith Weehawken, emergency locksmith Weehawken, car lockout Weehawken, house lockout Weehawken",
    canonicalUrl: "https://247locksmithandsecurity.com/service-areas/weehawken",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
  createPageRoute("/service-areas/secaucus", <Secaucus />, {
    title: "Locksmith in Secaucus, NJ | 24/7 Emergency Service",
    description: "24/7 Emergency Locksmith Services in Secaucus, NJ. Fast response for car lockouts, house lockouts, and business security.",
    keywords: "locksmith Secaucus, emergency locksmith Secaucus, car lockout Secaucus, house lockout Secaucus",
    canonicalUrl: "https://247locksmithandsecurity.com/service-areas/secaucus",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
  createPageRoute("/service-areas/guttenberg", <Guttenberg />, {
    title: "Locksmith in Guttenberg, NJ | 24/7 Emergency Service",
    description: "24/7 Emergency Locksmith Services in Guttenberg, NJ. Fast response for car lockouts, house lockouts, and business security.",
    keywords: "locksmith Guttenberg, emergency locksmith Guttenberg, car lockout Guttenberg, house lockout Guttenberg",
    canonicalUrl: "https://247locksmithandsecurity.com/service-areas/guttenberg",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
];
