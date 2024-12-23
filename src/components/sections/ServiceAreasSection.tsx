import { MapPin } from 'lucide-react';

const areas = [
  "North Bergen",
  "Jersey City",
  "Union City",
  "West New York",
  "Secaucus",
  "Weehawken",
  "Hoboken",
  "Guttenberg"
];

const ServiceAreasSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Service Areas</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide professional locksmith services throughout North Bergen and surrounding areas in New Jersey.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-medium">{area}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;