
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Recaptcha from "@/components/ui/recaptcha";
import PersonalInfoFields from "./form/PersonalInfoFields";
import EmailField from "./form/EmailField";
import AddressField from "./form/AddressField";
import MessageField from "./form/MessageField";
import { getEmailError, getNameError, getPhoneError } from "@/utils/inputValidation";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  const { toast } = useToast();
  const [address, setAddress] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Check form validity before submission
  const validateForm = () => {
    if (!form.current) return false;

    const formData = new FormData(form.current);
    const name = String(formData.get('user_name'));
    const email = String(formData.get('user_email'));
    const phone = String(formData.get('user_phone'));
    const message = String(formData.get('message'));

    const newErrors: Record<string, string> = {};
    
    const nameError = getNameError(name);
    if (nameError) newErrors.name = nameError;
    
    const emailError = getEmailError(email);
    if (emailError) newErrors.email = emailError;
    
    const phoneError = getPhoneError(phone);
    if (phoneError) newErrors.phone = phoneError;
    
    if (!address.trim()) {
      newErrors.address = "Please enter your address";
    }
    
    if (!message.trim()) {
      newErrors.message = "Please enter a message";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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

    if (!validateForm()) {
      toast({
        title: "Form Error",
        description: "Please fix the errors in the form before submitting",
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
        <PersonalInfoFields isSubmitting={isSubmitting} />
        <EmailField isSubmitting={isSubmitting} />
        <AddressField 
          value={address}
          onChange={setAddress}
          isSubmitting={isSubmitting}
          error={errors.address}
        />
        <MessageField isSubmitting={isSubmitting} error={errors.message} />
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
