import { lazy } from 'react';
import Index from "@/pages/Index";
import PageLayout from "@/components/layouts/PageLayout";

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
const NotFound = lazy(() => import("@/pages/404"));

export const mainRoutes = [
  {
    path: "/",
    element: <PageLayout title="Home" description="24/7 Locksmith & Security Services"><Index /></PageLayout>
  },
  {
    path: "/about",
    element: <PageLayout title="About Us" description="Learn about our locksmith services and expertise"><About /></PageLayout>
  },
  {
    path: "/contact",
    element: <PageLayout title="Contact Us" description="Get in touch with our professional locksmith team"><Contact /></PageLayout>
  },
  {
    path: "/services",
    element: <PageLayout title="Our Services" description="Explore our comprehensive locksmith services"><Services /></PageLayout>
  },
  {
    path: "/reviews",
    element: <PageLayout title="Customer Reviews" description="See what our customers say about our services"><Reviews /></PageLayout>
  },
  {
    path: "/faq",
    element: <PageLayout title="FAQ" description="Frequently asked questions about our locksmith services"><FAQ /></PageLayout>
  },
  {
    path: "/book-online",
    element: <PageLayout title="Book Online" description="Schedule your locksmith service appointment online"><BookOnline /></PageLayout>
  },
  {
    path: "/service-areas",
    element: <PageLayout title="Service Areas" description="Areas we serve with our locksmith services"><ServiceAreas /></PageLayout>
  },
  {
    path: "/privacy-policy",
    element: <PageLayout title="Privacy Policy" description="Our privacy policy and data protection practices"><PrivacyPolicy /></PageLayout>
  },
  {
    path: "/terms-conditions",
    element: <PageLayout title="Terms & Conditions" description="Terms and conditions for using our services"><TermsConditions /></PageLayout>
  },
  {
    path: "*",
    element: <PageLayout title="Page Not Found" description="The page you're looking for doesn't exist"><NotFound /></PageLayout>
  }
];