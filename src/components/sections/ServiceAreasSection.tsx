import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const areas = [
  {
    name: "North Bergen",
    slug: "north-bergen"
  },
  {
    name: "Jersey City",
    slug: "jersey-city"
  },
  {
    name: "Union City",
    slug: "union-city"
  },
  {
    name: "West New York",
    slug: "west-new-york"
  },
  {
    name: "Secaucus",
    slug: "secaucus"
  },
  {
    name: "Weehawken",
    slug: "weehawken"
  },
  {
    name: "Hoboken",
    slug: "hoboken"
  },
  {
    name: "Guttenberg",
    slug: "guttenberg"
  }
];

const ServiceAreasSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Service Areas</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide professional locksmith services throughout North Bergen and surrounding areas in New Jersey.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {areas.map((area) => (
            <Link 
              key={area.slug}
              to={`/service-areas/${area.slug}`}
              className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-2 hover:shadow-lg transition-all hover:bg-gray-50"
            >
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-medium">{area.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;