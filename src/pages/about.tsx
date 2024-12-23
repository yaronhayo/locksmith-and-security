import PageLayout from "@/components/layouts/PageLayout";
import { Shield, Award, Users, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutPage = () => {
  const features = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed and insured for your peace of mind",
    },
    {
      icon: Award,
      title: "Expert Team",
      description: "Highly trained and experienced locksmiths",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Dedicated to exceptional customer service",
    },
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Available around the clock for emergencies",
    },
  ];

  return (
    <PageLayout
      title="About Us"
      description="Your trusted local locksmith serving North Bergen since 2010"
      heroTitle="About Our Company"
      heroDescription="Professional locksmith services with a commitment to excellence"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-lg text-gray-600">
            With over a decade of experience serving North Bergen and surrounding areas,
            we've built our reputation on trust, reliability, and exceptional service.
            Our team of certified locksmiths is committed to providing the highest
            quality security solutions for residential, commercial, and automotive needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide reliable, professional, and affordable locksmith services
                while ensuring the highest level of security for our clients.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Integrity in every interaction</li>
                <li>• Excellence in service delivery</li>
                <li>• Commitment to customer satisfaction</li>
                <li>• Continuous professional development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutPage;