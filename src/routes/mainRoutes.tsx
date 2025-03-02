
import { lazy } from 'react';
import Index from "@/pages/Index";
import { createPageRoute, createRoute } from './utils';

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
const Accessibility = lazy(() => import("@/pages/accessibility"));
const ThankYou = lazy(() => import("@/pages/thank-you"));
const Sitemap = lazy(() => import("@/pages/sitemap"));
const NotFound = lazy(() => import("@/pages/404"));

export const mainRoutes = [
  createRoute("/", <Index />, "Home", "Professional 24/7 locksmith services in North Bergen"),
  createPageRoute("/about", <About />, {
    title: "About Us | Locksmith & Security LLC",
    description: "Learn about our professional locksmith team serving North Bergen and surrounding areas. Licensed, insured, and available 24/7 for your security needs.",
    keywords: "locksmith about us, professional locksmith team, licensed locksmith, insured locksmith, north bergen locksmith",
    canonicalUrl: "https://247locksmithandsecurity.com/about",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
  createPageRoute("/contact", <Contact />, {
    title: "Contact Us | 24/7 Locksmith Services",
    description: "Need a locksmith? Contact us 24/7 for emergency locksmith services in North Bergen and surrounding areas. Call us or fill out our form for quick assistance.",
    keywords: "locksmith contact, emergency locksmith contact, 24/7 locksmith phone number, locksmith near me contact",
    canonicalUrl: "https://247locksmithandsecurity.com/contact",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
  createPageRoute("/services", <Services />, {
    title: "Professional Locksmith Services | Residential, Commercial & Auto",
    description: "Comprehensive locksmith services for residential, commercial, and automotive needs. 24/7 emergency service available in North Bergen and surrounding areas.",
    keywords: "locksmith services, residential locksmith, commercial locksmith, auto locksmith, emergency locksmith services",
    canonicalUrl: "https://247locksmithandsecurity.com/services",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
  createPageRoute("/reviews", <Reviews />, {
    title: "Customer Reviews | 5-Star Rated Locksmith Services",
    description: "Read what our customers say about our locksmith services. See why we are rated 5 stars for our emergency locksmith services, car lockouts, and more.",
    keywords: "locksmith reviews, customer testimonials, 5 star locksmith, best locksmith reviews, emergency locksmith reviews",
    canonicalUrl: "https://247locksmithandsecurity.com/reviews",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
  createPageRoute("/faq", <FAQ />, {
    title: "Locksmith FAQ | Answers to Common Security Questions",
    description: "Find answers to frequently asked questions about our locksmith services. Learn about pricing, response times, and more for your security needs.",
    keywords: "locksmith FAQ, locksmith questions, security questions, locksmith pricing, emergency locksmith response time",
    canonicalUrl: "https://247locksmithandsecurity.com/faq",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
  createPageRoute("/book-online", <BookOnline />, {
    title: "Book a Locksmith Online | Fast & Easy Scheduling",
    description: "Schedule locksmith services online. Fast and easy booking for all your residential, commercial, and automotive locksmith needs.",
    keywords: "book locksmith online, schedule locksmith service, locksmith appointment, online locksmith booking",
    canonicalUrl: "https://247locksmithandsecurity.com/book-online",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
  createPageRoute("/service-areas", <ServiceAreas />, {
    title: "Locksmith Service Areas | North Bergen & Surrounding Cities",
    description: "We provide professional locksmith services throughout North Bergen, Jersey City, Hoboken, and other surrounding areas. 24/7 emergency service available.",
    keywords: "locksmith service areas, north bergen locksmith, jersey city locksmith, hoboken locksmith, locksmith near me",
    canonicalUrl: "https://247locksmithandsecurity.com/service-areas",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
  createPageRoute("/privacy-policy", <PrivacyPolicy />, {
    title: "Privacy Policy | Locksmith & Security LLC",
    description: "Our privacy policy explains how we collect, use, and protect your personal information when you use our locksmith services or visit our website.",
    keywords: "locksmith privacy policy, privacy terms, data protection policy, website privacy policy",
    canonicalUrl: "https://247locksmithandsecurity.com/privacy-policy",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
  createPageRoute("/terms-conditions", <TermsConditions />, {
    title: "Terms & Conditions | Locksmith & Security LLC",
    description: "Read our terms and conditions for using our locksmith services and website. Learn about our service agreements, warranties, and policies.",
    keywords: "locksmith terms and conditions, service terms, warranty policy, locksmith service agreement",
    canonicalUrl: "https://247locksmithandsecurity.com/terms-conditions",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
  createPageRoute("/accessibility", <Accessibility />, {
    title: "Accessibility Statement | Locksmith & Security LLC",
    description: "Our commitment to digital accessibility and ensuring our website is usable by people of all abilities and disabilities.",
    keywords: "locksmith accessibility, website accessibility, ADA compliance, accessible locksmith services",
    canonicalUrl: "https://247locksmithandsecurity.com/accessibility",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
  createPageRoute("/thank-you", <ThankYou />, {
    title: "Thank You | Locksmith & Security LLC",
    description: "Thank you for contacting us. A member of our team will be in touch with you shortly to assist with your locksmith needs.",
    keywords: "locksmith thank you, form submission confirmation, contact confirmation",
    canonicalUrl: "https://247locksmithandsecurity.com/thank-you",
    noindex: true,
    nofollow: true,
    modifiedDate: "2023-12-15"
  }),
  createPageRoute("/sitemap", <Sitemap />, {
    title: "Sitemap | Locksmith & Security LLC",
    description: "Browse our sitemap to navigate through our website and find information about our locksmith services, locations, and more.",
    keywords: "locksmith sitemap, website navigation, site structure, find locksmith services",
    canonicalUrl: "https://247locksmithandsecurity.com/sitemap",
    noindex: false,
    nofollow: false,
    modifiedDate: "2023-12-15"
  }),
  createPageRoute("*", <NotFound />, {
    title: "Page Not Found | Locksmith & Security LLC",
    description: "Sorry, the page you're looking for cannot be found. Please navigate to our homepage or contact us for assistance.",
    keywords: "page not found, 404 error, missing page, locksmith website error",
    canonicalUrl: "https://247locksmithandsecurity.com/404",
    noindex: true,
    nofollow: true,
    modifiedDate: "2023-12-15"
  })
];
