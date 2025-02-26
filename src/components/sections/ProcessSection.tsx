
import { Clock, Car, Shield, Phone, Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const process = [
  { 
    icon: Phone, 
    title: "Contact Us", 
    description: "Our team is available 24/7 to assist you with any locksmith needs through our hotline or online form.",
    steps: [
      "Call (201) 748-2070",
      "Describe your situation",
      "Get instant price estimate"
    ]
  },
  { 
    icon: Car, 
    title: "Professional Service", 
    description: "A licensed and insured technician will be dispatched to your location to assist you with your locksmith needs.",
    steps: [
      "Professional technician dispatch",
      "Skilled service delivery",
      "Fully equipped service vehicle"
    ]
  },
  { 
    icon: Check, 
    title: "Problem Solved", 
    description: "Our expert will resolve your lock-related issue efficiently, ensuring your complete satisfaction.",
    steps: [
      "Professional service delivery",
      "Quality guarantee",
      "Transparent pricing"
    ]
  }
];

const ProcessSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            How Our Service Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Professional and reliable locksmith service in three simple steps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-6">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground mb-6">{step.description}</p>
                  
                  <ul className="space-y-3 text-left w-full">
                    {step.steps.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {index < process.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-primary" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center justify-center bg-primary/10 px-4 py-2 rounded-full">
            <Shield className="w-5 h-5 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Licensed & Insured Professional Service</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
