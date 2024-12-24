import { motion } from "framer-motion";
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
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-16 bg-white rounded-lg shadow-sm p-8"
    >
      <h2 className="text-3xl font-bold mb-8 text-primary">Common Questions</h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {questions.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <AccordionItem 
              value={`item-${index}`}
              className="border rounded-lg px-4 hover:bg-gray-50 transition-colors duration-300"
            >
              <AccordionTrigger className="text-left hover:text-primary transition-colors duration-300">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </motion.section>
  );
};

export default CommonQuestions;