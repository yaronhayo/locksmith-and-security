// ... Similar structure as previous files, with Secaucus specific content
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Building2, Car, Home, Key } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Locksmith Services",
    description: "Complete home security solutions for Secaucus residents, including smart lock installation and emergency services."
  },
  {
    icon: Car,
    title: "Automotive Locksmith",
    description: "24/7 automotive locksmith services in Secaucus, including key replacement and programming for all vehicles."
  },
  {
    icon: Building2,
    title: "Commercial Security",
    description: "Advanced security solutions for Secaucus businesses, from master key systems to access control installation."
  },
  {
    icon: Key,
    title: "Emergency Services",
    description: "Round-the-clock emergency locksmith services throughout Secaucus, with quick response times."
  }
];

const SecaucusArea = () => {
  return (
    <>
      <Helmet>
        <title>24/7 Locksmith Services in Secaucus, NJ | Professional Security Solutions</title>
        <meta 
          name="description" 
          content="Expert locksmith services in Secaucus, NJ. Available 24/7 for residential, commercial, and automotive locksmith needs." 
        />
      </Helmet>
      <Header />
      <main className="min-h-screen">
        <section className="hero-gradient py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
              Secaucus Locksmith Services
            </h1>
            <p className="text-xl text-white/90 text-center max-w-2xl mx-auto">
              Your trusted local locksmith serving Secaucus with 24/7 professional security solutions
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services in Secaucus</h2>
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
            <h2 className="text-3xl font-bold text-center mb-8">Serving Secaucus, NJ</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 mb-6">
                Secaucus's unique mix of residential and commercial areas requires specialized security solutions. Our team provides comprehensive locksmith services tailored to local needs.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md mt-8">
                <h3 className="text-xl font-semibold mb-4">Why Choose Our Secaucus Locksmith Services?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Fast Response Times
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Professional Local Team
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Competitive Rates
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Modern Security Solutions
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

export default SecaucusArea;