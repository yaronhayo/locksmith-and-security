// ... Similar structure as union-city.tsx, with West New York specific content
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Building2, Car, Home, Key } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Locksmith Services",
    description: "Professional home security solutions for West New York residents, including lock installation and emergency services."
  },
  {
    icon: Car,
    title: "Automotive Locksmith",
    description: "24/7 vehicle locksmith services in West New York, including key replacement and programming for all car models."
  },
  {
    icon: Building2,
    title: "Commercial Security",
    description: "Comprehensive business security solutions for West New York establishments, from high-security locks to access control."
  },
  {
    icon: Key,
    title: "Emergency Services",
    description: "Fast response emergency locksmith services throughout West New York, available 24/7."
  }
];

const WestNewYorkArea = () => {
  return (
    <>
      <Helmet>
        <title>24/7 Locksmith Services in West New York, NJ | Professional Security Solutions</title>
        <meta 
          name="description" 
          content="Expert locksmith services in West New York, NJ. Available 24/7 for residential, commercial, and automotive locksmith needs." 
        />
      </Helmet>
      <Header />
      <main className="min-h-screen">
        <section className="hero-gradient py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
              West New York Locksmith Services
            </h1>
            <p className="text-xl text-white/90 text-center max-w-2xl mx-auto">
              Professional locksmith services serving West New York with 24/7 availability
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services in West New York</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Serving West New York, NJ</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 mb-6">
                West New York's diverse community requires specialized security solutions. Our team is equipped to handle all locksmith needs in the area, from residential to commercial services.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md mt-8">
                <h3 className="text-xl font-semibold mb-4">Why Choose Our West New York Locksmith Services?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Rapid Response Times
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Experienced Local Technicians
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Affordable Rates
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Complete Security Solutions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default WestNewYorkArea;