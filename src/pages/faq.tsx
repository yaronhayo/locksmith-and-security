import React, { useState, useEffect, useRef, useCallback } from "react";
import PageLayout from "@/components/layouts/PageLayout";
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
import { Phone, Search, Home, Settings, Car, Building, AlertCircle, HelpCircle, BookOpen } from "lucide-react";
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
  
  // Determine which FAQs to display based on the active tab
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

  // Filter FAQs based on search query
  const filteredFaqs = useCallback(() => {
    return getFaqsByCategory().filter(faq => 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [getFaqsByCategory, searchQuery]);
  
  // Load more FAQs when scrolling
  const loadMoreFaqs = useCallback(() => {
    if (isLoading) return;
    
    const allFaqs = filteredFaqs();
    const startIndex = (page - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, allFaqs.length);
    
    if (startIndex < allFaqs.length) {
      setIsLoading(true);
      
      // Simulate loading delay
      setTimeout(() => {
        const newFaqs = allFaqs.slice(startIndex, endIndex);
        setDisplayedFaqs(prev => [...prev, ...newFaqs]);
        setPage(prev => prev + 1);
        setIsLoading(false);
      }, 300);
    }
  }, [filteredFaqs, isLoading, page, pageSize]);
  
  // Reset when tab or search changes
  useEffect(() => {
    setDisplayedFaqs([]);
    setPage(1);
  }, [activeTab, searchQuery]);
  
  // Load initial FAQs
  useEffect(() => {
    loadMoreFaqs();
  }, [loadMoreFaqs]);
  
  // Intersection Observer for infinite scrolling
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

  // Get total FAQs count for the current filter/category
  const totalFaqs = filteredFaqs().length;
  const hasMore = displayedFaqs.length < totalFaqs;

  return (
    <PageLayout
      title="Frequently Asked Questions - Expert Locksmith Answers"
      description="Find comprehensive answers to common questions about our residential, commercial, automotive, and emergency locksmith services."
      schema={faqSchema}
      canonicalUrl="https://www.locksmiths.com/faq"
      keywords="locksmith FAQ, locksmith questions, locksmith services, residential locksmith, commercial locksmith, automotive locksmith, emergency locksmith"
    >
      {/* Enhanced Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/90 to-primary-hover text-white">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/3 right-10 h-40 w-40 rounded-full bg-secondary/20 blur-2xl"></div>
          <div className="absolute bottom-1/4 left-10 h-60 w-60 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute top-10 left-1/4 h-20 w-20 rounded-full bg-secondary/30 blur-xl"></div>
          
          {/* Question mark patterns */}
          <div className="absolute top-20 right-1/4 opacity-10">
            <HelpCircle size={80} />
          </div>
          <div className="absolute bottom-10 left-1/3 opacity-5">
            <HelpCircle size={120} />
          </div>
          <div className="absolute top-1/3 left-10 opacity-5">
            <BookOpen size={60} />
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center mb-6 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <HelpCircle className="w-5 h-5 mr-2 text-secondary" />
              <span className="text-sm font-medium">Expert Answers to Your Questions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Frequently Asked <span className="text-secondary">Questions</span>
            </h1>
            
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Browse our comprehensive collection of FAQs to find answers to your locksmith and security questions.
            </p>
            
            <motion.div 
              className="relative max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative bg-white/10 backdrop-blur-md rounded-lg p-1.5 flex items-center">
                <Search className="absolute left-4 text-white/70" />
                <Input
                  type="text"
                  placeholder="Search for questions or keywords..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="pl-10 py-6 text-lg bg-transparent border-none text-white placeholder:text-white/50 focus:ring-secondary focus:ring-offset-0"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
            className="relative block w-full h-[60px]"
            style={{ fill: '#f8fafc' }}  // Using a light background color
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C90.3,0,192.79,26.59,281.58,44.06,336.09,55.07,378.2,62.24,435.34,64.94Z"></path>
          </svg>
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
                      className="rounded-full px-4 py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm"
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
                          <Card className="h-full overflow-hidden hover:shadow-md transition-shadow duration-300">
                            <CardContent className="p-0">
                              <Accordion type="single" collapsible>
                                <AccordionItem value={`item-${index}`} className="border-none">
                                  <AccordionTrigger className="px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors hover:no-underline text-left">
                                    <div className="flex items-start text-left gap-3">
                                      <span className="font-bold text-primary text-lg">Q:</span>
                                      <span className="text-lg font-semibold">{faq.question}</span>
                                    </div>
                                  </AccordionTrigger>
                                  <AccordionContent className="px-6 py-4 bg-white">
                                    <div className="flex gap-3">
                                      <span className="font-bold text-secondary text-lg">A:</span>
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
                    
                    {/* Loading indicator and intersection observer target */}
                    <div ref={loaderRef} className="py-8 flex justify-center">
                      {isLoading && (
                        <div className="animate-pulse flex space-x-4">
                          <div className="h-3 w-3 bg-gray-300 rounded-full"></div>
                          <div className="h-3 w-3 bg-gray-300 rounded-full"></div>
                          <div className="h-3 w-3 bg-gray-300 rounded-full"></div>
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
                      >
                        Clear search
                      </Button>
                    </div>
                  ) : (
                    <div className="flex justify-center py-12">
                      <div className="animate-pulse flex space-x-4">
                        <div className="h-3 w-3 bg-gray-300 rounded-full"></div>
                        <div className="h-3 w-3 bg-gray-300 rounded-full"></div>
                        <div className="h-3 w-3 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>
                  )
                )}
              </TabsContent>
            </Tabs>
          </motion.div>

          <motion.div 
            className="mt-16 text-center bg-gradient-to-r from-gray-100 to-gray-50 rounded-lg p-8 shadow-sm max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team is always here to help. Contact us anytime for immediate assistance 
              with your locksmith and security needs.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
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
