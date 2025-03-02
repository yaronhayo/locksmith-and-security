
import React from 'react';
import { motion } from 'framer-motion';
import { UserCircle2, Calendar, MapPin, Quote } from 'lucide-react';

export interface CaseStudy {
  title: string;
  description: string;
  challenge: string;
  solution: string;
  result: string;
  customerName: string;
  customerLocation: string;
  date: string;
}

interface CaseStudiesProps {
  serviceType: string;
  caseStudies: CaseStudy[];
}

const CaseStudies: React.FC<CaseStudiesProps> = ({ serviceType, caseStudies }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Read how we've helped customers with their {serviceType.toLowerCase()} needs
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="text-secondary h-6 w-6 mr-2 flex-shrink-0" />
                  <h3 className="text-xl font-semibold">{study.title}</h3>
                </div>
                
                <p className="text-gray-500 italic mb-6">{study.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-1">The Challenge</h4>
                    <p className="text-gray-700">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Our Solution</h4>
                    <p className="text-gray-700">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-primary mb-1">The Result</h4>
                    <p className="text-gray-700">{study.result}</p>
                  </div>
                </div>
                
                <div className="border-t pt-4 flex flex-wrap items-center justify-between gap-3 text-sm">
                  <div className="flex items-center">
                    <UserCircle2 className="h-4 w-4 text-gray-500 mr-1" />
                    <span>{study.customerName}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-gray-500 mr-1" />
                    <span>{study.customerLocation}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 text-gray-500 mr-1" />
                    <span>{study.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
