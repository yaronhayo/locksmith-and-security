import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const services = [
  "Car Lockout",
  "House Lockout",
  "Business Lock Change",
  "Car Key Replacement",
  "Emergency Lockout",
  "Lock Rekey",
  "Lock Installation",
  "Other"
];

const locations = [
  "North Bergen, NJ",
  "Jersey City, NJ",
  "Union City, NJ",
  "Weehawken, NJ",
  "Hoboken, NJ",
  "Secaucus, NJ",
  "West New York, NJ",
  "Guttenberg, NJ"
];

const ReviewForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Review Submitted Successfully",
      description: "Thank you for sharing your experience!",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" size="lg">
          Write a Review
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Share Your Experience</DialogTitle>
          <DialogDescription>
            Tell us about your experience with our locksmith services
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <Input
            placeholder="Your Name"
            required
            className="w-full"
          />
          <Select required>
            <SelectTrigger>
              <SelectValue placeholder="Select Service Used" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service} value={service}>
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select required>
            <SelectTrigger>
              <SelectValue placeholder="Select Location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location} value={location}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Textarea
            placeholder="Share your experience..."
            required
            className="min-h-[100px]"
          />
          <div className="flex justify-end">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Review"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ReviewForm;