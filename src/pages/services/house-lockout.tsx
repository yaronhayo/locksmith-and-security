import ServiceLayout from "@/components/layouts/ServiceLayout";
import { Shield, Clock, Check } from "lucide-react";

const HouseLockoutPage = () => {
  return (
    <ServiceLayout
      title="House Lockout Services"
      description="Fast and reliable house lockout solutions in North Bergen. Available 24/7 for emergency lockout situations."
    >
      <div className="space-y-8">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Shield,
              title: "Licensed & Insured",
              description: "Professional and certified locksmith services",
            },
            {
              icon: Clock,
              title: "24/7 Availability",
              description: "Emergency services available any time",
            },
            {
              icon: Check,
              title: "Guaranteed Work",
              description: "100% satisfaction guaranteed on all services",
            },
          ].map((feature, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="prose max-w-none">
          <h2>Professional House Lockout Services in North Bergen</h2>
          <p>
            Being locked out of your house can be a stressful experience. Our professional locksmith team is here to help you regain access to your home quickly and safely. We use advanced tools and techniques to ensure no damage to your property.
          </p>

          <h2>Why Choose Our House Lockout Service?</h2>
          <ul>
            <li>Fast response time - typically within 30 minutes</li>
            <li>Damage-free entry techniques</li>
            <li>Competitive and transparent pricing</li>
            <li>Professional and courteous service</li>
            <li>Available 24/7 for emergencies</li>
          </ul>

          <h2>Our Process</h2>
          <p>
            1. Call our emergency number or fill out the booking form<br />
            2. Our technician arrives at your location<br />
            3. Quick assessment of the situation<br />
            4. Safe and efficient lockout resolution<br />
            5. Optional security check and recommendations
          </p>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default HouseLockoutPage;