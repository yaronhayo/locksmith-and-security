import ServiceLayout from "@/components/layouts/ServiceLayout";
import { Car, Clock, Check } from "lucide-react";

const CarLockoutPage = () => {
  return (
    <ServiceLayout
      title="Car Lockout Services"
      description="Professional car lockout assistance in North Bergen. Fast response times and damage-free solutions for all vehicle types."
    >
      <div className="space-y-8">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Car,
              title: "All Vehicle Types",
              description: "Service for all makes and models",
            },
            {
              icon: Clock,
              title: "Quick Response",
              description: "Fast arrival to your location",
            },
            {
              icon: Check,
              title: "Damage-Free",
              description: "Safe and professional techniques",
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
          <h2>Expert Car Lockout Solutions</h2>
          <p>
            Locked out of your car? Don't panic! Our professional automotive locksmiths are equipped to handle any car lockout situation quickly and efficiently. We service all vehicle makes and models, using specialized tools and techniques to ensure no damage to your vehicle.
          </p>

          <h2>Our Car Lockout Services Include:</h2>
          <ul>
            <li>Emergency car door unlocking</li>
            <li>Broken key extraction</li>
            <li>Key cutting and programming</li>
            <li>Transponder key services</li>
            <li>Smart key solutions</li>
          </ul>

          <h2>Why Choose Us?</h2>
          <ul>
            <li>24/7 emergency service</li>
            <li>Fast response times</li>
            <li>Competitive pricing</li>
            <li>Licensed and insured technicians</li>
            <li>Damage-free techniques</li>
          </ul>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default CarLockoutPage;