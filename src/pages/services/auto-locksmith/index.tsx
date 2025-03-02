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
import { CarFront, Car, Key, Wrench, ChevronDown } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import CarouselDots from "@/components/reviews/CarouselDots";
import { Button } from "@/components/ui/button";
import { carServiceReviews } from "@/data/reviews/carServiceReviews";

const successStories = [{
  icon: CarFront,
  title: "Lost Car Keys at Liberty State Park",
  location: "Jersey City",
  shortDesc: "A tourist lost their only car key while visiting Liberty State Park.",
  fullDesc: "A visitor from California lost their only car key while sightseeing. With no spare key and their hotel 30 miles away, they were stranded. Our mobile locksmith arrived with all necessary equipment to program a new key for their 2021 Toyota Camry. Within 45 minutes, we had programmed a new key and they were back on their way, with a spare key for future peace of mind.",
  service: "Automotive Locksmith"
}, {
  icon: Car,
  title: "Key Programming in Weehawken",
  location: "Weehawken",
  shortDesc: "Customer needed an urgent key replacement for a luxury vehicle.",
  fullDesc: "A client in Weehawken needed an emergency replacement for their lost Mercedes key fob. With dealer quotes exceeding $600 and a week's wait time, we provided same-day service at half the cost. Our technician arrived with specialized programming equipment, cut and programmed a new key fob on-site, and ensured all old keys were deleted from the car's computer for security.",
  service: "Car Key Programming"
}, {
  icon: Key,
  title: "Locked Keys in BMW",
  location: "North Bergen",
  shortDesc: "Customer locked keys in their BMW with engine running.",
  fullDesc: "A customer in North Bergen accidentally locked their keys in their BMW X5 with the engine still running while picking up their child from school. With the child waiting and the car running in a no-parking zone, they needed immediate help. Our technician arrived within 15 minutes and used specialized tools to safely access the vehicle without damage, allowing them to retrieve their keys and be on their way quickly.",
  service: "Car Lockout"
}, {
  icon: Wrench,
  title: "Ignition Repair for Delivery Driver",
  location: "Hoboken",
  shortDesc: "Delivery driver's key stuck in ignition required immediate repair.",
  fullDesc: "A delivery driver in Hoboken had their key break in the ignition cylinder of their work van mid-shift. With dozens of packages still to deliver, they couldn't afford downtime. Our mobile technician extracted the broken key piece, repaired the ignition cylinder, and cut a new key on-site. The entire repair took under an hour, allowing the driver to complete their deliveries on schedule without needing a tow or dealership visit.",
  service: "Ignition Repair"
}];

const autoFaqs = [
  {
    question: "How much does it cost to replace a car key?",
    answer: "The cost of car key replacement varies depending on your vehicle make, model, and key type. Basic keys can start around $75, while advanced transponder keys or smart keys typically range from $150-400. We provide upfront pricing before any work begins."
  },
  {
    question: "Can you make a car key without the original?",
    answer: "Yes, we can create new car keys even if you've lost all your original keys. Our automotive locksmiths have specialized equipment to cut and program keys for most vehicle makes and models. You'll need to provide proof of ownership and your vehicle identification number (VIN)."
  },
  {
    question: "Can you program any type of car key fob?",
    answer: "We can program most types of key fobs for a wide range of vehicle makes and models. This includes standard key fobs, smart keys, proximity keys, and push-to-start systems. Our mobile service vehicles carry the necessary equipment to program your key fob on-site."
  },
  {
    question: "How long does it take to replace a car key?",
    answer: "Most car key replacements can be completed in 30-60 minutes, depending on your vehicle and key type. Basic keys take less time, while more complex transponder keys or smart keys may take longer to program. We offer same-day service for most vehicles."
  },
  {
    question: "Will I need to tow my car to get a new key made?",
    answer: "No, our mobile automotive locksmith service comes to your location. We bring all the necessary tools and equipment to cut and program your new key on-site, regardless of where your vehicle is located in our service area."
  },
  {
    question: "Are your replacement car keys the same quality as dealership keys?",
    answer: "Yes, we use high-quality OEM or aftermarket keys that function exactly like dealership keys but at a fraction of the cost. All our replacement keys are guaranteed to work with your vehicle's locks and ignition system."
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
          <h2 className="text-3xl font-bold mb-4">Auto Locksmith Success Stories</h2>
          <p className="text-lg text-muted-foreground">
            Real-world examples of how we've helped drivers across New Jersey with their automotive key and lock needs
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

const AutoLocksmithPage = () => {
  return <PageLayout title="Professional Auto Locksmith Services in North Bergen, NJ | Car Key Solutions" description="Expert automotive locksmith services including car key replacement, programming, lockout assistance and ignition repair. Mobile service available 24/7." keywords="auto locksmith, car key replacement, key fob programming, car lockout, ignition repair, North Bergen locksmith" schema={{
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Auto Locksmith Services",
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
      "name": "Auto Locksmith Services",
      "itemListElement": [{
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Car Key Replacement",
          "description": "Complete car key replacement services for all makes and models"
        }
      }, {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Key Fob Programming",
          "description": "Expert programming for all types of key fobs and smart keys"
        }
      }, {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Car Lockout Services",
          "description": "Fast, damage-free vehicle entry when you're locked out of your car"
        }
      }, {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Ignition Repair & Replacement",
          "description": "Complete ignition cylinder repair and replacement services"
        }
      }]
    }
  }}>
      <ServicesHero title="Professional Auto Locksmith Services" description="Expert solutions for all your automotive key and lock needs, from emergency car lockouts to advanced transponder key programming. Available 24/7 with mobile service throughout New Jersey." />
      <ServicesGrid 
        title="Complete Auto Locksmith Solutions"
        description="Professional automotive security services for all makes and models"
      />
      <ServicesFeatures />
      <RealLifeStories />
      <FAQSection title="Auto Locksmith FAQs" description="Common questions about our automotive locksmith services" faqs={autoFaqs} />
      <ReviewsSection location="North Bergen" category="car" reviewData={carServiceReviews} />
      <ServicesCTA />
    </PageLayout>;
};

export default AutoLocksmithPage;
