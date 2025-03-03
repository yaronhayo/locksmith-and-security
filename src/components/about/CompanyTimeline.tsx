
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const timelineEvents = [{
  year: "2010",
  title: "Company Founded",
  description: "Established in North Bergen with a mission to provide reliable security solutions."
}, {
  year: "2013",
  title: "Expanded Service Area",
  description: "Broadened our coverage to include all of Hudson County and surrounding areas."
}, {
  year: "2016",
  title: "Advanced Certification",
  description: "Our team received advanced certification in electronic security systems and smart lock technology."
}, {
  year: "2019",
  title: "Service Excellence Award",
  description: "Recognized for outstanding customer service and professional excellence."
}, {
  year: "2022",
  title: "New Headquarters",
  description: "Opened our new, expanded headquarters to better serve our growing customer base."
}];

const CompanyTimeline = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Since 2010, we've been committed to providing top-quality locksmith services 
          and continuously improving to meet our customers' needs.
        </p>
      </div>
      
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 rounded-full"></div>
        
        {/* Timeline events */}
        <div className="space-y-20">
          {timelineEvents.map((event, index) => (
            <motion.div 
              key={index}
              className={`relative flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'} md:justify-between`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Year marker (always visible on mobile, left side on desktop for odd items) */}
              <div className={`absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center md:relative md:transform-none md:left-auto ${index % 2 === 0 ? 'md:order-1' : 'md:order-3'}`}>
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold">{event.year}</span>
                </div>
              </div>
              
              {/* Content (right side for even, left for odd) */}
              <div className={`md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:order-2 text-left' : 'md:order-2 md:text-right'}`}>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold mb-2 text-primary-dark">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
              
              {/* Empty space for the other side */}
              <div className={`hidden md:block md:w-5/12 ${index % 2 === 0 ? 'order-3' : 'order-1'}`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;
