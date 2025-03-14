
import { useState, useCallback, useEffect } from "react";
import { toast } from "sonner";
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionAttempted, setSubmissionAttempted] = useState(false);
  
  // Start form tracking when the component loads
  useEffect(() => {
    try {
      startFormTracking();
    } catch (error) {
      console.error("Failed to start form tracking:", error);
    }
  }, []);
  
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Service area form submission started");
    setSubmissionAttempted(true);
    
    if (!recaptchaToken) {
      const error = "Please complete the reCAPTCHA verification";
      setRecaptchaError(error);
      toast.error(error);
      return;
    }
    
    const isValid = validateForm();
    if (!isValid) {
      console.log("Form validation failed:", errors);
      // Show the first error as a toast
      const firstError = Object.values(errors).find(error => !!error);
      if (firstError) {
        toast.error(firstError);
      } else {
        toast.error("Please fix the errors in the form before submitting");
      }
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
      
      // Note: Redirection is now handled in submitFormData
      
    } catch (error: any) {
      console.error("Form submission error:", error);
      toast.error(error.message || "Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }, [formState, recaptchaToken, validateForm, setRecaptchaError, errors]);

  return {
    isSubmitting,
    isSubmitted,
    submissionAttempted,
    handleSubmit
  };
};
