
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const EmergencyCallout = () => {
  return (
    <div className="bg-primary/5 p-8 rounded-lg my-8">
      <h2 className="text-3xl font-bold mb-4">Need Car Key Programming?</h2>
      <p className="text-lg mb-6">
        Our expert technicians are ready to help with all your car key programming needs.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button size="lg" asChild>
          <a href="tel:2017482070" className="flex items-center">
            <Phone className="mr-2" />
            Call (201) 748-2070
          </a>
        </Button>
        <Button size="lg" variant="secondary" asChild>
          <a href="/book-online">Book Online</a>
        </Button>
      </div>
    </div>
  );
};

export default EmergencyCallout;
