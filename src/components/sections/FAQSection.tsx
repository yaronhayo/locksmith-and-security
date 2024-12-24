import { useState, useEffect, useRef } from "react";
import FAQCard from "@/components/faq/FAQCard";
import LoadMoreButton from "@/components/faq/LoadMoreButton";
import LoadingSkeleton from "@/components/faq/LoadingSkeleton";
import { initialFaqs, additionalFaqs } from "@/data/faqData";

const FAQSection = () => {
  const [displayedFaqs, setDisplayedFaqs] = useState([...initialFaqs]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loadMoreRef = useRef(null);
  const currentIndex = useRef(0);

  const loadMoreFaqs = () => {
    setLoading(true);
    setTimeout(() => {
      const nextBatch = additionalFaqs.slice(currentIndex.current, currentIndex.current + 5);
      if (nextBatch.length > 0) {
        setDisplayedFaqs(prev => [...prev, ...nextBatch]);
        currentIndex.current += 5;
        if (currentIndex.current >= additionalFaqs.length) {
          setHasMore(false);
        }
      } else {
        setHasMore(false);
      }
      setLoading(false);
    }, 1000);
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
            <FAQCard key={index} question={faq.question} answer={faq.answer} />
          ))}
          
          {loading && <LoadingSkeleton />}
          
          <div ref={loadMoreRef} className="text-center pt-8">
            <LoadMoreButton 
              loading={loading}
              hasMore={hasMore}
              onLoadMore={loadMoreFaqs}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;