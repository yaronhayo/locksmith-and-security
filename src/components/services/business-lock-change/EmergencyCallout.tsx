import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const EmergencyCallout = () => {
  return (
    <div className="bg-primary/5 rounded-lg p-6 my-8">
      <div className="flex items-center gap-4 mb-4">
        <Phone className="h-8 w-8 text-primary animate-phone-ring" />
        <h3 className="text-2xl font-semibold">Emergency Lock Change Service</h3>
      </div>
      <p className="text-gray-600 mb-6">
        Need immediate lock change for your business? Our emergency commercial locksmith team is available 24/7 to secure your premises.
      </p>
      <Button asChild size="lg" className="w-full sm:w-auto">
        <a href="tel:5513037874" className="inline-flex items-center justify-center">
          Call Now: (551) 303-7874
        </a>
      </Button>
    </div>
  );
};

export default EmergencyCallout;