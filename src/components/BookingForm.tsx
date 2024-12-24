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
  "House Lockout",
  "Car Lockout",
  "Business Lockout",
  "Lock Change",
  "Lock Rekey",
  "Business Lock Change",
  "New Car Key",
  "Car Key Programming",
  "Other",
];

const BookingForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

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
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="space-y-3">
        <Input
          type="text"
          placeholder="Your Full Name"
          required
          className="h-9 text-sm"
        />
        <Input
          type="text"
          placeholder="Complete Service Address"
          required
          className="h-9 text-sm"
        />
        <Input
          type="tel"
          placeholder="Your Phone Number"
          required
          className="h-9 text-sm"
        />
        <Select name="service" required>
          <SelectTrigger className="h-9 text-sm">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, '-')}>
                {service}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Textarea
          placeholder="Additional comments..."
          className="min-h-[60px] text-sm resize-none"
        />
      </div>

      <Button
        type="submit"
        className="w-full text-base font-semibold h-9"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Lock className="w-4 h-4 mr-2" />
            Request Service
          </>
        )}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        Fast Response • Professional Service • 24/7 Available
      </p>
    </form>
  );
};

export default BookingForm;