
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
    console.log("Service area form submission started");
    
    if (!recaptchaToken) {
      setRecaptchaError("Please complete the reCAPTCHA verification");
      toast.error("Please complete the reCAPTCHA verification");
      return;
    }
    
    const isValid = validateForm();
    if (!isValid) {
      console.log("Form validation failed:", errors);
      toast.error("Please fix the errors in the form before submitting");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      console.log("Preparing service area form data");
      // Prepare submission data
      const submissionData = {
        type: "contact" as const,
        name: formState.name,
        email: formState.email,
        phone: formState.phone,
        address: window.location.pathname.split('/').pop() || '',
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
      
      console.log("Submitting service area form data:", JSON.stringify(submissionData, null, 2));
      
      // Submit to Supabase and send email
      await submitFormData(submissionData);
      
      console.log("Service area form submitted successfully");
      
      setIsSubmitted(true);
      
      // Set session storage flag for thank-you page
      sessionStorage.setItem('fromFormSubmission', 'true');
      
      toast.success("Your message has been sent! We'll be in touch soon.");
      
      // Force redirection to thank-you page with timeout to ensure state updates complete
      console.log("Redirecting to thank-you page");
      
      // Use a separate function for redirection to avoid issues with React state updates
      const redirectToThankYou = () => {
        console.log("Executing redirect to thank-you page");
        window.location.href = '/thank-you'; // Use direct window.location for more reliable navigation
      };
      
      setTimeout(redirectToThankYou, 1000); // Increase timeout to ensure changes are fully processed
      
    } catch (error: any) {
      console.error("Form submission error:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }, [formState, recaptchaToken, validateForm, setRecaptchaError, errors, navigate]);

  return {
    isSubmitting,
    isSubmitted,
    handleSubmit
  };
};
