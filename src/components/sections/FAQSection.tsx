import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const allFaqs = [
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

const FAQSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedFaqs = showAll ? allFaqs : allFaqs.slice(0, 3);

  return (
    <section className="py-20 bg-gray-50">
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
          
          <div className="text-center mt-8">
            {!showAll && displayedFaqs.length < allFaqs.length ? (
              <Button 
                variant="outline" 
                onClick={() => setShowAll(true)}
                className="mx-auto"
              >
                Show More
              </Button>
            ) : showAll ? (
              <Button asChild variant="default">
                <a href="/faq" className="flex items-center">
                  See All FAQs <ArrowRight className="ml-2" />
                </a>
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;