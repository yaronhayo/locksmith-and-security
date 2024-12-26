import { Clock, Car, Shield } from "lucide-react";

const process = [
  { 
    icon: Clock, 
    title: "Contact Us", 
    description: "Call or fill out our form for immediate assistance",
    ariaLabel: "Step 1: Contact us through phone or online form"
  },
  { 
    icon: Car, 
    title: "Quick Response", 
    description: "Our technician will arrive within 30 minutes",
    ariaLabel: "Step 2: Wait for our quick response within 30 minutes"
  },
  { 
    icon: Shield, 
    title: "Problem Solved", 
    description: "Professional service with satisfaction guaranteed",
    ariaLabel: "Step 3: Get your problem solved with guaranteed satisfaction"
  }
];

const ProcessSection = () => {
  return (
    <section 
      className="py-20 bg-gray-50"
      aria-labelledby="process-heading"
    >
      <div className="container mx-auto px-4">
        <h2 
          id="process-heading"
          className="text-3xl font-bold text-center mb-12"
        >
          How It Works
        </h2>
        <div 
          className="grid md:grid-cols-3 gap-8"
          role="list"
        >
          {process.map((step, index) => (
            <div 
              key={step.title}
              className="text-center"
              role="listitem"
              aria-label={step.ariaLabel}
            >
              <step.icon 
                className="w-16 h-16 mx-auto mb-4 text-primary" 
                aria-hidden="true"
              />
              <h3 className="text-xl font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;