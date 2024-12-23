import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questions = [
  {
    question: "How quickly can you arrive for a house lockout?",
    answer: "We typically arrive within 15-30 minutes of your call in North Bergen and surrounding areas. Our emergency response team is available 24/7 and strategically positioned throughout the service area to ensure rapid response times."
  },
  {
    question: "What are your rates for house lockout services?",
    answer: "Our house lockout service rates start at $75, with final pricing depending on factors like time of day, lock type, and specific service requirements. We provide upfront pricing before beginning any work and don't have hidden fees."
  },
  {
    question: "Do you damage the lock when opening it?",
    answer: "No, we use non-destructive entry methods whenever possible. Our professional locksmiths are trained in various techniques to open locks without causing damage. However, if the lock is compromised, we can replace it on the spot."
  },
  {
    question: "What identification do I need to prove it's my house?",
    answer: "We require valid government-issued ID and proof of residency (utility bill, lease agreement, or property deed) matching the address. This is for your security and protection."
  },
  {
    question: "Can you handle all types of residential locks?",
    answer: "Yes, we're experienced with all types of residential locks including traditional pin tumbler locks, deadbolts, smart locks, high-security locks, and keypad entry systems."
  }
];

const CommonQuestions = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-6">Common Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {questions.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              {item.question}
            </AccordionTrigger>
            <AccordionContent>
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default CommonQuestions;