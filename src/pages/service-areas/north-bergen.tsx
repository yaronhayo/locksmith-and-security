import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Building2, Car, Home, Key, Shield, Clock, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Locksmith Services",
    description: "Comprehensive home security solutions including smart lock installation, lock repair, and emergency lockout assistance for North Bergen residents."
  },
  {
    icon: Car,
    title: "Automotive Locksmith",
    description: "24/7 car lockout assistance, key replacement, and transponder key programming. Serving all major areas in North Bergen including Bergenline Avenue and Kennedy Boulevard."
  },
  {
    icon: Building2,
    title: "Commercial Security",
    description: "Advanced business security solutions including master key systems, access control installation, and high-security locks for North Bergen businesses."
  },
  {
    icon: Key,
    title: "Emergency Services",
    description: "Immediate response emergency locksmith services throughout North Bergen, with typical arrival times under 30 minutes."
  }
];

const features = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "NJ DCA License #13VH13153100 - Fully bonded and insured for your peace of mind"
  },
  {
    icon: Key,
    title: "Advanced Equipment",
    description: "Latest locksmith tools and technology for efficient, damage-free service"
  },
  {
    icon: Clock,
    title: "Fast Response",
    description: "Average response time of 20-30 minutes in North Bergen"
  },
  {
    icon: CheckCircle,
    title: "Satisfaction Guaranteed",
    description: "100% satisfaction guarantee on all our services"
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
        <meta
          name="keywords"
          content="locksmith North Bergen, emergency locksmith, car lockout, house lockout, commercial locks, key replacement, lock repair North Bergen, 24/7 locksmith"
        />
      </Helmet>
      <Header />
      <main className="min-h-screen">
        <section className="hero-gradient py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
              North Bergen's Trusted 24/7 Locksmith
            </h1>
            <p className="text-xl text-white/90 text-center max-w-2xl mx-auto">
              Professional locksmith services serving all neighborhoods in North Bergen with rapid response times and expert solutions
            </p>
          </div>
        </section>

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

        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us in North Bergen</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <feature.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Serving North Bergen, NJ</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 mb-6">
                Located in Hudson County, North Bergen presents unique security challenges with its diverse mix of residential and commercial properties. Our local locksmith team understands the specific requirements of North Bergen residents and businesses, providing tailored security solutions for both urban and suburban areas.
              </p>
              <p className="text-gray-600 mb-6">
                We provide rapid response times throughout North Bergen's neighborhoods, including Bergenline Avenue, Kennedy Boulevard, and surrounding areas. Our mobile locksmith units are strategically positioned to reach you quickly when you need us most.
              </p>
              <div className="bg-primary/5 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-semibold mb-4">Areas We Serve in North Bergen:</h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Bergenline Avenue Area</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Kennedy Boulevard</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Columbia Avenue</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Tonnelle Avenue</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Broadway District</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>West Side Area</span>
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