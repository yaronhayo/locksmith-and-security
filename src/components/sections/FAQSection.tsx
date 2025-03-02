
import React, { useRef } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ChevronRight, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { initialFaqs } from "@/data/faqData";
import { FAQ } from "@/data/faqData";
import { FAQsAccordion } from "./FAQAccordion";

interface FAQSectionProps {
  title?: string;
  description?: string;
  faqs?: FAQ[];
}

const FAQSection = ({
  title = "Frequently Asked Questions",
  description = "Find answers to common questions about our services.",
  faqs = initialFaqs,
}: FAQSectionProps) => {
  // Only take the first 12 FAQs from the provided FAQs or initialFaqs
  const displayedFaqs = faqs.slice(0, 12);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white rounded-xl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <HelpCircle className="w-12 h-12 mx-auto mb-4 text-primary animate-bounce" />
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>

        <ScrollArea
          className="h-[600px] max-w-6xl mx-auto rounded-lg border border-gray-200 p-4"
          ref={scrollAreaRef}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <FAQsAccordion faqs={displayedFaqs} />
          </div>
        </ScrollArea>

        <div className="flex justify-center mt-8">
          <Button asChild variant="outline" size="lg" className="group">
            <Link to="/faq">
              Read More FAQ's
              <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
