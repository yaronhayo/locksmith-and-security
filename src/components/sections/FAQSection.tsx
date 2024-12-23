import { Card, CardContent } from "@/components/ui/card";

const faqs = [
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
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;