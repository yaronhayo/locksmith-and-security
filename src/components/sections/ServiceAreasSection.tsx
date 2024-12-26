import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Map from '../Map';

const areas = [
  {
    name: "North Bergen",
    slug: "north-bergen",
    description: "Professional locksmith services in North Bergen, NJ"
  },
  {
    name: "Jersey City",
    slug: "jersey-city",
    description: "Expert locksmith solutions in Jersey City, NJ"
  },
  {
    name: "Union City",
    slug: "union-city",
    description: "Reliable locksmith services in Union City, NJ"
  },
  {
    name: "West New York",
    slug: "west-new-york",
    description: "Trusted locksmith services in West New York, NJ"
  },
  {
    name: "Secaucus",
    slug: "secaucus",
    description: "Professional locksmith services in Secaucus, NJ"
  },
  {
    name: "Weehawken",
    slug: "weehawken",
    description: "Expert locksmith solutions in Weehawken, NJ"
  },
  {
    name: "Hoboken",
    slug: "hoboken",
    description: "Reliable locksmith services in Hoboken, NJ"
  },
  {
    name: "Guttenberg",
    slug: "guttenberg",
    description: "Trusted locksmith services in Guttenberg, NJ"
  }
];

const ServiceAreasSection = () => {
  return (
    <section 
      className="py-20 bg-gradient-to-b from-white to-gray-50"
      aria-labelledby="service-areas-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 
            id="service-areas-heading"
            className="text-4xl md:text-5xl font-bold mb-4 text-heading-dark"
          >
            Service Areas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional locksmith services available throughout North Bergen and surrounding areas in New Jersey. Fast response times and reliable service.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div 
            className="bg-white rounded-xl shadow-lg p-8"
            role="region"
            aria-label="List of service areas"
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary">Areas We Serve</h3>
            <div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              role="list"
            >
              {areas.map((area) => (
                <Link
                  key={area.slug}
                  to={`/service-areas/${area.slug}`}
                  className="group flex items-start space-x-3 p-4 rounded-lg hover:bg-[#FEC6A1]/20 transition-all focus:outline-none focus:ring-2 focus:ring-primary"
                  role="listitem"
                  aria-label={`View services in ${area.name}`}
                >
                  <div className="flex-shrink-0">
                    <div 
                      className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                      aria-hidden="true"
                    >
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-primary transition-colors">
                      {area.name}
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">
                      {area.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          <div 
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            role="complementary"
            aria-label="Interactive service areas map"
          >
            <Map />
          </div>
        </div>

        <div 
          className="bg-primary/5 rounded-xl p-8 text-center"
          role="region"
          aria-label="Emergency service call-to-action"
        >
          <h3 className="text-2xl font-semibold mb-4 text-primary">
            Need Emergency Locksmith Service?
          </h3>
          <p className="text-gray-600 mb-6">
            We provide 24/7 emergency locksmith services across all our service areas.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            aria-label="Contact us for emergency locksmith service"
          >
            Contact Us Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;