
import { Shield, Cpu, Car, Smartphone } from "lucide-react";

const ServiceFeatures = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 p-4 bg-gray-50 rounded-lg">
      <div className="flex items-center gap-2 text-primary">
        <Shield className="h-6 w-6" />
        <span className="font-medium">Licensed & Insured</span>
      </div>
      <div className="flex items-center gap-2 text-primary">
        <Car className="h-6 w-6" />
        <span className="font-medium">All Vehicle Types</span>
      </div>
      <div className="flex items-center gap-2 text-primary">
        <Cpu className="h-6 w-6" />
        <span className="font-medium">Advanced Tech</span>
      </div>
      <div className="flex items-center gap-2 text-primary">
        <Smartphone className="h-6 w-6" />
        <span className="font-medium">Mobile Service</span>
      </div>
    </div>
  );
};

export default ServiceFeatures;
