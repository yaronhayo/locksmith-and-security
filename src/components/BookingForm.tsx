import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Lock, Loader2 } from "lucide-react";

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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-3">
        <Input
          type="text"
          placeholder="Your Name"
          required
          className="h-12 text-base border-gray-300 focus:border-primary focus:ring-primary"
        />
        <Input
          type="tel"
          placeholder="Phone Number"
          required
          className="h-12 text-base border-gray-300 focus:border-primary focus:ring-primary"
        />
        <Input
          type="email"
          placeholder="Email Address"
          required
          className="h-12 text-base border-gray-300 focus:border-primary focus:ring-primary"
        />
        <Textarea
          placeholder="Describe your locksmith needs..."
          required
          className="min-h-[120px] text-base border-gray-300 focus:border-primary focus:ring-primary resize-none"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full text-lg font-semibold h-12"
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