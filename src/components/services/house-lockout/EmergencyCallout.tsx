
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { usePhoneNumber } from "@/utils/phoneUtils";

const EmergencyCallout = () => {
  const { phoneNumber, phoneHref } = usePhoneNumber();
  
  return (
    <div className="bg-primary/5 p-8 rounded-lg my-8">
      <h2 className="text-3xl font-bold mb-4">Need Emergency House Lockout Service?</h2>
      <p className="text-lg mb-6">
        Don't wait outside. Our professional locksmiths are ready to help 24/7 with reliable service.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button size="lg" asChild>
          <a href={phoneHref} className="flex items-center">
            <Phone className="mr-2" />
            Call {phoneNumber}
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
