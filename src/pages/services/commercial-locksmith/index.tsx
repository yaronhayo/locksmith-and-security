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
import { Building2, Lock, Key, Shield, ChevronDown } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import CarouselDots from "@/components/reviews/CarouselDots";
import { Button } from "@/components/ui/button";
import { commercialReviews } from "@/data/reviews";

const successStories = [{
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
  icon: Key,
  title: "Emergency Exit Device Repair",
  location: "Jersey City",
  shortDesc: "A retail store had a malfunctioning emergency exit door before inspection.",
  fullDesc: "A large retail store in Jersey City discovered their emergency exit device was malfunctioning just two days before a fire safety inspection. Our commercial locksmith team arrived within hours of their call, diagnosed a faulty internal mechanism, and completed a full repair the same day. The store passed their inspection without any issues, avoiding potential fines and ensuring customer safety.",
  service: "Emergency Exit Repair"
}, {
  icon: Shield,
  title: "Security Audit in Union City",
  location: "Union City",
  shortDesc: "A jewelry store requested a complete security assessment.",
  fullDesc: "After a series of break-ins in the area, a Union City jewelry store owner requested a comprehensive security audit. We evaluated their existing locks, safes, and security protocols, identifying several vulnerabilities. Our team upgraded their locks to high-security cylinders, installed motion sensors, and implemented a monitored alarm system, all while working around their business hours.",
  service: "Security Consultation"
}];

const commercialFaqs = [
  {
    question: "What commercial security solutions do you offer?",
    answer: "We provide comprehensive commercial security solutions including high-security lock systems, master key systems, access control systems, panic bars and emergency exit devices, file cabinet and desk locks, commercial safe services, and security consultation. All our solutions are tailored to your specific business needs and security requirements."
  },
  {
    question: "How quickly can you service a commercial property?",
    answer: "For standard commercial services like lock installations or master key systems, we typically schedule appointments within 1-2 business days. For commercial lockouts or security emergencies, we provide same-day emergency service with response times averaging 15-30 minutes in our service areas."
  },
  {
    question: "Can you create a master key system for my business?",
    answer: "Yes, we design and implement customized master key systems for businesses of all sizes. Our systems can include multiple levels of access (master, sub-master, individual) and can be expanded as your business grows. We maintain detailed records of your key system for future modifications."
  },
  {
    question: "Do you offer maintenance contracts for commercial properties?",
    answer: "Yes, we offer maintenance contracts that include regular inspections, preventive maintenance of locks and security hardware, priority emergency service, and discounted rates on repairs and replacements. These contracts help ensure your security systems remain in optimal condition."
  },
  {
    question: "Can you work after business hours to avoid disruption?",
    answer: "Yes, we regularly schedule commercial locksmith work during evenings, nights, and weekends to minimize disruption to your business operations. For extensive projects like access control installation, we can develop a phased implementation plan that works around your business schedule."
  },
  {
    question: "Are your commercial locks ADA compliant?",
    answer: "Yes, we offer and install ADA-compliant commercial hardware including lever handles, low-force door closers, and appropriate mounting heights. We can evaluate your current setup and recommend necessary modifications to ensure compliance with accessibility requirements."
  }
];

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

    const startAutoplay = () => {
      intervalRef.current = setInterval(() => {
        if (!isPaused && api.canScrollNext()) {
          api.scrollNext();
        } else if (!isPaused) {
          api.scrollTo(0);
        }
      }, 3500);
    };

    const stopAutoplay = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    startAutoplay();

    return () => {
      stopAutoplay();
    };
  }, [api, isPaused]);

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    
    const lastSpaceIndex = text.lastIndexOf(' ', maxLength);
    
    if (lastSpaceIndex === -1) {
      return text.substring(0, maxLength) + '...';
    }
    
    const truncatedText = text.substring(0, lastSpaceIndex);
    const lastWord = text.substring(lastSpaceIndex + 1).split(' ')[0];
    const halfWordLength = Math.floor(lastWord.length / 2);
    const truncatedWord = lastWord.substring(0, halfWordLength);
    
    return truncatedText + ' ' + truncatedWord + '...';
  };

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
          <h2 className="text-3xl font-bold mb-4">Commercial Security Success Stories</h2>
          <p className="text-lg text-muted-foreground">
            Real-world examples of how we've helped businesses across New Jersey improve their security
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
                        {expandedIndex === index 
                          ? story.fullDesc 
                          : (
                            <>
                              {truncateText(story.fullDesc, 120)}
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                onClick={() => setExpandedIndex(index)} 
                                className="text-sm font-medium text-[#F97316] ml-1 p-0 h-auto hover:bg-transparent group"
                              >
                                Continue Reading
                                <ChevronDown className="h-3 w-3 ml-1 text-[#F97316] group-hover:animate-bounce" />
                              </Button>
                            </>
                          )
                        }
                      </p>
                      
                      <div className="mt-auto pt-4 flex items-center justify-between">
                        <span className="text-sm font-medium text-primary">{story.service}</span>
                        {expandedIndex === index && (
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => setExpandedIndex(null)} 
                            className="text-sm"
                          >
                            Show Less
                          </Button>
                        )}
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

const CommercialLocksmithPage = () => {
  return <PageLayout title="Professional Commercial Locksmith Services in North Bergen, NJ | Business Security Solutions" description="Expert commercial locksmith services including access control systems, master key systems, lock installation, and security consultation for businesses of all sizes." keywords="commercial locksmith, business locksmith, access control, master key system, commercial security, North Bergen locksmith" schema={{
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Locksmith Services",
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
      "name": "Commercial Locksmith Services",
      "itemListElement": [{
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Access Control Systems",
          "description": "Advanced electronic access control solutions for businesses"
        }
      }, {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Master Key Systems",
          "description": "Custom master key solutions for efficient access management"
        }
      }, {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Lock Installation",
          "description": "Professional installation of high-security commercial locks"
        }
      }, {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emergency Exit Devices",
          "description": "Installation and repair of panic bars and emergency exit hardware"
        }
      }]
    }
  }}>
      <ServicesHero title="Professional Commercial Locksmith Services" description="Comprehensive security solutions for businesses of all sizes. From access control systems to master key implementation, we provide expert commercial locksmith services throughout New Jersey." />
      <ServicesGrid 
        title="Complete Commercial Security Solutions"
        description="Professional security services to protect your business, assets, and people"
      />
      <ServicesFeatures />
      <RealLifeStories />
      <FAQSection title="Commercial Locksmith FAQs" description="Common questions about our business security services" faqs={commercialFaqs} />
      <ReviewsSection location="North Bergen" category="commercial" reviewData={commercialReviews} />
      <ServicesCTA />
    </PageLayout>;
};

export default CommercialLocksmithPage;
