import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Building2, Car, Home, Key } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Locksmith Services",
    description: "Comprehensive home security solutions for Jersey City residents, including smart lock installation and emergency lockout assistance."
  },
  {
    icon: Car,
    title: "Automotive Locksmith",
    description: "24/7 vehicle locksmith services throughout Jersey City, including key replacement and programming for all car makes and models."
  },
  {
    icon: Building2,
    title: "Commercial Security",
    description: "Advanced security solutions for Jersey City businesses, from high-security locks to access control systems."
  },
  {
    icon: Key,
    title: "Emergency Services",
    description: "Rapid response emergency locksmith services across Jersey City, available 24 hours a day."
  }
];

const JerseyCityArea = () => {
  return (
    <>
      <Helmet>
        <title>24/7 Locksmith Services in Jersey City, NJ | Professional Security Solutions</title>
        <meta 
          name="description" 
          content="Expert locksmith services in Jersey City, NJ. Available 24/7 for residential, commercial, and automotive locksmith needs. Fast and reliable service." 
        />
      </Helmet>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="hero-gradient py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
              Jersey City Locksmith Services
            </h1>
            <p className="text-xl text-white/90 text-center max-w-2xl mx-auto">
              Professional locksmith services serving all neighborhoods of Jersey City with 24/7 availability
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services in Jersey City</h2>
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

        {/* Local Area Information */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Serving Jersey City, NJ</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 mb-6">
                As New Jersey's second-largest city, Jersey City presents unique security challenges and opportunities. Our team is well-versed in serving both the downtown business district and residential neighborhoods with specialized security solutions.
              </p>
              <p className="text-gray-600 mb-6">
                We provide rapid response times throughout Jersey City's diverse neighborhoods, from Exchange Place to Journal Square, The Heights, and beyond. Our mobile units are always ready to provide immediate assistance wherever you are in Jersey City.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md mt-8">
                <h3 className="text-xl font-semibold mb-4">Why Choose Our Jersey City Locksmith Services?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Experienced with High-Rise Building Security
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    24/7 Emergency Services Throughout Jersey City
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Familiar with Local Building Codes and Regulations
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Specialized in Modern Security Solutions
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

export default JerseyCityArea;