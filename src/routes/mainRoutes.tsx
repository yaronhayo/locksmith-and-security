
import React from 'react';
import { lazy } from 'react';
import { createPageRoute, createRoute } from './utils';

// Lazy-loaded components
const Index = lazy(() => import('@/pages/Index'));
const About = lazy(() => import('@/pages/about'));
const Contact = lazy(() => import('@/pages/contact'));
const BookOnline = lazy(() => import('@/pages/book-online'));
const ServiceAreas = lazy(() => import('@/pages/service-areas'));
const Reviews = lazy(() => import('@/pages/reviews'));
const FAQ = lazy(() => import('@/pages/faq'));
const PrivacyPolicy = lazy(() => import('@/pages/privacy-policy'));
const TermsConditions = lazy(() => import('@/pages/terms-conditions'));
const Accessibility = lazy(() => import('@/pages/accessibility'));
const ThankYou = lazy(() => import('@/pages/thank-you'));
const Sitemap = lazy(() => import('@/pages/sitemap'));
const NotFound = lazy(() => import('@/pages/404'));

// Debugging
console.log('Loading mainRoutes');

/**
 * Main application routes
 */
export const mainRoutes = [
  createPageRoute('/', <Index />, {
    title: '24/7 Emergency Locksmith Services in North Bergen, NJ | Licensed & Insured',
    description: 'Expert 24/7 locksmith services in North Bergen, NJ. Fast response for emergencies, car lockouts, home lockouts, and business security. Professional, licensed, and insured locksmiths.',
    keywords: 'emergency locksmith, lockout services, car lockout, house lockout, business lockout, lock change, lock rekey, North Bergen locksmith, 24/7 locksmith',
    canonicalUrl: 'https://247locksmithandsecurity.com/',
    noindex: false,
    nofollow: false
  }),
  
  createPageRoute('/about', <About />, {
    title: 'About Locksmith & Security LLC | Trusted Locksmiths in North Bergen',
    description: 'Learn about Locksmith & Security LLC. We provide 24/7 professional locksmith services in North Bergen and surrounding areas. Fully licensed, insured, and BBB accredited.',
    keywords: 'about locksmith, professional locksmith, licensed locksmith, insured locksmith, North Bergen locksmith, locksmith company, locksmith history',
    canonicalUrl: 'https://247locksmithandsecurity.com/about',
    noindex: false,
    nofollow: false
  }),
  
  createPageRoute('/contact', <Contact />, {
    title: 'Contact Us | 24/7 Locksmith Services in North Bergen, NJ',
    description: 'Contact Locksmith & Security LLC for immediate locksmith services or to schedule an appointment. Available 24/7 for all residential, commercial, and automotive locksmith needs.',
    keywords: 'contact locksmith, locksmith phone number, locksmith address, locksmith hours, locksmith services, 24/7 locksmith',
    canonicalUrl: 'https://247locksmithandsecurity.com/contact',
    noindex: false,
    nofollow: false
  }),
  
  createPageRoute('/book-online', <BookOnline />, {
    title: 'Book Online | Schedule Locksmith Services in North Bergen, NJ',
    description: 'Book your locksmith service online. Fast and easy scheduling for all locksmith services in North Bergen and surrounding areas.',
    keywords: 'book locksmith, schedule locksmith, locksmith appointment, online booking, locksmith services',
    canonicalUrl: 'https://247locksmithandsecurity.com/book-online',
    noindex: false,
    nofollow: false
  }),
  
  createPageRoute('/service-areas', <ServiceAreas />, {
    title: 'Service Areas | Locksmith Services in North Bergen & Surrounding Areas',
    description: 'We provide professional locksmith services in North Bergen, Jersey City, Hoboken, Weehawken, Union City, West New York, Secaucus, and Guttenberg.',
    keywords: 'locksmith service areas, North Bergen locksmith, Jersey City locksmith, Hoboken locksmith, Weehawken locksmith, Union City locksmith',
    canonicalUrl: 'https://247locksmithandsecurity.com/service-areas',
    noindex: false,
    nofollow: false
  }),
  
  createPageRoute('/reviews', <Reviews />, {
    title: 'Customer Reviews | 5-Star Rated Locksmith Services',
    description: 'Read what our customers say about our locksmith services. See why we're rated 5 stars for our emergency locksmith services, car lockouts, and more.',
    keywords: 'locksmith reviews, customer testimonials, 5 star locksmith, best locksmith reviews, emergency locksmith reviews',
    canonicalUrl: 'https://247locksmithandsecurity.com/reviews',
    noindex: false,
    nofollow: false
  }),
  
  createPageRoute('/faq', <FAQ />, {
    title: 'Frequently Asked Questions | Locksmith & Security LLC',
    description: 'Find answers to common questions about our locksmith services. Learn about car lockouts, house lockouts, lock changes, and more.',
    keywords: 'locksmith FAQ, locksmith questions, car lockout FAQ, house lockout FAQ, lock change FAQ',
    canonicalUrl: 'https://247locksmithandsecurity.com/faq',
    noindex: false,
    nofollow: false
  }),
  
  createPageRoute('/privacy-policy', <PrivacyPolicy />, {
    title: 'Privacy Policy | Locksmith & Security LLC',
    description: 'Our privacy policy explains how we collect, use, and protect your personal information when you use our website or services.',
    keywords: 'locksmith privacy policy, privacy statement, data protection, information security',
    canonicalUrl: 'https://247locksmithandsecurity.com/privacy-policy',
    noindex: false,
    nofollow: false
  }),
  
  createPageRoute('/terms-conditions', <TermsConditions />, {
    title: 'Terms & Conditions | Locksmith & Security LLC',
    description: 'Read our terms and conditions for using our locksmith services and website. Understand your rights and responsibilities.',
    keywords: 'locksmith terms, service conditions, legal terms, service agreement',
    canonicalUrl: 'https://247locksmithandsecurity.com/terms-conditions',
    noindex: false,
    nofollow: false
  }),
  
  createPageRoute('/accessibility', <Accessibility />, {
    title: 'Accessibility Statement | Locksmith & Security LLC',
    description: 'Our commitment to accessibility ensures that all users, including those with disabilities, can access and use our website and services.',
    keywords: 'accessibility statement, ADA compliance, web accessibility, disability access',
    canonicalUrl: 'https://247locksmithandsecurity.com/accessibility',
    noindex: false,
    nofollow: false
  }),
  
  createPageRoute('/thank-you', <ThankYou />, {
    title: 'Thank You | Locksmith & Security LLC',
    description: 'Thank you for contacting Locksmith & Security LLC. We\'ve received your message and will respond shortly.',
    keywords: 'thank you page, locksmith contact confirmation, message received',
    canonicalUrl: 'https://247locksmithandsecurity.com/thank-you',
    noindex: true,
    nofollow: true
  }),
  
  createRoute('/sitemap', <Sitemap />, 
    'Sitemap | Locksmith & Security LLC',
    'Navigate our complete site structure. Find all pages and services offered by Locksmith & Security LLC.'
  ),
  
  createRoute('/404', <NotFound />, 
    'Page Not Found | Locksmith & Security LLC',
    'The page you are looking for cannot be found. Browse our services or contact us for assistance.'
  )
];

console.log('mainRoutes loaded successfully');
