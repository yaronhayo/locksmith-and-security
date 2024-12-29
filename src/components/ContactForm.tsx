import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendContactFormEmail } from "@/utils/emailjs";
import Recaptcha from "./ui/recaptcha";
import AddressAutocomplete from "@/components/ui/address-autocomplete";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [address, setAddress] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!recaptchaToken) {
      toast({
        title: "Validation Error",
        description: "Please wait while we verify your request",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const formDataObj: Record<string, any> = {};
      formData.forEach((value, key) => {
        formDataObj[key] = value;
      });

      formDataObj.recaptchaToken = recaptchaToken;
      formDataObj.address = address;

      await sendContactFormEmail(formDataObj);

      toast({
        title: "Message Sent Successfully",
        description: "We'll get back to you as soon as possible.",
      });

      (e.target as HTMLFormElement).reset();
      setRecaptchaToken(null);
      setAddress("");
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
          <Input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
          <AddressAutocomplete
            name="address"
            value={address}
            onChange={setAddress}
            placeholder="Service Address"
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
          <Textarea
            name="message"
            placeholder="Your Message"
            required
            disabled={isSubmitting}
            className="min-h-[150px]"
          />
        </div>
      </div>

      <Recaptcha onChange={setRecaptchaToken} action="contact_form" />

      <Button 
        type="submit" 
        className="w-full" 
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
