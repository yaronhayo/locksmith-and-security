import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Building2, Car, Home, Key } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Locksmith Services",
    description: "Complete home security solutions including lock installation, repair, and emergency lockout services for North Bergen residents."
  },
  {
    icon: Car,
    title: "Automotive Locksmith",
    description: "24/7 car lockout assistance, key replacement, and transponder key programming in North Bergen and surrounding areas."
  },
  {
    icon: Building2,
    title: "Commercial Security",
    description: "Business security solutions including master key systems, access control, and emergency locksmith services for North Bergen businesses."
  },
  {
    icon: Key,
    title: "Emergency Services",
    description: "Round-the-clock emergency locksmith services in North Bergen, with fast response times and reliable solutions."
  }
];

const NorthBergenArea = () => {
  return (
    <>
      <Helmet>
        <title>24/7 Locksmith Services in North Bergen, NJ | Professional Security Solutions</title>
        <meta 
          name="description" 
          content="Expert locksmith services in North Bergen, NJ. Available 24/7 for residential, commercial, and automotive locksmith needs. Fast response times and professional service." 
        />
      </Helmet>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="hero-gradient py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
              North Bergen Locksmith Services
            </h1>
            <p className="text-xl text-white/90 text-center max-w-2xl mx-auto">
              Your trusted local locksmith serving North Bergen and surrounding areas with 24/7 professional security solutions
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services in North Bergen</h2>
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
            <h2 className="text-3xl font-bold text-center mb-8">Serving North Bergen, NJ</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 mb-6">
                Located in Hudson County, North Bergen is a diverse community with unique security needs. Our local locksmith team understands the specific requirements of North Bergen residents and businesses, providing tailored security solutions for homes, vehicles, and commercial properties.
              </p>
              <p className="text-gray-600 mb-6">
                We pride ourselves on fast response times throughout North Bergen, including quick service to areas like Bergenline Avenue, Kennedy Boulevard, and surrounding neighborhoods. Our mobile locksmith units are strategically positioned to reach you quickly when you need us most.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md mt-8">
                <h3 className="text-xl font-semibold mb-4">Why Choose Our North Bergen Locksmith Services?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    24/7 Emergency Response
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Licensed and Insured Local Technicians
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Competitive Pricing for Local Residents
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Familiar with Local Security Requirements
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

export default NorthBergenArea;