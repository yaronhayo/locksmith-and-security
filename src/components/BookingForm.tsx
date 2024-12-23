import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Lock } from "lucide-react";

const BookingForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Request Submitted",
      description: "We'll contact you shortly to confirm your booking.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Input
          type="text"
          placeholder="Your Name"
          required
          className="w-full"
        />
        <Input
          type="tel"
          placeholder="Phone Number"
          required
          className="w-full"
        />
        <Input
          type="email"
          placeholder="Email Address"
          required
          className="w-full"
        />
        <Textarea
          placeholder="Describe your locksmith needs..."
          required
          className="w-full min-h-[100px]"
        />
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        <Lock className="w-4 h-4 mr-2" />
        {isSubmitting ? "Submitting..." : "Request Service"}
      </Button>

      <p className="text-sm text-gray-500 text-center">
        We typically respond within 30 minutes
      </p>
    </form>
  );
};

export default BookingForm;