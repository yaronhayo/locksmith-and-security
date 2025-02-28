
import React, { useState, useEffect, useRef, useCallback } from "react";
import PageLayout from "@/components/layouts/PageLayout";
import ReviewCard from "@/components/reviews/ReviewCard";
import { reviews } from "@/data/reviewsData";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ServiceCategory } from "@/types/reviews";

const ITEMS_PER_PAGE = 12;

const ReviewsPage = () => {
  const [displayedReviews, setDisplayedReviews] = useState(reviews.slice(0, ITEMS_PER_PAGE));
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const loadingRef = useRef<HTMLDivElement>(null);

  // Filter reviews based on search and category
  const filteredReviews = useCallback(() => {
    let filtered = [...reviews];
    
    // Apply category filter
    if (activeCategory !== "all") {
      filtered = filtered.filter(review => {
        switch (activeCategory) {
          case "car":
            return ["Car Lockout", "Car Key Replacement", "Key Programming", "Ignition Repair", "Car Key Cutting", "Key Duplication", "Car Key Repair", "Ignition Replacement", "Key Fob Programming", "Car Lock Repair", "Broken Key Extraction", "Ignition Rekey", "Key Fob Repair"].includes(review.service);
          case "residential":
            return ["Residential Lock Change", "House Lockout", "Lock Rekey", "Lock Repair", "Security Upgrade", "Smart Lock Installation", "Emergency Lock Change", "Residential Rekey", "Property Management Locks", "Home Security System", "Mailbox Lock", "Keyless Entry Installation", "Broken Key Extraction", "Deadbolt Installation", "Garage Lock Replacement", "Master Key System", "Child-proof Locks", "Door Lock Replacement", "Home Security Upgrade", "Antique Lock Restoration", "Keypad Lock Installation", "Window Lock Installation", "Deadbolt Repair"].includes(review.service);
          case "commercial":
            return ["Commercial Security Installation", "Commercial Maintenance", "Commercial Security", "Master Key System", "Access Control System", "Access Control Installation", "Commercial Lock Installation", "Commercial Lock Repair", "Commercial Lockout", "Cabinet Lock Installation", "Commercial Rekey", "Biometric Access Control", "Restricted Key Systems", "Emergency Exit Hardware", "Digital Code Locks", "Keyless Entry Systems", "Lock Cylinder Replacement", "Security Assessment"].includes(review.service);
          default:
            return true;
        }
      });
    }
    
    // Apply search filter if query exists
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        review =>
          review.name.toLowerCase().includes(query) ||
          review.text.toLowerCase().includes(query) ||
          review.service.toLowerCase().includes(query) ||
          review.location.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  }, [searchQuery, activeCategory]);

  // Load more reviews when scrolling
  const loadMoreReviews = useCallback(() => {
    if (loading) return;
    
    const filtered = filteredReviews();
    const nextItems = filtered.slice(
      displayedReviews.length,
      displayedReviews.length + ITEMS_PER_PAGE
    );
    
    if (nextItems.length > 0) {
      setLoading(true);
      // Simulate loading delay
      setTimeout(() => {
        setDisplayedReviews(prev => [...prev, ...nextItems]);
        setCurrentPage(prev => prev + 1);
        setLoading(false);
      }, 500);
    }
  }, [displayedReviews.length, filteredReviews, loading]);

  // Reset when filters change
  useEffect(() => {
    const filtered = filteredReviews();
    setDisplayedReviews(filtered.slice(0, ITEMS_PER_PAGE));
    setCurrentPage(1);
  }, [searchQuery, activeCategory, filteredReviews]);

  // Intersection Observer for infinite scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          loadMoreReviews();
        }
      },
      { threshold: 0.1 }
    );

    if (loadingRef.current) {
      observer.observe(loadingRef.current);
    }

    return () => {
      if (loadingRef.current) {
        observer.unobserve(loadingRef.current);
      }
    };
  }, [loadMoreReviews, loading]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category as ServiceCategory | "all");
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Get the total number of reviews after filtering
  const totalFilteredReviews = filteredReviews().length;
  const hasMoreReviews = displayedReviews.length < totalFilteredReviews;

  return (
    <PageLayout
      title="Customer Reviews | Locksmith & Security LLC"
      description="Read authentic reviews from our satisfied customers about our professional locksmith services in North Bergen and surrounding areas."
      heroTitle="Customer Testimonials"
      heroDescription="See what our clients have to say about our locksmith services in North Bergen and surrounding areas"
    >
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          className="max-w-4xl mx-auto mb-10 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search reviews by name, service, or location..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="pl-10 py-6 text-lg rounded-lg border-gray-300 focus:border-primary shadow-sm"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Tabs 
            defaultValue="all" 
            className="max-w-5xl mx-auto mb-8"
            onValueChange={handleCategoryChange}
          >
            <div className="flex justify-center mb-8 overflow-x-auto">
              <TabsList className="bg-gray-100 p-1 rounded-full">
                <TabsTrigger value="all" className="rounded-full px-4 py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm">
                  All Reviews
                </TabsTrigger>
                <TabsTrigger value="residential" className="rounded-full px-4 py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm">
                  Residential
                </TabsTrigger>
                <TabsTrigger value="commercial" className="rounded-full px-4 py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm">
                  Commercial
                </TabsTrigger>
                <TabsTrigger value="car" className="rounded-full px-4 py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm">
                  Automotive
                </TabsTrigger>
              </TabsList>
            </div>
          </Tabs>
        </motion.div>

        <div className="mb-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-700">
            {totalFilteredReviews} Reviews
            {activeCategory !== "all" && ` for ${activeCategory === "car" ? "Automotive" : activeCategory === "residential" ? "Residential" : "Commercial"} Services`}
            {searchQuery && ` matching "${searchQuery}"`}
          </h2>
        </div>

        {displayedReviews.length > 0 ? (
          <>
            <ScrollArea className="rounded-md">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {displayedReviews.map((review, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index % ITEMS_PER_PAGE * 0.05 }}
                  >
                    <ReviewCard review={review} index={index} />
                  </motion.div>
                ))}
              </div>
            </ScrollArea>

            {/* Loading indicator and intersection observer target */}
            <div ref={loadingRef} className="h-20 flex justify-center items-center">
              {loading && (
                <div className="flex space-x-4">
                  <div className="w-3 h-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0ms" }}></div>
                  <div className="w-3 h-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: "150ms" }}></div>
                  <div className="w-3 h-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: "300ms" }}></div>
                </div>
              )}
              {!loading && !hasMoreReviews && (
                <p className="text-gray-500">No more reviews to load</p>
              )}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-xl text-gray-500 mb-4">No reviews found with your current filters</p>
              <button
                className="text-primary hover:underline"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
              >
                Clear all filters
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default ReviewsPage;
