import ServiceLayout from "@/components/layouts/ServiceLayout";
import { Building2, Shield, Clock } from "lucide-react";
import { Helmet } from "react-helmet";

const BusinessLockoutPage = () => {
  return (
    <>
      <Helmet>
        <title>Commercial Lockout Services | Locksmith & Security LLC</title>
        <meta name="description" content="24/7 commercial lockout services in North Bergen. Professional business security solutions and emergency access for all types of commercial properties." />
      </Helmet>
      <ServiceLayout
        title="Commercial Lockout Services"
        description="Professional commercial locksmith services in North Bergen. Secure solutions for businesses of all sizes."
      >
        <div className="space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Building2,
                title: "All Business Types",
                description: "Solutions for any commercial property",
              },
              {
                icon: Shield,
                title: "High Security",
                description: "Advanced security solutions",
              },
              {
                icon: Clock,
                title: "24/7 Service",
                description: "Round-the-clock availability",
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
            <h2>Commercial Security Solutions</h2>
            <p>
              We understand that business security is crucial. Our commercial locksmith services provide comprehensive solutions for all types of businesses, from small retail shops to large corporate offices. We ensure minimal disruption to your business operations while maintaining the highest security standards.
            </p>

            <h2>Commercial Services We Offer:</h2>
            <ul>
              <li>Emergency lockout assistance</li>
              <li>Master key system installation</li>
              <li>Access control systems</li>
              <li>High-security lock installation</li>
              <li>Commercial safe services</li>
              <li>Security system upgrades</li>
            </ul>

            <h2>Business Security Expertise</h2>
            <p>
              Our team specializes in commercial security solutions that protect your assets, employees, and customers. We provide:
            </p>
            <ul>
              <li>Security assessments</li>
              <li>Custom security plans</li>
              <li>Regular maintenance</li>
              <li>24/7 emergency support</li>
            </ul>
          </div>
        </div>
      </ServiceLayout>
    </>
  );
};

export default BusinessLockoutPage;