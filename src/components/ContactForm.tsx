import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Recaptcha from "./ui/recaptcha";
import AddressAutocomplete from "@/components/ui/address-autocomplete";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [address, setAddress] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!recaptchaToken) {
      toast({
        title: "Validation Error",
        description: "Please complete the reCAPTCHA verification",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const formDataObj = {
        type: 'contact',
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        address: address,
        message: formData.get('message'),
        recaptchaToken
      };

      const { error: emailError } = await supabase.functions.invoke('send-form-email', {
        body: formDataObj
      });

      if (emailError) throw emailError;

      // Set flag for thank you page
      sessionStorage.setItem('fromFormSubmission', 'true');
      
      // Navigate to thank you page
      navigate('/thank-you');

    } catch (error: any) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
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

      <Recaptcha onChange={setRecaptchaToken} />

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
