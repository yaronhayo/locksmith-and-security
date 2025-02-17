
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import AddressAutocomplete from "@/components/ui/address-autocomplete";
import Recaptcha from "@/components/ui/recaptcha";
import GoogleMapsProvider from "@/components/providers/GoogleMapsProvider";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  const { toast } = useToast();
  const [address, setAddress] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!recaptchaToken) {
      toast({
        title: "Verification Required",
        description: "Please complete the reCAPTCHA verification",
        variant: "destructive",
      });
      return;
    }

    if (!form.current) return;
    setIsSubmitting(true);

    const formData = new FormData(form.current);
    const submissionData = {
      type: 'contact',
      name: String(formData.get('user_name')),
      email: String(formData.get('user_email')),
      phone: String(formData.get('user_phone')),
      address: address,
      message: String(formData.get('message')),
      status: 'pending',
      recaptcha_token: recaptchaToken,
      visitor_info: {
        userAgent: navigator.userAgent,
        language: navigator.language,
        platform: navigator.platform,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        windowSize: `${window.innerWidth}x${window.innerHeight}`,
        timestamp: new Date().toISOString(),
      },
      source_url: window.location.pathname
    };

    try {
      const { error: dbError } = await supabase
        .from('submissions')
        .insert(submissionData);

      if (dbError) throw dbError;

      const { error } = await supabase.functions.invoke('send-form-email', {
        body: submissionData
      });

      if (error) throw error;

      sessionStorage.setItem('fromFormSubmission', 'true');
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
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
      <form ref={form} onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Full Name
            </label>
            <Input 
              id="name" 
              name="user_name" 
              required 
              placeholder="John Doe"
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone Number
            </label>
            <Input 
              id="phone" 
              name="user_phone" 
              type="tel" 
              required 
              placeholder="(555) 555-5555"
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email Address
          </label>
          <Input 
            id="email" 
            name="user_email" 
            type="email" 
            required 
            placeholder="john@example.com"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium mb-2">
            Service Address
          </label>
          <GoogleMapsProvider>
            <AddressAutocomplete
              value={address}
              onChange={setAddress}
              placeholder="123 Main St, North Bergen, NJ"
              disabled={isSubmitting}
              required
            />
          </GoogleMapsProvider>
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
            disabled={isSubmitting}
          />
        </div>

        <Recaptcha onChange={setRecaptchaToken} />

        <Button 
          type="submit" 
          className="w-full bg-primary hover:bg-primary-hover"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
