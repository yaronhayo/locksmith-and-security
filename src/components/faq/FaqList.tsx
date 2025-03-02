
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqListProps {
  displayedFaqs: FaqItem[];
  isLoading: boolean;
  loaderRef: React.RefObject<HTMLDivElement>;
  hasMore: boolean;
}

const FaqList = ({ displayedFaqs, isLoading, loaderRef, hasMore }: FaqListProps) => {
  return (
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
                  <AccordionItem value={`item-${index}`} className="border-none">
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
  );
};

export default FaqList;
