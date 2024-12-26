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
      className="py-20 bg-gray-50"
      aria-labelledby="service-areas-title"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 
            id="service-areas-title"
            className="text-3xl font-bold mb-4"
          >
            Service Areas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide professional locksmith services throughout North Bergen and surrounding areas in New Jersey.
          </p>
        </div>

        <div className="mb-12">
          <Map />
        </div>
        
        <div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          role="list"
          aria-label="Service Areas List"
        >
          {areas.map((area) => (
            <Link 
              key={area.slug}
              to={`/service-areas/${area.slug}`}
              className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-2 hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              role="listitem"
              aria-label={`View ${area.name} services`}
            >
              <MapPin className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
              <span className="font-medium">{area.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;