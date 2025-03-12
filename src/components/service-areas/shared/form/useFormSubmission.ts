
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { FormState } from "./types";
import { submitFormData } from "@/utils/formSubmission";

interface UseFormSubmissionProps {
  formState: FormState;
  recaptchaToken: string | null;
  setErrors: React.Dispatch<React.SetStateAction<{
    name: boolean;
    email: boolean;
    phone: boolean;
  }>>;
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  validateAllFields: () => {
    name: string | null;
    email: string | null;
    phone: string | null;
  };
}

export const useFormSubmission = ({
  formState,
  recaptchaToken,
  setErrors: setIsDirty,
  setIsSubmitting,
  setIsSubmitted,
  validateAllFields
}: UseFormSubmissionProps) => {
  const navigate = useNavigate();

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as dirty to show validation errors
    setIsDirty({
      name: true,
      email: true,
      phone: true
    });
    
    // Update all errors
    const newErrors = validateAllFields();
    
    if (!recaptchaToken) {
      return;
    }
    
    if (newErrors.name || newErrors.email || newErrors.phone || formState.service === '') {
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
  }, [formState, recaptchaToken, navigate, setIsDirty, setIsSubmitting, setIsSubmitted, validateAllFields]);

  return {
    handleSubmit
  };
};
