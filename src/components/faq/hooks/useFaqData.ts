
import { useState, useEffect, useRef, useCallback } from "react";
import { generalFaqs, residentialFaqs, automotiveFaqs, commercialFaqs, emergencyFaqs } from "@/data/faqData";

interface FaqItem {
  question: string;
  answer: string;
}

export const useFaqData = (activeTab: string, searchQuery: string) => {
  const [displayedFaqs, setDisplayedFaqs] = useState<FaqItem[]>([]);
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

  const totalFaqs = filteredFaqs().length;
  const hasMore = displayedFaqs.length < totalFaqs;

  return { displayedFaqs, isLoading, loaderRef, loadMoreFaqs, hasMore, totalFaqs };
};
