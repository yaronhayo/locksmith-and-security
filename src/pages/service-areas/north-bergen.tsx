import PageLayout from "@/components/layouts/PageLayout";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Shield, Phone, Car, Home, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "24/7 Locksmith Services in North Bergen, NJ",
  "description": "Professional locksmith services in North Bergen, NJ. Available 24/7 for residential, commercial, and automotive locksmith needs.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Locksmith & Security LLC",
    "telephone": "+15513037874",
    "areaServed": {
      "@type": "City",
      "name": "North Bergen",
      "containedIn": {
        "@type": "State",
        "name": "New Jersey"
      }
    }
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "40.7995",
      "longitude": "-74.0246"
    },
    "geoRadius": "5mi"
  }
};

const services = [
  {
    icon: Home,
    title: "Residential Locksmith",
    description: "House lockouts, lock changes, rekeying, and security upgrades for your home.",
    link: "/services/house-lockout"
  },
  {
    icon: Car,
    title: "Automotive Locksmith",
    description: "Car lockouts, key replacement, and programming for all vehicle makes and models.",
    link: "/services/car-lockout"
  },
  {
    icon: Building2,
    title: "Commercial Locksmith",
    description: "Business security solutions, master key systems, and access control installation.",
    link: "/services/business-lockout"
  }
];

const features = [
  {
    icon: Clock,
    title: "24/7 Emergency Service",
    description: "Available around the clock for all your locksmith needs in North Bergen."
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed and insured professional locksmith services."
  },
  {
    icon: Phone,
    title: "Fast Response",
    description: "15-30 minute response time throughout North Bergen."
  }
];

const NorthBergen = () => {
  return (
    <PageLayout
      title="North Bergen Locksmith Services | 24/7 Emergency Locksmith"
      description="Professional locksmith services in North Bergen, NJ. Available 24/7 for residential, commercial, and automotive locksmith needs. Fast response times and competitive rates."
      schema={schema}
      heroTitle="North Bergen Locksmith Services"
      heroDescription="Your trusted local locksmith serving North Bergen with 24/7 emergency services"
    >
      {/* Main Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="h-6 w-6 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold">Serving North Bergen, NJ</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                At Locksmith & Security LLC, we provide comprehensive locksmith services throughout North Bergen 
                and surrounding areas. Our team of experienced professionals is available 24/7 to handle all your 
                residential, commercial, and automotive locksmith needs with prompt and reliable service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <a href="tel:+15513037874">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                  <Link to="/book-online">
                    Book Online
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Services Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Our Services in North Bergen</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.link}
                    className="group block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <service.icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Why Choose Us</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white rounded-lg shadow-sm"
                  >
                    <feature.icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Service Areas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Coverage Area</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our North Bergen locksmith services extend throughout the entire city and nearby areas. 
                We provide fast response times and reliable service to all neighborhoods in North Bergen 
                and surrounding communities.
              </p>
              <div className="bg-primary/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Need Emergency Locksmith Service?</h3>
                <p className="text-gray-700 mb-4">
                  We're available 24/7 for emergency locksmith services in North Bergen. 
                  Call us now for immediate assistance.
                </p>
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <a href="tel:+15513037874">
                    <Phone className="mr-2 h-5 w-5" />
                    Call (551) 303-7874
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default NorthBergen;