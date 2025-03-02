
import { motion } from "framer-motion";
import { QuoteIcon } from "lucide-react";
import { SchemaScripts } from "@/components/meta/SchemaScripts";

export interface CaseStudy {
  title: string;
  description: string;
  challenge: string;
  solution: string;
  result: string;
  customerName?: string;
  customerLocation?: string;
  date?: string;
  image?: string;
}

interface CaseStudiesProps {
  serviceType: string;
  caseStudies: CaseStudy[];
}

const CaseStudies = ({ serviceType, caseStudies }: CaseStudiesProps) => {
  if (!caseStudies.length) return null;

  // Create schema for case studies
  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": caseStudies.map((study, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Article",
        "headline": study.title,
        "description": study.description,
        "author": {
          "@type": "Organization",
          "name": "Locksmith & Security LLC"
        },
        "datePublished": study.date || new Date().toISOString().split('T')[0],
        "image": study.image || "/lovable-uploads/950b5c4c-f0b8-4d22-beb0-66a7d7554476.png"
      }
    }))
  };

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <SchemaScripts schemas={[{ type: 'ItemList', data: caseStudySchema }]} />
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Real-World {serviceType} Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how we've helped customers with similar {serviceType.toLowerCase()} needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800">Challenge:</h4>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800">Solution:</h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800">Result:</h4>
                    <p className="text-gray-600">{study.result}</p>
                  </div>
                </div>
                
                {study.customerName && (
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex items-start">
                      <QuoteIcon className="h-6 w-6 text-secondary flex-shrink-0 mr-2" />
                      <div>
                        <p className="italic text-gray-600">
                          "I was very impressed with the service and professionalism."
                        </p>
                        <div className="mt-2 text-sm font-medium">
                          - {study.customerName}, {study.customerLocation || "Customer"}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
