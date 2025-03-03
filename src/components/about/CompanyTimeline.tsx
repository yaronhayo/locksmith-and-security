
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
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From our humble beginnings to becoming a trusted security provider in North Bergen
            and the surrounding areas, we've remained committed to excellence.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-primary-light"></div>

          {/* Timeline events */}
          {timelineEvents.map((event, index) => (
            <motion.div 
              key={event.year}
              className={`relative flex items-center mb-16 last:mb-0 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Timeline connector and year marker */}
              <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
                  <span className="font-bold text-white">{event.year}</span>
                </div>
              </div>

              {/* Content box */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-16 text-right' : 'pl-16'}`}>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;
