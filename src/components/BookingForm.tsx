import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const BookingForm = () => {
  const { toast } = useToast();
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_PUBLIC_KEY'
      );

      toast({
        title: "Message Sent",
        description: "We'll get back to you as soon as possible.",
      });

      if (form.current) {
        form.current.reset();
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Full Name
          </label>
          <Input id="name" name="user_name" required placeholder="John Doe" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Phone Number
          </label>
          <Input id="phone" name="user_phone" type="tel" required placeholder="(555) 555-5555" />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email Address
        </label>
        <Input id="email" name="user_email" type="email" required placeholder="john@example.com" />
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-medium mb-2">
          Service Address
        </label>
        <Input id="address" name="address" required placeholder="123 Main St, North Bergen, NJ" />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          How Can We Help You?
        </label>
        <Textarea 
          id="message" 
          name="message" 
          rows={4} 
          required 
          placeholder="Please describe what service you need..."
          className="min-h-[120px]"
        />
      </div>

      <Button type="submit" className="w-full">
        Book Now
      </Button>
      <div className="mt-4 text-center text-sm text-gray-600">
        <p>NJ DCA License #13VH13153100</p>
      </div>
    </form>
  );
};

export default BookingForm;
