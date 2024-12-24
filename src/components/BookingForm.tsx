import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Lock, Loader2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const services = [
  "Car Lockout",
  "Car Key Programming",
  "House Lockout",
  "Lock Change",
  "Lock Repair",
  "Lock Installation",
  "Key Duplication",
  "Other"
];

const timeframes = [
  "ASAP",
  "Same Day",
  "Within Couple of Days",
  "Within Couple of Weeks",
  "Just Curious"
];

const BookingForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [showVehicleInfo, setShowVehicleInfo] = useState(false);

  const handleServiceChange = (value: string) => {
    setSelectedService(value);
    setShowVehicleInfo(value.toLowerCase().includes("car"));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Request Submitted Successfully",
      description: "We'll contact you shortly to confirm your booking.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
    setSelectedService("");
    setShowVehicleInfo(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <Input
        type="text"
        placeholder="Your Name"
        required
        className="h-10 text-base"
      />
      <Input
        type="tel"
        placeholder="Phone Number"
        required
        className="h-10 text-base"
      />
      <Input
        type="text"
        placeholder="Address"
        required
        className="h-10 text-base"
      />
      
      <Select onValueChange={handleServiceChange}>
        <SelectTrigger className="h-10 text-base">
          <SelectValue placeholder="Select Service Needed" />
        </SelectTrigger>
        <SelectContent>
          {services.map((service) => (
            <SelectItem key={service} value={service}>
              {service}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {showVehicleInfo && (
        <div className="space-y-3">
          <Input
            type="text"
            placeholder="Vehicle Year"
            required
            className="h-10 text-base"
          />
          <Input
            type="text"
            placeholder="Vehicle Make"
            required
            className="h-10 text-base"
          />
          <Input
            type="text"
            placeholder="Vehicle Model"
            required
            className="h-10 text-base"
          />
        </div>
      )}

      <Select>
        <SelectTrigger className="h-10 text-base">
          <SelectValue placeholder="When do you need service?" />
        </SelectTrigger>
        <SelectContent>
          {timeframes.map((timeframe) => (
            <SelectItem key={timeframe} value={timeframe}>
              {timeframe}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {selectedService === "Other" && (
        <Input
          type="text"
          placeholder="Please specify the service needed"
          required
          className="h-10 text-base"
        />
      )}

      <Textarea
        placeholder="Additional Notes..."
        className="h-20 text-base resize-none"
      />

      <Button
        type="submit"
        size="lg"
        className="w-full text-lg font-semibold h-10"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Lock className="w-5 h-5 mr-2" />
            Request Service
          </>
        )}
      </Button>

      <p className="text-sm text-gray-500 text-center">
        Fast Response • Professional Service • 24/7 Available
      </p>
    </form>
  );
};

export default BookingForm;