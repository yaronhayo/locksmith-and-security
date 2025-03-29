
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Recaptcha from "./ui/recaptcha";
import AddressAutocomplete from "@/components/ui/address-autocomplete";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate, useLocation } from "react-router-dom";

const ContactForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [address, setAddress] = useState("");

  const getVisitorInfo = () => {
    return {
      userAgent: navigator.userAgent,
      language: navigator.language,
      platform: navigator.platform,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      windowSize: `${window.innerWidth}x${window.innerHeight}`,
      timestamp: new Date().toISOString(),
    };
  };

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
      const submissionData = {
        type: 'contact',
        name: String(formData.get('name')),
        email: String(formData.get('email')),
        phone: String(formData.get('phone')),
        address: address,
        message: String(formData.get('message')),
        status: 'pending',
        visitor_info: getVisitorInfo(),
        source_url: location.pathname,
      };

      console.log("Submitting contact form:", submissionData);

      // First store in database
      const { error: dbError } = await supabase
        .from('submissions')
        .insert(submissionData);

      if (dbError) throw dbError;

      // Then send email notification with enhanced data
      const { data, error } = await supabase.functions.invoke('send-form-email', {
        body: {
          ...submissionData,
          recaptchaToken,
        }
      });

      if (error) throw error;

      console.log("Contact form submission response:", data);

      // Set flag for thank you page
      sessionStorage.setItem('fromFormSubmission', 'true');
      
      // Navigate to thank you page
      navigate('/thank-you');

    } catch (error: any) {
      console.error('Contact form submission error:', error);
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
    <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
      <div className="space-y-4">
        <div>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            disabled={isSubmitting}
            id="contact-name-main"
            autoComplete="name"
          />
        </div>
        <div>
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            disabled={isSubmitting}
            id="contact-email-main"
            autoComplete="email"
          />
        </div>
        <div>
          <Input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            required
            disabled={isSubmitting}
            id="contact-phone-main"
            autoComplete="tel"
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
            id="service-address"
            autoComplete="street-address"
          />
        </div>
        <div>
          <Textarea
            name="message"
            placeholder="Your Message"
            required
            disabled={isSubmitting}
            className="min-h-[150px]"
            id="contact-message"
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
