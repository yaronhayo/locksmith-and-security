
import { Clock, Car, Shield } from "lucide-react";

const process = [
  { icon: Clock, title: "Contact Us", description: "Call or fill out our form for immediate assistance" },
  { icon: Car, title: "Professional Service", description: "Expert technician dispatched to your location" },
  { icon: Shield, title: "Problem Solved", description: "Professional service with satisfaction guaranteed" }
];

const ProcessSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {process.map((step, index) => (
            <div key={index} className="text-center">
              <step.icon className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
