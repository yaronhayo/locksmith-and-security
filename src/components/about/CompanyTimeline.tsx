
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
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary relative inline-block">
            Our Journey
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/30"></span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            From our humble beginnings to where we are today, we've been dedicated to providing excellent service.
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/80 to-primary/20"></div>
          
          <div className="relative z-10">
            {timelineEvents.map((event, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-start mb-12 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
              >
                <div className={`w-1/2 px-4 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className={`bg-white rounded-xl shadow-md p-6 border-t-4 ${index % 2 === 0 ? 'border-secondary ml-auto' : 'border-primary mr-auto'}`}>
                    <span className={`text-lg font-bold ${index % 2 === 0 ? 'text-secondary' : 'text-primary'}`}>
                      {event.year}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-800 mt-2">{event.title}</h3>
                    <p className="text-gray-600 mt-2">{event.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className={`w-12 h-12 rounded-full ${index % 2 === 0 ? 'bg-secondary' : 'bg-primary'} flex items-center justify-center`}>
                    <CheckCircle className="text-white w-6 h-6" />
                  </div>
                </div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;
