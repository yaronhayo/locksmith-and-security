
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCheck, Clock, ShieldCheck, Wrench, Map } from 'lucide-react';
import { CaseStudy } from '@/components/services/shared/CaseStudies';

interface CategorySuccessStoriesProps {
  category: string;
  stories: CaseStudy[];
}

const CategorySuccessStories: React.FC<CategorySuccessStoriesProps> = ({
  category,
  stories
}) => {
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
          <h2 className="text-3xl font-bold mb-4">Our {category} Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real-world examples of how we've helped customers with their {category.toLowerCase()} locksmith needs
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">{story.title}</h3>
                <p className="text-gray-500 mb-6">{story.description}</p>
                
                <div className="space-y-5 mb-6">
                  <div className="flex items-start">
                    <div className="bg-red-100 p-2 rounded-full mr-3 flex-shrink-0">
                      <Clock className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">The Challenge</h4>
                      <p className="text-gray-600">{story.challenge}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-3 flex-shrink-0">
                      <Wrench className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Our Solution</h4>
                      <p className="text-gray-600">{story.solution}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-3 flex-shrink-0">
                      <CheckCheck className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">The Result</h4>
                      <p className="text-gray-600">{story.result}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap justify-between border-t pt-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Map className="h-4 w-4 mr-1 text-gray-400" />
                    {story.customerLocation}
                  </div>
                  <div>{story.date}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySuccessStories;
