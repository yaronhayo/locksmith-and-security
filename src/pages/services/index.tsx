import React, { useState, useRef } from "react";
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
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { House, Car, Building2, Lock, Shield, User } from "lucide-react";
import CarouselDots from "@/components/reviews/CarouselDots";
import { Button } from "@/components/ui/button";
const successStories = [{
  icon: House,
  title: "Emergency House Lockout in Jersey City",
  location: "Jersey City",
  shortDesc: "A family of four was locked out of their home at 11 PM after returning from vacation.",
  fullDesc: "The Smiths returned from their vacation only to find their house key wouldn't turn in the lock. With temperatures dropping and two tired children, they needed immediate help. Our technician arrived within 20 minutes, diagnosed a seized lock mechanism due to weather exposure, and not only got them inside but also serviced the lock to prevent future issues. We also created spare keys for everyone in the family.",
  service: "Residential Lockout"
}, {
  icon: Car,
  title: "Lost Car Keys at Liberty State Park",
  location: "Jersey City",
  shortDesc: "A tourist lost their only car key while visiting Liberty State Park.",
  fullDesc: "A visitor from California lost their only car key while sightseeing. With no spare key and their hotel 30 miles away, they were stranded. Our mobile locksmith arrived with all necessary equipment to program a new key for their 2021 Toyota Camry. Within 45 minutes, we had programmed a new key and they were back on their way, with a spare key for future peace of mind.",
  service: "Automotive Locksmith"
}, {
  icon: Building2,
  title: "Office Security Upgrade in Hoboken",
  location: "Hoboken",
  shortDesc: "A startup needed to upgrade their office security after expansion.",
  fullDesc: "A growing tech startup in Hoboken needed to upgrade their access control system after expanding to a second floor. We installed a modern keycard system with individual access levels for different areas, integrated it with their existing security cameras, and provided detailed access logs for management. The entire system was up and running within a day, with minimal disruption to their operations.",
  service: "Commercial Security"
}, {
  icon: Lock,
  title: "Master Key System in North Bergen",
  location: "North Bergen",
  shortDesc: "An apartment complex needed a new master key system for 50 units.",
  fullDesc: "A property manager in North Bergen needed to overhaul their building's entire key system after a master key was lost. We designed and implemented a new hierarchical master key system for all 50 units, common areas, and maintenance rooms. The project was completed over a weekend to minimize resident disruption, with each tenant receiving new keys and clear instructions.",
  service: "Commercial Locksmith"
}, {
  icon: Car,
  title: "Key Programming in Weehawken",
  location: "Weehawken",
  shortDesc: "Customer needed an urgent key replacement for a luxury vehicle.",
  fullDesc: "A client in Weehawken needed an emergency replacement for their lost Mercedes key fob. With dealer quotes exceeding $600 and a week's wait time, we provided same-day service at half the cost. Our technician arrived with specialized programming equipment, cut and programmed a new key fob on-site, and ensured all old keys were deleted from the car's computer for security.",
  service: "Car Key Programming"
}, {
  icon: Shield,
  title: "Security Audit in Union City",
  location: "Union City",
  shortDesc: "A jewelry store requested a complete security assessment.",
  fullDesc: "After a series of break-ins in the area, a Union City jewelry store owner requested a comprehensive security audit. We evaluated their existing locks, safes, and security protocols, identifying several vulnerabilities. Our team upgraded their locks to high-security cylinders, installed motion sensors, and implemented a monitored alarm system, all while working around their business hours.",
  service: "Security Consultation"
}, {
  icon: House,
  title: "Smart Lock Installation in Guttenberg",
  location: "Guttenberg",
  shortDesc: "Homeowner wanted to modernize their home security.",
  fullDesc: "A tech-savvy homeowner in Guttenberg wanted to upgrade to smart locks for their home. We installed WiFi-enabled smart locks on all exterior doors, integrated them with their existing home automation system, and set up backup key override options. We also provided training on the mobile app features and emergency access protocols.",
  service: "Smart Lock Installation"
}];
const RealLifeStories = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  React.useEffect(() => {
    if (!api) return;
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    // Start the autoplay function
    const startAutoplay = () => {
      intervalRef.current = setInterval(() => {
        if (!isPaused && api.canScrollNext()) {
          api.scrollNext();
        } else if (!isPaused) {
          api.scrollTo(0);
        }
      }, 3500); // Increased to 3.5 seconds
    };

    // Clear the interval
    const stopAutoplay = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    // Initialize autoplay
    startAutoplay();

    // Clean up on unmount
    return () => {
      stopAutoplay();
    };
  }, [api, isPaused]);
  return <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg text-muted-foreground">
            See how we've helped customers across New Jersey with their security needs
          </p>
        </motion.div>

        <div onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <Carousel setApi={setApi} className="w-full max-w-6xl mx-auto" opts={{
          align: "start",
          loop: true
        }}>
            <CarouselContent>
              {successStories.map((story, index) => <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <motion.div initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: index * 0.1
              }}>
                    <Card className="p-6 h-full flex flex-col">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <story.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-1">{story.title}</h3>
                          <p className="text-sm text-muted-foreground">{story.location}</p>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">
                        {expandedIndex === index ? story.fullDesc : story.shortDesc}
                      </p>
                      
                      <div className="mt-auto pt-4 flex items-center justify-between">
                        <span className="text-sm font-medium text-primary">{story.service}</span>
                        <Button variant="ghost" size="sm" onClick={() => setExpandedIndex(expandedIndex === index ? null : index)} className="text-sm">
                          {expandedIndex === index ? "Show Less" : "Continue Reading"}
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                </CarouselItem>)}
            </CarouselContent>
            
            <div className="flex items-center justify-center mt-8">
              <CarouselPrevious className="relative static translate-y-0 mr-2" />
              <CarouselDots total={successStories.length} current={current} onDotClick={index => api?.scrollTo(index)} />
              <CarouselNext className="relative static translate-y-0 ml-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>;
};
const ServicesPage = () => {
  return <PageLayout title="Professional Locksmith Services in North Bergen, NJ | Expert Security Solutions" description="Comprehensive locksmith services including residential, commercial, and automotive solutions. Licensed, bonded, and insured experts available 24/7 for all your security needs." keywords="locksmith services, emergency locksmith, residential locksmith, commercial locksmith, auto locksmith, North Bergen locksmith" schema={{
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
      "itemListElement": [{
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emergency Locksmith Services",
          "description": "24/7 emergency locksmith services for residential, commercial, and automotive needs"
        }
      }, {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Residential Locksmith",
          "description": "Complete residential locksmith services including lock installation, repair, and rekeying"
        }
      }, {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Security",
          "description": "Professional commercial security solutions including access control and master key systems"
        }
      }, {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Automotive Locksmith",
          "description": "Complete auto locksmith services including car key programming and replacement"
        }
      }]
    }
  }}>
      <ServicesHero title="Complete Locksmith & Security Solutions" description="Trusted by homeowners and businesses across New Jersey for professional locksmith services, emergency assistance, and modern security installations. Available 24/7 with certified technicians." />
      <ServicesGrid />
      <ServicesFeatures />
      <RealLifeStories />
      <FAQSection title="Frequently Asked Questions" description="Find answers to common questions about our locksmith services" faqs={generalFaqs} />
      <ReviewsSection location="North Bergen" />
      <ServicesCTA />
    </PageLayout>;
};
export default ServicesPage;