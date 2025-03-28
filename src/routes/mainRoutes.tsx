
import { lazy } from 'react';
import Index from "@/pages/Index";
import ThankYou from "@/pages/thank-you"; // Import directly instead of lazy-loading

// Lazy load main pages
const About = lazy(() => import("@/pages/about"));
const Contact = lazy(() => import("@/pages/contact"));
const Services = lazy(() => import("@/pages/services"));
const Reviews = lazy(() => import("@/pages/reviews"));
const FAQ = lazy(() => import("@/pages/faq"));
const BookOnline = lazy(() => import("@/pages/book-online"));
const ServiceAreas = lazy(() => import("@/pages/service-areas"));
const PrivacyPolicy = lazy(() => import("@/pages/privacy-policy"));
const TermsConditions = lazy(() => import("@/pages/terms-conditions"));
const Sitemap = lazy(() => import("@/pages/sitemap"));
const NotFound = lazy(() => import("@/pages/404"));

export const mainRoutes = [
  {
    path: "/",
    element: <Index />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/services",
    element: <Services />
  },
  {
    path: "/reviews",
    element: <Reviews />
  },
  {
    path: "/faq",
    element: <FAQ />
  },
  {
    path: "/book-online",
    element: <BookOnline />
  },
  {
    path: "/service-areas",
    element: <ServiceAreas />
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />
  },
  {
    path: "/terms-conditions",
    element: <TermsConditions />
  },
  {
    path: "/thank-you",
    element: <ThankYou />
  },
  {
    path: "/sitemap",
    element: <Sitemap />
  },
  {
    path: "*",
    element: <NotFound />
  }
];
