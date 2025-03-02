
import React, { useState, useEffect } from "react";
import PageLayout from "@/components/layouts/PageLayout";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { generalFaqs, residentialFaqs, automotiveFaqs, commercialFaqs, emergencyFaqs } from "@/data/faqData";
import FaqSearch from "@/components/faq/FaqSearch";
import FaqTabs from "@/components/faq/FaqTabs";
import FaqList from "@/components/faq/FaqList";
import FaqEmptyState from "@/components/faq/FaqEmptyState";
import FaqCallToAction from "@/components/faq/FaqCallToAction";
import { useFaqData } from "@/components/faq/hooks/useFaqData";
import { createBreadcrumbSchema } from "@/components/meta/schema/BreadcrumbSchema";

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const { 
    displayedFaqs, 
    isLoading, 
    loaderRef, 
    hasMore 
  } = useFaqData(activeTab, searchQuery);

  // Create breadcrumb schema
  const breadcrumbSchema = createBreadcrumbSchema({
    breadcrumbs: [
      { name: "Home", path: "/", item: "/" },
      { name: "FAQ", path: "/faq", item: "/faq" }
    ],
    baseUrl: "https://247locksmithandsecurity.com"
  });

  // Create FAQ Schema for SEO
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

  // Setup intersection observer for infinite scrolling
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting && !isLoading && hasMore) {
        // This will be handled by the useFaqData hook
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
  }, [isLoading, hasMore]);

  return (
    <PageLayout
      title="Frequently Asked Questions - Expert Locksmith Answers"
      description="Find comprehensive answers to common questions about our residential, commercial, automotive, and emergency locksmith services."
      schema={faqSchema}
      canonicalUrl="https://www.locksmiths.com/faq"
      keywords="locksmith FAQ, locksmith questions, locksmith services, residential locksmith, commercial locksmith, automotive locksmith, emergency locksmith"
      heroTitle="Frequently Asked Questions"
      heroDescription="Browse our comprehensive collection of FAQs to find answers to your locksmith and security questions."
      hideBreadcrumbs={false} 
      schemas={[faqSchema, breadcrumbSchema]}
    >
      <FaqSearch searchQuery={searchQuery} handleSearch={handleSearch} />

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
              value={activeTab}
            >
              <FaqTabs activeTab={activeTab} setActiveTab={setActiveTab} />

              <TabsContent value={activeTab} className="mt-6">
                {displayedFaqs.length > 0 ? (
                  <FaqList 
                    displayedFaqs={displayedFaqs}
                    isLoading={isLoading}
                    loaderRef={loaderRef}
                    hasMore={hasMore}
                  />
                ) : (
                  searchQuery ? (
                    <FaqEmptyState 
                      searchQuery={searchQuery} 
                      clearSearch={() => setSearchQuery("")} 
                    />
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

          <FaqCallToAction />
        </div>
      </div>
    </PageLayout>
  );
};

export default FAQPage;
