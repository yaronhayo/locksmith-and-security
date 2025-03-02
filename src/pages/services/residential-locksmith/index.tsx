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
import { Home, Lock, Key, Shield, ChevronDown } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import CarouselDots from "@/components/reviews/CarouselDots";
import { Button } from "@/components/ui/button";
import { residentialReviews } from "@/data/reviews";

const successStories = [{
  icon: Home,
  title: "Smart Lock Installation in Guttenberg",
  location: "Guttenberg",
  shortDesc: "Homeowner wanted to modernize their home security.",
  fullDesc: "A tech-savvy homeowner in Guttenberg wanted to upgrade to smart locks for their home. We installed WiFi-enabled smart locks on all exterior doors, integrated them with their existing home automation system, and set up backup key override options. We also provided training on the mobile app features and emergency access protocols.",
  service: "Smart Lock Installation"
}, {
  icon: Lock,
  title: "Complete Home Lock Replacement",
  location: "North Bergen",
  shortDesc: "New homeowners wanted to secure their property after purchase.",
  fullDesc: "A family who just purchased a home in North Bergen wanted to replace all the locks for security reasons. We installed high-security deadbolts on all exterior doors, rekeyed the existing locks on interior doors to match a single key, and created a master key system that allowed the owners to access all areas while limiting access for others. The entire project was completed in one day, providing immediate peace of mind.",
  service: "Lock Replacement"
}, {
  icon: Key,
  title: "Lock Rekey After Lost Keys",
  location: "Jersey City",
  shortDesc: "Homeowner lost their keys and needed immediate security.",
  fullDesc: "A Jersey City resident lost their house keys while on vacation and was concerned about home security. Rather than replacing all the locks, we performed a comprehensive rekeying service on all exterior doors. This changed the internal pin configuration of the locks so the lost keys would no longer work, while allowing the homeowner to use new keys with their existing quality hardware. The service was completed within two hours of their return home.",
  service: "Lock Rekey"
}, {
  icon: Shield,
  title: "Home Security Upgrade",
  location: "Hoboken",
  shortDesc: "Family wanted comprehensive security improvements.",
  fullDesc: "After a break-in attempt in their neighborhood, a Hoboken family contacted us for a complete security assessment. We identified several vulnerabilities in their existing door and window locks. Our team installed high-security deadbolts, reinforced strike plates with 3-inch screws, added secondary window locks, and installed a smart doorbell camera integrated with their phone. The comprehensive security upgrade has given them confidence in their home's protection.",
  service: "Security Consultation"
}];

const residentialFaqs = [
  {
    question: "What types of residential locks do you recommend?",
    answer: "For exterior doors, we typically recommend high-security deadbolts with a minimum 1-inch throw bolt and reinforced strike plates. Smart locks are excellent for convenience while maintaining security. For interior doors, standard knob or lever locks are usually sufficient. The best lock choice depends on your specific security needs, budget, and aesthetic preferences."
  },
  {
    question: "Should I rekey or replace my locks when moving into a new home?",
    answer: "Rekeying is usually the most cost-effective option when moving into a new home, assuming the existing locks are in good condition. This process changes the internal pins of your locks so previous keys no longer work, without replacing the entire hardware. However, if the locks are outdated, damaged, or you want to upgrade security, full replacement may be better."
  },
  {
    question: "How long does a typical residential lock installation take?",
    answer: "A standard lock replacement typically takes 30-60 minutes per door. More complex installations, like smart locks or high-security systems, may take longer. When multiple doors need service, we work efficiently to minimize disruption to your home. We'll provide a time estimate before beginning work."
  },
  {
    question: "Are smart locks as secure as traditional locks?",
    answer: "Quality smart locks can be as secure as traditional locks while offering additional features like remote access and activity logs. We recommend smart locks that maintain physical key backup options and feature strong encryption. The best systems combine electronic convenience with mechanical reliability."
  },
  {
    question: "Can you help with broken or stuck keys?",
    answer: "Yes, we can extract broken keys from locks and repair or replace damaged locks. If your key is sticking or difficult to turn, this often indicates wear in the lock that should be addressed before the key breaks off inside."
  },
  {
    question: "Do you offer home security assessments?",
    answer: "Yes, we provide comprehensive home security assessments that evaluate all entry points, existing locks, and potential vulnerabilities. We then recommend appropriate security upgrades based on your needs, concerns, and budget. This service helps identify weak points in your home security before they can be exploited."
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

  // Function to truncate text and add ellipsis at the end of a word
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    
    // Find the last space before maxLength
    const lastSpaceIndex = text.lastIndexOf(' ', maxLength);
    
    if (lastSpaceIndex === -1) {
      // If no space found, just cut at maxLength
      return text.substring(0, maxLength) + '...';
    }
    
    // Find the last word and truncate it in the middle
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
          <h2 className="text-3xl font-bold mb-4">Residential Locksmith Success Stories</h2>
          <p className="text-lg text-muted-foreground">
            Real-world examples of how we've helped homeowners across New Jersey improve their security
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

const ResidentialLocksmithPage = () => {
  return <PageLayout title="Professional Residential Locksmith Services in North Bergen, NJ | Home Security Solutions" description="Complete residential locksmith services including lock installation, rekeying, repair, and security upgrades for your home. Licensed and insured experts serving North Bergen and surrounding areas." keywords="residential locksmith, home locksmith, house locks, door lock installation, lock rekeying, lock repair, home security, North Bergen locksmith" schema={{
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Residential Locksmith Services",
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
      "name": "Residential Locksmith Services",
      "itemListElement": [{
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Lock Installation & Replacement",
          "description": "Professional installation of standard and high-security locks for homes"
        }
      }, {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Lock Rekeying",
          "description": "Cost-effective alternative to changing locks while ensuring previous keys no longer work"
        }
      }, {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Lock Repair",
          "description": "Expert repair of jammed, stuck, or malfunctioning locks"
        }
      }, {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Home Security Consultation",
          "description": "Professional evaluation of your home's security vulnerabilities with recommended solutions"
        }
      }]
    }
  }}>
      <ServicesHero title="Professional Residential Locksmith Services" description="Complete home security solutions from lock installation and repair to high-security upgrades. Licensed, insured experts dedicated to protecting your home and family." />
      <ServicesGrid 
        title="Complete Home Security Solutions"
        description="Professional residential locksmith services to protect what matters most"
        serviceCategory="residential"
      />
      <ServicesFeatures />
      <RealLifeStories />
      <FAQSection title="Residential Locksmith FAQs" description="Common questions about our home security services" faqs={residentialFaqs} />
      <ReviewsSection location="North Bergen" reviewData={residentialReviews} category="residential" />
      <ServicesCTA />
    </PageLayout>;
};

export default ResidentialLocksmithPage;
