
import React, { useState, useEffect, useRef, useCallback } from "react";
import PageLayout from "@/components/layouts/PageLayout";
import PageHero from "@/components/layouts/PageHero";
import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Search, Home, Settings, Car, Building, AlertCircle, HelpCircle } from "lucide-react";
import { generalFaqs, residentialFaqs, automotiveFaqs, commercialFaqs, emergencyFaqs } from "@/data/faqData";
import { motion } from "framer-motion";

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [displayedFaqs, setDisplayedFaqs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const loaderRef = useRef<HTMLDivElement>(null);
  const pageSize = 10;
  
  const getFaqsByCategory = useCallback(() => {
    switch (activeTab) {
      case "residential":
        return residentialFaqs;
      case "automotive":
        return automotiveFaqs;
      case "commercial":
        return commercialFaqs;
      case "emergency":
        return emergencyFaqs;
      case "general":
        return generalFaqs;
      default:
        return [
          ...generalFaqs,
          ...residentialFaqs,
          ...automotiveFaqs,
          ...commercialFaqs,
          ...emergencyFaqs
        ];
    }
  }, [activeTab]);

  const filteredFaqs = useCallback(() => {
    return getFaqsByCategory().filter(faq => 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [getFaqsByCategory, searchQuery]);
  
  const loadMoreFaqs = useCallback(() => {
    if (isLoading) return;
    
    const allFaqs = filteredFaqs();
    const startIndex = (page - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, allFaqs.length);
    
    if (startIndex < allFaqs.length) {
      setIsLoading(true);
      
      setTimeout(() => {
        const newFaqs = allFaqs.slice(startIndex, endIndex);
        setDisplayedFaqs(prev => [...prev, ...newFaqs]);
        setPage(prev => prev + 1);
        setIsLoading(false);
      }, 300);
    }
  }, [filteredFaqs, isLoading, page, pageSize]);
  
  useEffect(() => {
    setDisplayedFaqs([]);
    setPage(1);
  }, [activeTab, searchQuery]);
  
  useEffect(() => {
    loadMoreFaqs();
  }, [loadMoreFaqs]);
  
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) {
        loadMoreFaqs();
      }
    }, options);
    
    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }
    
    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loadMoreFaqs]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const tabItems = [
    { id: "all", label: "All FAQs", icon: <Home className="h-4 w-4" /> },
    { id: "general", label: "General", icon: <Settings className="h-4 w-4" /> },
    { id: "residential", label: "Residential", icon: <Home className="h-4 w-4" /> },
    { id: "automotive", label: "Automotive", icon: <Car className="h-4 w-4" /> },
    { id: "commercial", label: "Commercial", icon: <Building className="h-4 w-4" /> },
    { id: "emergency", label: "Emergency", icon: <AlertCircle className="h-4 w-4" /> },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      ...generalFaqs,
      ...residentialFaqs,
      ...automotiveFaqs,
      ...commercialFaqs,
      ...emergencyFaqs
    ].map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const totalFaqs = filteredFaqs().length;
  const hasMore = displayedFaqs.length < totalFaqs;

  return (
    <PageLayout
      title="Frequently Asked Questions - Expert Locksmith Answers"
      description="Find comprehensive answers to common questions about our residential, commercial, automotive, and emergency locksmith services."
      schema={faqSchema}
      canonicalUrl="https://www.locksmiths.com/faq"
      keywords="locksmith FAQ, locksmith questions, locksmith services, residential locksmith, commercial locksmith, automotive locksmith, emergency locksmith"
      heroTitle="Frequently Asked Questions"
      heroDescription="Browse our comprehensive collection of FAQs to find answers to your locksmith and security questions."
    >
      <div className="container mx-auto px-4 -mt-12 mb-10">
        <div className="relative max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-2 flex items-center border-l-4 border-[#F97316]"
          >
            <Search className="ml-3 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for questions or keywords..."
              value={searchQuery}
              onChange={handleSearch}
              className="pl-2 py-6 text-lg border-none focus:ring-[#F97316] focus:ring-offset-0"
            />
          </motion.div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Tabs 
              defaultValue="all" 
              className="max-w-5xl mx-auto"
              onValueChange={setActiveTab}
            >
              <div className="flex justify-center mb-8 overflow-x-auto">
                <TabsList className="bg-gray-100 p-1 rounded-full">
                  {tabItems.map((tab) => (
                    <TabsTrigger 
                      key={tab.id} 
                      value={tab.id}
                      className="rounded-full px-4 py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-[#F97316]"
                    >
                      <div className="flex items-center gap-2">
                        {tab.icon}
                        <span>{tab.label}</span>
                      </div>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              <TabsContent value={activeTab} className="mt-6">
                {displayedFaqs.length > 0 ? (
                  <>
                    <motion.div 
                      className="grid md:grid-cols-2 gap-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ staggerChildren: 0.05 }}
                    >
                      {displayedFaqs.map((faq, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          <Card className="h-full overflow-hidden hover:shadow-md transition-shadow duration-300 hover:border-[#FEC6A1]">
                            <CardContent className="p-0">
                              <Accordion type="single" collapsible>
                                <AccordionItem value={`item-${index}-${faq.question.substring(0, 10)}`} className="border-none">
                                  <AccordionTrigger className="px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors hover:no-underline text-left">
                                    <div className="flex items-start text-left gap-3">
                                      <span className="font-bold text-[#F97316] text-lg">Q:</span>
                                      <span className="text-lg font-semibold">{faq.question}</span>
                                    </div>
                                  </AccordionTrigger>
                                  <AccordionContent className="px-6 py-4 bg-white">
                                    <div className="flex gap-3">
                                      <span className="font-bold text-[#F97316] text-lg">A:</span>
                                      <p className="text-gray-700 leading-relaxed">
                                        {faq.answer}
                                      </p>
                                    </div>
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </motion.div>
                    
                    <div ref={loaderRef} className="py-8 flex justify-center">
                      {isLoading && (
                        <div className="animate-pulse flex space-x-4">
                          <div className="h-3 w-3 bg-[#FEC6A1] rounded-full"></div>
                          <div className="h-3 w-3 bg-[#F97316] rounded-full"></div>
                          <div className="h-3 w-3 bg-[#FEC6A1] rounded-full"></div>
                        </div>
                      )}
                      {!isLoading && !hasMore && displayedFaqs.length > 0 && (
                        <p className="text-gray-500">No more questions to load</p>
                      )}
                    </div>
                  </>
                ) : (
                  searchQuery ? (
                    <div className="text-center py-12">
                      <p className="text-gray-500 text-lg mb-4">No results found for "{searchQuery}"</p>
                      <Button 
                        variant="outline" 
                        onClick={() => setSearchQuery("")}
                        className="border-[#F97316] text-[#F97316] hover:bg-[#FEC6A1]/10"
                      >
                        Clear search
                      </Button>
                    </div>
                  ) : (
                    <div className="flex justify-center py-12">
                      <div className="animate-pulse flex space-x-4">
                        <div className="h-3 w-3 bg-[#FEC6A1] rounded-full"></div>
                        <div className="h-3 w-3 bg-[#F97316] rounded-full"></div>
                        <div className="h-3 w-3 bg-[#FEC6A1] rounded-full"></div>
                      </div>
                    </div>
                  )
                )}
              </TabsContent>
            </Tabs>
          </motion.div>

          <motion.div 
            className="mt-16 text-center bg-gradient-to-r from-gray-100 to-gray-50 rounded-lg p-8 shadow-sm max-w-4xl mx-auto border-l-4 border-[#F97316]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team is always here to help. Contact us anytime for immediate assistance 
              with your locksmith and security needs.
            </p>
            <Button size="lg" className="bg-[#F97316] hover:bg-[#F97316]/90">
              <a href="tel:2017482070" className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Call (201) 748-2070
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};

export default FAQPage;
