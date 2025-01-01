import { useState } from 'react';
import { MapPin, Phone, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Map from '../Map';

const areas = [
  {
    name: "North Bergen",
    slug: "north-bergen",
    description: "Professional locksmith services in North Bergen, NJ",
    lat: 40.7828,
    lng: -74.0297
  },
  {
    name: "Jersey City",
    slug: "jersey-city",
    description: "Expert locksmith solutions in Jersey City, NJ",
    lat: 40.7282,
    lng: -74.0776
  },
  {
    name: "Union City",
    slug: "union-city",
    description: "Reliable locksmith services in Union City, NJ",
    lat: 40.7795,
    lng: -74.0246
  },
  {
    name: "West New York",
    slug: "west-new-york",
    description: "Trusted locksmith services in West New York, NJ",
    lat: 40.7857,
    lng: -74.0143
  },
  {
    name: "Secaucus",
    slug: "secaucus",
    description: "Professional locksmith services in Secaucus, NJ",
    lat: 40.7799,
    lng: -74.0566
  },
  {
    name: "Weehawken",
    slug: "weehawken",
    description: "Expert locksmith solutions in Weehawken, NJ",
    lat: 40.7684,
    lng: -74.0287
  },
  {
    name: "Hoboken",
    slug: "hoboken",
    description: "Reliable locksmith services in Hoboken, NJ",
    lat: 40.7453,
    lng: -74.0279
  },
  {
    name: "Guttenberg",
    slug: "guttenberg",
    description: "Trusted locksmith services in Guttenberg, NJ",
    lat: 40.7920,
    lng: -74.0037
  }
];

const features = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Emergency locksmith services available around the clock in all service areas"
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Professional locksmith services backed by full insurance coverage"
  },
  {
    icon: Phone,
    title: "Fast Response",
    description: "15-30 minute response time throughout our service areas"
  }
];

const ServiceAreasSection = () => {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);
  
  const markers = areas.map(area => ({
    lat: area.lat,
    lng: area.lng,
    title: area.name,
    slug: area.slug
  }));

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Service Areas
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional locksmith services available throughout North Bergen and surrounding areas in New Jersey. 
            Fast response times and reliable service, available 24/7 for your security needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold mb-6 text-primary">Areas We Serve</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {areas.map((area, index) => (
                <motion.div
                  key={area.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredArea(area.slug)}
                  onMouseLeave={() => setHoveredArea(null)}
                >
                  <Link
                    to={`/service-areas/${area.slug}`}
                    className={`group flex items-start space-x-3 p-4 rounded-lg transition-all ${
                      hoveredArea === area.slug ? 'bg-primary/10' : 'hover:bg-primary/5'
                    }`}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <div className="flex-shrink-0">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        hoveredArea === area.slug ? 'bg-primary/20' : 'bg-primary/10 group-hover:bg-primary/20'
                      }`}>
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className={`font-medium transition-colors ${
                        hoveredArea === area.slug ? 'text-primary' : 'text-gray-900 group-hover:text-primary'
                      }`}>
                        {area.name}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {area.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <Map markers={markers} hoveredMarker={hoveredArea} />
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-primary text-white rounded-xl p-8 text-center"
        >
          <h2 className="text-2xl font-semibold mb-4">
            Need Emergency Locksmith Service?
          </h2>
          <p className="text-white/90 mb-6">
            We provide 24/7 emergency locksmith services across all our service areas.
            Professional technicians ready to help you anytime.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              variant="outline" 
              className="border border-white text-white bg-transparent hover:bg-white/10" 
              asChild
            >
              <a href="tel:5513037874" className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Call (201) 748-2070
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-white hover:text-black"
              asChild
            >
              <Link to="/book-online">
                Book Online
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;