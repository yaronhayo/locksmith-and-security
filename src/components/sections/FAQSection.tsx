import { useState, useEffect, useRef } from "react";
import FAQCard from "@/components/faq/FAQCard";
import LoadMoreButton from "@/components/faq/LoadMoreButton";
import LoadingSkeleton from "@/components/faq/LoadingSkeleton";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { initialFaqs, additionalFaqs } from "@/data/faqData";

const FAQSection = () => {
  const [displayedFaqs, setDisplayedFaqs] = useState([...initialFaqs]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const currentIndex = useRef(initialFaqs.length);

  const loadMoreFaqs = () => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    setTimeout(() => {
      const nextBatch = additionalFaqs.slice(currentIndex.current, currentIndex.current + 10);
      if (nextBatch.length > 0) {
        setDisplayedFaqs(prev => [...prev, ...nextBatch]);
        currentIndex.current += 10;
        if (currentIndex.current >= additionalFaqs.length) {
          setHasMore(false);
        }
      } else {
        setHasMore(false);
      }
      setLoading(false);
    }, 500);
  };

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;
    if (scrollHeight - scrollTop <= clientHeight * 1.5) {
      loadMoreFaqs();
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <ScrollArea 
          className="h-[600px] max-w-3xl mx-auto rounded-lg border border-gray-200 p-4"
          onScroll={handleScroll}
          ref={scrollAreaRef}
        >
          <div className="space-y-6">
            {displayedFaqs.map((faq, index) => (
              <FAQCard key={index} question={faq.question} answer={faq.answer} />
            ))}
            {loading && <LoadingSkeleton />}
          </div>
        </ScrollArea>
        <div className="flex justify-center mt-8">
          <Button asChild variant="outline" size="lg" className="group">
            <Link to="/faq">
              See More FAQs
              <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
