import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const initialFaqs = [
  {
    question: "How quickly can you arrive?",
    answer: "We typically arrive within 30 minutes of your call in the North Bergen area."
  },
  {
    question: "Do you provide 24/7 emergency service?",
    answer: "Yes, we offer round-the-clock emergency locksmith services."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, we are fully licensed, bonded, and insured for your peace of mind."
  },
  {
    question: "What forms of payment do you accept?",
    answer: "We accept all major credit cards, cash, and digital payments for your convenience."
  },
  {
    question: "Do you service all types of locks?",
    answer: "Yes, we work with all types of residential, commercial, and automotive locks."
  },
  {
    question: "Can you make new keys on the spot?",
    answer: "Yes, we have mobile key-cutting equipment to make new keys on location."
  },
  {
    question: "What areas do you serve?",
    answer: "We serve North Bergen and surrounding areas including Jersey City, Union City, and more."
  },
  {
    question: "How much does a typical service call cost?",
    answer: "Service costs vary depending on the specific service needed. We provide upfront pricing."
  },
  {
    question: "Do you offer emergency commercial services?",
    answer: "Yes, we provide 24/7 emergency services for all commercial clients."
  },
  {
    question: "Can you help with smart locks?",
    answer: "Yes, we install, repair, and program all types of smart locks and security systems."
  }
];

const additionalFaqs = [
  {
    question: "Do you offer emergency locksmith services in Jersey City?",
    answer: "Yes, we provide 24/7 emergency locksmith services in Jersey City with typical response times of 20-30 minutes."
  },
  {
    question: "What's your service coverage in Hoboken?",
    answer: "We offer comprehensive locksmith services throughout Hoboken, including residential, commercial, and automotive services with fast response times."
  },
  {
    question: "Are your locksmiths certified to work in Union City?",
    answer: "Yes, all our locksmiths are fully certified and licensed to work in Union City and throughout New Jersey."
  },
  {
    question: "What's the typical response time for West New York emergencies?",
    answer: "For West New York emergency calls, we typically arrive within 25-35 minutes, depending on traffic conditions."
  },
  {
    question: "Do you install high-security locks in Weehawken properties?",
    answer: "Yes, we specialize in installing and maintaining high-security lock systems for both residential and commercial properties in Weehawken."
  },
  {
    question: "What types of car keys can you duplicate in North Bergen?",
    answer: "Our North Bergen service center can duplicate all types of car keys, including transponder keys, smart keys, and traditional keys."
  },
  {
    question: "Do you service smart locks in Secaucus?",
    answer: "Yes, we provide complete smart lock services in Secaucus, including installation, programming, and troubleshooting."
  },
  {
    question: "What's your pricing structure for Guttenberg businesses?",
    answer: "We offer competitive rates for Guttenberg businesses with special packages for regular maintenance and emergency services."
  },
  {
    question: "Can you handle master key systems in commercial buildings?",
    answer: "Yes, we specialize in designing, installing, and maintaining master key systems for commercial properties across all service areas."
  },
  {
    question: "Do you provide written estimates for lock replacement?",
    answer: "Yes, we provide detailed written estimates for all lock replacement services before beginning any work."
  },
  {
    question: "What brands of locks do you work with?",
    answer: "We work with all major lock brands including Schlage, Kwikset, Yale, Medeco, and many others."
  },
  {
    question: "Do you offer security consultations for businesses?",
    answer: "Yes, we provide comprehensive security consultations for businesses in all our service areas."
  },
  {
    question: "What's your warranty policy on installed locks?",
    answer: "We offer warranties on all installed locks, typically ranging from 90 days to 1 year depending on the product."
  },
  {
    question: "Can you rekey multiple locks to work with one key?",
    answer: "Yes, we can rekey multiple locks to work with a single key, perfect for homes and businesses."
  },
  {
    question: "Do you install keypad entry systems?",
    answer: "Yes, we install and service various keypad entry systems for both residential and commercial properties."
  }
];

const FAQSection = () => {
  const [displayedFaqs, setDisplayedFaqs] = useState([...initialFaqs]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loadMoreRef = useRef(null);
  const currentIndex = useRef(0);

  const loadMoreFaqs = () => {
    setLoading(true);
    setTimeout(() => {
      const nextBatch = additionalFaqs.slice(currentIndex.current, currentIndex.current + 3);
      if (nextBatch.length > 0) {
        setDisplayedFaqs(prev => [...prev, ...nextBatch]);
        currentIndex.current += 3;
        if (currentIndex.current >= additionalFaqs.length) {
          setHasMore(false);
        }
      } else {
        setHasMore(false);
      }
      setLoading(false);
    }, 1000); // Simulate network delay
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMoreFaqs();
        }
      },
      { threshold: 1.0 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [hasMore, loading]);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {displayedFaqs.map((faq, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
          
          {loading && (
            <div className="space-y-6">
              {[1, 2, 3].map((_, index) => (
                <Card key={`skeleton-${index}`}>
                  <CardContent className="p-6">
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-full" />
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
          
          <div ref={loadMoreRef} className="text-center pt-8">
            {hasMore ? (
              <Button 
                variant="outline" 
                onClick={loadMoreFaqs}
                disabled={loading}
              >
                {loading ? "Loading..." : "Show More"}
              </Button>
            ) : (
              <Button asChild variant="default">
                <a href="/faq" className="flex items-center">
                  See All FAQs <ArrowRight className="ml-2" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
