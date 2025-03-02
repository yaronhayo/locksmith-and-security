
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
import { Lock, Home, Car, Building2, ChevronDown } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import CarouselDots from "@/components/reviews/CarouselDots";
import { Button } from "@/components/ui/button";
import { carServiceReviews } from "@/data/reviews/carServiceReviews";

const successStories = [{
  icon: Home,
  title: "Emergency House Lockout in Jersey City",
  location: "Jersey City",
  shortDesc: "A family of four was locked out of their home at 11 PM after returning from vacation.",
  fullDesc: "The Smiths returned from their vacation only to find their house key wouldn't turn in the lock. With temperatures dropping and two tired children, they needed immediate help. Our technician arrived within 20 minutes, diagnosed a seized lock mechanism due to weather exposure, and not only got them inside but also serviced the lock to prevent future issues. We also created spare keys for everyone in the family.",
  service: "Residential Lockout"
}, {
  icon: Car,
  title: "Car Lockout at Shopping Mall",
  location: "North Bergen",
  shortDesc: "A customer locked their keys in their car with groceries inside on a hot summer day.",
  fullDesc: "A shopper at a busy North Bergen mall discovered they had locked their keys in their car along with all their groceries on a 95-degree summer day. With ice cream and frozen foods melting, they needed urgent assistance. Our emergency locksmith arrived within 15 minutes and used specialized tools to gain non-destructive entry to the vehicle, saving both the groceries and preventing any damage to the car.",
  service: "Car Lockout"
}, {
  icon: Building2,
  title: "Late Night Office Lockout",
  location: "Hoboken",
  shortDesc: "A business owner was locked out of their office with critical client files inside.",
  fullDesc: "A consultant in Hoboken was preparing for an important morning presentation when they realized they had left critical files in their locked office. At 11 PM, they called our emergency service in a panic. Our locksmith arrived promptly, verified their ownership, and provided access to the office without damaging the high-security commercial locks. The client was able to retrieve their files and successfully deliver their presentation the next morning.",
  service: "Commercial Lockout"
}, {
  icon: Lock,
  title: "Broken Key Extraction",
  location: "Weehawken",
  shortDesc: "A tenant had their key break off in the apartment building's main entrance.",
  fullDesc: "At 1 AM, a tenant in a Weehawken apartment complex had their key break inside the building's main entrance lock. With no superintendent available until morning, the entire building's security was compromised. Our emergency locksmith extracted the broken key piece, repaired the damaged lock, and created new keys for the tenant on the spot, restoring security to the building within an hour of receiving the call.",
  service: "Emergency Lock Repair"
}];

const emergencyFaqs = [
  {
    question: "How quickly can you respond to an emergency lockout?",
    answer: "We typically arrive within 15-30 minutes of your call in North Bergen and surrounding areas. Our emergency locksmiths are strategically positioned throughout New Jersey to provide the fastest possible response times, even during nights, weekends, and holidays."
  },
  {
    question: "What types of lockouts can you handle?",
    answer: "We handle all types of emergency lockout situations, including residential lockouts (houses, apartments), automotive lockouts (all vehicle makes and models), commercial lockouts (offices, retail spaces), and specialty lockouts like storage units or filing cabinets."
  },
  {
    question: "Do you damage locks when responding to lockouts?",
    answer: "No, our professional emergency locksmiths use specialized non-destructive entry techniques designed to open locks without causing damage. In over 99% of lockout situations, we can gain access without drilling or damaging your locks."
  },
  {
    question: "Is emergency locksmith service available 24/7?",
    answer: "Yes, our emergency locksmith service is available 24 hours a day, 7 days a week, 365 days a year. We understand that lockouts don't follow a schedule, so our team is always ready to respond to your emergency, even on holidays and weekends."
  },
  {
    question: "What should I do while waiting for an emergency locksmith?",
    answer: "While waiting for our locksmith to arrive: 1) Stay in a safe, well-lit area, 2) If you're locked out of your car, move away from traffic, 3) For home lockouts, wait with a neighbor if possible, 4) Keep your phone charged and available, and 5) Have your ID ready to verify your identity and ownership."
  },
  {
    question: "How much does emergency locksmith service cost?",
    answer: "Emergency locksmith service typically ranges from $75-$250 depending on the situation, time of day, and complexity. We provide upfront pricing before beginning work, with no hidden fees. We can provide a price estimate over the phone when you call."
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
          <h2 className="text-3xl font-bold mb-4">Emergency Locksmith Success Stories</h2>
          <p className="text-lg text-muted-foreground">
            Real-world examples of how we've helped people in urgent lockout situations across New Jersey
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

const EmergencyLocksmithPage = () => {
  return <PageLayout title="24/7 Emergency Locksmith Services in North Bergen, NJ | Immediate Assistance" description="Professional 24/7 emergency locksmith services for home, business, and auto lockouts. Fast response within 15-30 minutes, damage-free entry methods, and affordable rates." keywords="emergency locksmith, 24/7 locksmith, lockout service, car lockout, house lockout, business lockout, North Bergen locksmith" schema={{
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Emergency Locksmith Services",
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
      "name": "Emergency Locksmith Services",
      "itemListElement": [{
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "House Lockout Services",
          "description": "Fast, damage-free entry when you're locked out of your home"
        }
      }, {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Car Lockout Services",
          "description": "Professional automotive lockout assistance for all vehicle makes and models"
        }
      }, {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Business Lockout Services",
          "description": "Emergency commercial lockout solutions for offices and retail spaces"
        }
      }, {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emergency Lock Repair",
          "description": "Immediate lock repair and broken key extraction services"
        }
      }]
    }
  }}>
      <ServicesHero title="24/7 Emergency Locksmith Services" description="Professional emergency lockout solutions when you need them most. Fast response within 15-30 minutes, damage-free entry methods, and affordable rates throughout New Jersey." />
      <ServicesGrid 
        title="Complete Emergency Locksmith Solutions"
        description="Fast, professional assistance for all your lockout emergencies"
      />
      <ServicesFeatures />
      <RealLifeStories />
      <FAQSection title="Emergency Locksmith FAQs" description="Common questions about our emergency locksmith services" faqs={emergencyFaqs} />
      <ReviewsSection location="North Bergen" reviewData={carServiceReviews} category="emergency" />
      <ServicesCTA />
    </PageLayout>;
};

export default EmergencyLocksmithPage;
