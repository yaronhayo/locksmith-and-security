
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const ServiceAreaForm = () => {
  return (
    <form className="space-y-4">
      <div>
        <Label htmlFor="service-name" className="block text-sm font-medium mb-2">
          Your Name
        </Label>
        <Input
          id="service-name"
          name="name"
          type="text"
          required
          placeholder="John Doe"
        />
      </div>
      
      <div>
        <Label htmlFor="service-email" className="block text-sm font-medium mb-2">
          Email Address
        </Label>
        <Input
          id="service-email"
          name="email"
          type="email"
          required
          placeholder="john@example.com"
        />
      </div>
      
      <div>
        <Label htmlFor="service-phone" className="block text-sm font-medium mb-2">
          Phone Number
        </Label>
        <Input
          id="service-phone"
          name="phone"
          type="tel"
          required
          placeholder="(201) 555-5555"
        />
      </div>
      
      <Button type="submit" className="w-full">
        Request Service
      </Button>
    </form>
  );
};

export default ServiceAreaForm;
