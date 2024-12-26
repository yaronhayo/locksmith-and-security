import { Building2, Shield, Users, Key } from "lucide-react";

const examples = [
  {
    icon: Building2,
    title: "Retail Store Security Upgrade",
    description: "A retail chain needed to upgrade their storefront locks after a security incident. We installed high-security locks across multiple locations while maintaining master key access."
  },
  {
    icon: Shield,
    title: "Office Building Lock Standardization",
    description: "An office complex required standardization of their locking system. We implemented a comprehensive master key system for efficient access management."
  },
  {
    icon: Users,
    title: "Employee Turnover Solution",
    description: "A business needed immediate lock changes after employee departures. We provided same-day service to ensure continued security of the premises."
  },
  {
    icon: Key,
    title: "Access Control Integration",
    description: "A growing business needed to integrate traditional locks with modern access control. We designed and implemented a hybrid solution for maximum security."
  }
];

const RealWorldExamples = () => {
  return (
    <div className="my-12">
      <h2 className="text-2xl font-semibold mb-6">Real-World Applications</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {examples.map((example, index) => {
          const Icon = example.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{example.title}</h3>
              <p className="text-gray-600">{example.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RealWorldExamples;