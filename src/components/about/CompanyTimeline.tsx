
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
    <section className="container mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A timeline of our growth and commitment to excellence in the security industry.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={event.year}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex mb-8 relative"
          >
            {/* Timeline vertical line */}
            {index < timelineEvents.length - 1 && (
              <div className="absolute left-8 top-10 w-0.5 h-full bg-gray-200"></div>
            )}
            
            {/* Year circle */}
            <div className="min-w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold z-10">
              {event.year}
            </div>
            
            {/* Content */}
            <div className="ml-6 bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex-1">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                <h3 className="font-semibold text-lg">{event.title}</h3>
              </div>
              <p className="text-gray-600 mt-2">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CompanyTimeline;
