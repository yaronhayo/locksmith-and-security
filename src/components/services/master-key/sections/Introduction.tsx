
import { Check } from "lucide-react";

const Introduction = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Comprehensive Master Key System Solutions</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-gray-700 mb-4">
            A well-designed master key system provides precise control over who can access specific areas of your facility, creating a balance between security and convenience.
          </p>
          <p className="text-gray-700 mb-4">
            Our professional locksmiths specialize in designing and implementing custom master key systems that meet the unique security requirements of your business, from simple systems to complex multi-level hierarchies.
          </p>
          <p className="text-gray-700">
            We use high-quality restricted keyways to prevent unauthorized key duplication, ensuring the long-term integrity of your security system.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Key Benefits</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
              <span>Streamlined access management with hierarchical control</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
              <span>Reduced key carrying with selective access privileges</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
              <span>Enhanced security with restricted keyways</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
              <span>Scalable design that grows with your business</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
              <span>Comprehensive key control and tracking systems</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
