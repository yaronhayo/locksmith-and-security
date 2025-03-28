
import { useState, useCallback, useEffect } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { submitFormData } from "@/utils/formSubmission";
import { FormState } from "./useFormState";
import { FormErrors } from "./useFormValidation";
import { startFormTracking } from "@/utils/sessionTracker";

export const useFormSubmission = (
  formState: FormState, 
  errors: FormErrors,
  validateForm: () => boolean,
  recaptchaToken: string | null,
  setRecaptchaError: (error: string | null) => void
) => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Start form tracking when the component loads
  useEffect(() => {
    startFormTracking();
  }, []);
  
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!recaptchaToken) {
      setRecaptchaError("Please complete the reCAPTCHA verification");
      return;
    }
    
    const isValid = validateForm();
    if (!isValid) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Prepare submission data
      const submissionData = {
        type: "contact" as const,
        name: formState.name,
        email: formState.email,
        phone: formState.phone,
        address: window.location.pathname.split('/').pop() || '',
        unit_number: null, // Add unit_number field
        gate_code: null, // Add gate_code field
        message: formState.message,
        service: formState.service,
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
      
      // Submit to Supabase and send email
      await submitFormData(submissionData);
      
      setIsSubmitted(true);
      
      // Set session storage flag for thank-you page
      sessionStorage.setItem('fromFormSubmission', 'true');
      
      // Redirect to thank-you page
      navigate('/thank-you');
      
    } catch (error: any) {
      console.error("Form submission error:", error);
      toast.error("Failed to send message", {
        description: error.message || "Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [formState, recaptchaToken, validateForm, setRecaptchaError, navigate]);

  return {
    isSubmitting,
    isSubmitted,
    handleSubmit
  };
};
