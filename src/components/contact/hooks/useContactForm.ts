
import { useRef, useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { getEmailError, getNameError, getPhoneError } from "@/utils/inputValidation";
import { submitFormData } from "@/utils/formSubmission";
import { startFormTracking } from "@/utils/sessionTracker";

export const useContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  const [address, setAddress] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Start form tracking when the component loads
  useEffect(() => {
    startFormTracking();
  }, []);

  // Check form validity before submission
  const validateForm = useCallback(() => {
    if (!form.current) return false;

    const formData = new FormData(form.current);
    const name = String(formData.get('user_name') || '');
    const email = String(formData.get('user_email') || '');
    const phone = String(formData.get('user_phone') || '');
    const message = String(formData.get('message') || '');

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
  }, [address]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submission started");
    
    if (!recaptchaToken) {
      toast.error("Please complete the reCAPTCHA verification");
      return;
    }

    if (!validateForm()) {
      toast.error("Please fix the errors in the form before submitting");
      return;
    }

    if (!form.current) return;
    setIsSubmitting(true);

    try {
      const formData = new FormData(form.current);
      const submissionData = {
        type: "contact" as const,
        name: String(formData.get('user_name') || ''),
        email: String(formData.get('user_email') || ''),
        phone: String(formData.get('user_phone') || ''),
        address: address,
        message: String(formData.get('message') || ''),
        status: "pending" as const,
        recaptcha_token: recaptchaToken,
        visitor_info: {
          userAgent: navigator.userAgent,
          language: navigator.language,
          platform: navigator.platform,
          screenResolution: `${window.screen.width}x${window.screen.height}`,
          windowSize: `${window.innerWidth}x${window.innerHeight}`,
          timestamp: new Date().toISOString()
        },
        source_url: window.location.pathname
      };

      console.log("Submitting contact form data:", JSON.stringify(submissionData, null, 2));
      const result = await submitFormData(submissionData);
      console.log("Contact form submitted successfully, result:", result);

      // Set session storage for thank-you page redirect protection
      sessionStorage.setItem('fromFormSubmission', 'true');
      
      // Show success toast
      toast.success("Thank you for contacting us. We'll be in touch soon!");
      
      console.log("Redirecting to thank-you page");
      // Use direct window.location for more reliable navigation
      setTimeout(() => {
        window.location.href = '/thank-you';
      }, 500);

    } catch (error: any) {
      console.error('Contact form submission error:', error);
      toast.error("Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  }, [recaptchaToken, address, validateForm, navigate]);

  return {
    form,
    address,
    setAddress,
    recaptchaToken,
    setRecaptchaToken,
    isSubmitting,
    errors,
    handleSubmit
  };
};
