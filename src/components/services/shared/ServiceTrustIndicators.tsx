
import { Clock, Star, Shield } from 'lucide-react';

interface ServiceTrustIndicatorsProps {
  responseTime: string;
  rating: string;
  certifications: string[];
}

const ServiceTrustIndicators = ({
  responseTime,
  rating,
  certifications
}: ServiceTrustIndicatorsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="flex items-center gap-2 bg-primary/5 p-4 rounded-lg">
        <Clock className="h-5 w-5 text-primary" />
        <span className="text-sm">Professional 24/7 Service</span>
      </div>
      <div className="flex items-center gap-2 bg-primary/5 p-4 rounded-lg">
        <Star className="h-5 w-5 text-primary" />
        <span className="text-sm">{rating} Star Rating</span>
      </div>
      <div className="flex items-center gap-2 bg-primary/5 p-4 rounded-lg">
        <Shield className="h-5 w-5 text-primary" />
        <span className="text-sm">{certifications.join(', ')}</span>
      </div>
    </div>
  );
};

export default ServiceTrustIndicators;
