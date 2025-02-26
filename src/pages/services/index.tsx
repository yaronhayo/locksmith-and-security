
import React from "react";
import PageLayout from "@/components/layouts/PageLayout";
import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesFeatures from "@/components/sections/services/ServicesFeatures";
import ServicesGrid from "@/components/sections/services/ServicesGrid";
import ServicesCTA from "@/components/sections/services/ServicesCTA";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FAQSection from "@/components/sections/FAQSection";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { generalFaqs } from "@/data/faqData";

const RealLifeStories = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Real Customer Stories</h2>
        <p className="text-lg text-muted-foreground">
          See how we've helped customers with their security needs
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Emergency Car Lockout</h3>
            <p className="text-muted-foreground mb-4">
              "I was locked out of my car late at night in North Bergen. The technician arrived promptly and got me back in my car safely. Very professional service!"
            </p>
            <div className="text-sm text-muted-foreground">
              - Sarah M., North Bergen
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Business Security Upgrade</h3>
            <p className="text-muted-foreground mb-4">
              "They installed a complete access control system for our office building. Their expertise in commercial security is impressive."
            </p>
            <div className="text-sm text-muted-foreground">
              - David R., Jersey City
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Home Lock Replacement</h3>
            <p className="text-muted-foreground mb-4">
              "Excellent service installing new locks in our home. The technician explained everything and made great security recommendations."
            </p>
            <div className="text-sm text-muted-foreground">
              - Michael T., Union City
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  </section>
);

const ServicesPage = () => {
  return (
    <PageLayout
      title="Professional Locksmith Services in North Bergen, NJ | Expert Security Solutions"
      description="Comprehensive locksmith services including residential, commercial, and automotive solutions. Licensed, bonded, and insured experts available 24/7 for all your security needs."
      keywords="locksmith services, emergency locksmith, residential locksmith, commercial locksmith, auto locksmith, North Bergen locksmith"
      schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Professional Locksmith Services",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Locksmith & Security LLC",
          "image": "/website-uploads/950b5c4c-f0b8-4d22-beb0-66a7d7554476.png",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Main Street",
            "addressLocality": "North Bergen",
            "addressRegion": "NJ",
            "postalCode": "07047",
            "addressCountry": "US"
          },
          "telephone": "+12017482070",
          "priceRange": "$$"
        },
        "areaServed": {
          "@type": "City",
          "name": "North Bergen",
          "sameAs": "https://en.wikipedia.org/wiki/North_Bergen,_New_Jersey"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Locksmith Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Emergency Locksmith Services",
                "description": "24/7 emergency locksmith services for residential, commercial, and automotive needs"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Residential Locksmith",
                "description": "Complete residential locksmith services including lock installation, repair, and rekeying"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Commercial Security",
                "description": "Professional commercial security solutions including access control and master key systems"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Automotive Locksmith",
                "description": "Complete auto locksmith services including car key programming and replacement"
              }
            }
          ]
        }
      }}
    >
      <ServicesHero 
        title="Professional Locksmith Services"
        description="Expert residential, commercial, and automotive locksmith solutions by certified technicians. Licensed, bonded, and insured for your peace of mind."
      />
      <ServicesFeatures />
      <ServicesGrid />
      <RealLifeStories />
      <ReviewsSection 
        location="North Bergen"
      />
      <FAQSection 
        title="Frequently Asked Questions"
        description="Find answers to common questions about our locksmith services"
        faqs={generalFaqs}
      />
      <ServicesCTA />
    </PageLayout>
  );
};

export default ServicesPage;
