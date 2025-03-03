
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const timelineEvents = [
  {
    year: "2010",
    title: "Company Founded",
    description: "Established in North Bergen with a mission to provide reliable security solutions."
  }, 
  {
    year: "2013",
    title: "Expanded Service Area",
    description: "Broadened our coverage to include all of Hudson County and surrounding areas."
  }, 
  {
    year: "2016",
    title: "Advanced Certification",
    description: "Our team received advanced certification in electronic security systems and smart lock technology."
  }, 
  {
    year: "2019",
    title: "Service Excellence Award",
    description: "Recognized for outstanding customer service and professional excellence."
  }, 
  {
    year: "2022",
    title: "New Headquarters",
    description: "Opened our new, expanded headquarters to better serve our growing customer base."
  }
];

const CompanyTimeline = () => {
  return (
    <section id="company-timeline" className="py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Journey
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            A timeline of our company's growth and achievements since our founding in 2010.
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

          {/* Timeline events */}
          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <motion.div 
                key={event.year}
                className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="md:w-1/2 flex flex-col items-center md:items-end md:pr-12 mb-6 md:mb-0">
                  <div className={`bg-white p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} hover:shadow-xl transition-shadow duration-300 md:max-w-md`}>
                    <div className="font-bold text-primary text-xl mb-2">{event.year}</div>
                    <h3 className="font-bold text-xl mb-2">{event.title}</h3>
                    <p className="text-gray-700">{event.description}</p>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="bg-primary p-1 rounded-full">
                    <CheckCircle className="text-white w-6 h-6" />
                  </div>
                </div>

                <div className="md:w-1/2 md:pl-12">
                  {/* Empty div for spacing on right side */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;
