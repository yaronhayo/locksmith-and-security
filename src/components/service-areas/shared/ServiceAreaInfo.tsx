
import { Clock, Shield, MapPin } from "lucide-react";

interface ServiceAreaInfoProps {
  locationName: string;
}

const ServiceAreaInfo = ({ locationName }: ServiceAreaInfoProps) => {
  return (
    <section className="bg-white rounded-xl shadow-sm p-8 md:p-12">
      <h2 className="text-3xl font-bold mb-6 text-primary">About Our Services in {locationName}</h2>
      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          Trust your local locksmith in {locationName}, providing professional services 
          for residential, commercial, and automotive security needs. We're available 
          24/7 for emergencies and pride ourselves on fast response times.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-primary">
              <MapPin className="h-5 w-5" />
              Service Coverage
            </h3>
            <p className="text-gray-600">
              We provide comprehensive locksmith services throughout {locationName} and 
              surrounding areas, ensuring quick response times and professional service.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-primary">
              <Clock className="h-5 w-5" />
              Response Times
            </h3>
            <p className="text-gray-600">
              Our average response time in {locationName} is 20-30 minutes, 
              ensuring you get help when you need it most.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          <div className="flex flex-col items-center p-6 bg-primary/5 rounded-lg text-center">
            <Clock className="h-8 w-8 text-primary mb-3" />
            <h4 className="font-semibold mb-2">24/7 Availability</h4>
            <p className="text-sm text-gray-600">Emergency service available around the clock</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-primary/5 rounded-lg text-center">
            <Shield className="h-8 w-8 text-primary mb-3" />
            <h4 className="font-semibold mb-2">Licensed & Insured</h4>
            <p className="text-sm text-gray-600">Professional, certified technicians</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-primary/5 rounded-lg text-center">
            <MapPin className="h-8 w-8 text-primary mb-3" />
            <h4 className="font-semibold mb-2">Local Service</h4>
            <p className="text-sm text-gray-600">Serving all of {locationName}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaInfo;
