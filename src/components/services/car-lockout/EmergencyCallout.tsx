
import { Button } from "@/components/ui/button";
import { Shield, Phone } from "lucide-react";

const EmergencyCallout = () => {
  return (
    <div className="bg-primary/5 rounded-lg p-8 my-12">
      <div className="flex items-start gap-4">
        <Shield className="h-12 w-12 text-primary flex-shrink-0" />
        <div>
          <h2 className="text-2xl font-bold mb-4">Professional Car Lockout Service</h2>
          <p className="text-lg text-gray-600 mb-6">
            Our professional automotive locksmiths are available 24/7 to help with any car lockout situation. 
            We provide licensed and insured service throughout the area. Call now to speak with our team.
          </p>
          <Button asChild className="gap-2">
            <a href="tel:+12017482070">
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmergencyCallout;
