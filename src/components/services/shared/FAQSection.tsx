
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircleQuestion, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface FaqSectionProps {
  faqs: { question: string; answer: string }[];
}

const FaqSection: React.FC<FaqSectionProps> = ({ faqs }) => {
  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-secondary/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <span className="inline-block p-3 rounded-full bg-primary/10">
              <MessageCircleQuestion className="h-6 w-6 text-primary" />
            </span>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-primary">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-secondary"
              >
                <h3 className="text-lg font-semibold mb-3 text-primary">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Button asChild variant="outline" className="group">
              <Link to="/faq" className="flex items-center">
                View All FAQs
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
