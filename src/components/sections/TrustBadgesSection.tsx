import { Shield, Clock, Star } from "lucide-react";

const TrustBadgesSection = () => {
  return (
    <section className="py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8">
          <div className="flex items-center space-x-2">
            <Shield className="w-6 h-6 text-primary" />
            <span className="font-semibold">Licensed & Insured</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-6 h-6 text-primary" />
            <span className="font-semibold">24/7 Service</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="w-6 h-6 text-primary" />
            <span className="font-semibold">5-Star Rated</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadgesSection;