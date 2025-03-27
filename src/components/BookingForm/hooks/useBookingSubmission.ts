
import { useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";
import { submitFormData, redirectToThankYou } from "@/utils/formSubmission";
import { useFormTracking } from "./useFormTracking";
import { validateRecaptcha, validateAddress } from "../utils/validationHelpers";
import { prepareSubmissionData } from "../utils/submissionHelpers";

interface UseBookingSubmissionProps {
  validateForm: (formData: FormData, showVehicleInfo: boolean) => { 
    isValid: boolean; 
    errors: Record<string, string>; 
  };
  setErrors: (errors: Record<string, string>) => void;
  showVehicleInfo: boolean;
  recaptchaToken: string | null;
  address: string;
  allKeysLost: string;
  hasUnusedKey: string;
  showAllKeysLostField: boolean;
  showUnusedKeyField: boolean;
}

export const useBookingSubmission = ({
  validateForm,
  setErrors,
  showVehicleInfo,
  recaptchaToken,
  address,
  allKeysLost,
  hasUnusedKey,
  showAllKeysLostField,
  showUnusedKeyField
}: UseBookingSubmissionProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionAttempted, setSubmissionAttempted] = useState(false);

  // Start form tracking
  useFormTracking();
  
  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Booking form submission started");
    setSubmissionAttempted(true);

    // Validate reCAPTCHA
    const recaptchaResult = validateRecaptcha(recaptchaToken);
    if (!recaptchaResult.isValid) {
      toast.error("Verification Required", {
        description: recaptchaResult.errorMessage,
        duration: 6000,
      });
      setIsSubmitting(false);
      return;
    }

    // Validate address
    const addressResult = validateAddress(address);
    if (!addressResult.isValid) {
      toast.error("Address Required", {
        description: addressResult.errorMessage,
        duration: 6000,
      });
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    
    // Ensure address is included
    formData.set('address', address);
    
    // Include conditional fields if shown
    if (showAllKeysLostField) {
      formData.set('all_keys_lost', allKeysLost);
    }
    
    if (showUnusedKeyField) {
      formData.set('has_unused_key', hasUnusedKey);
    }
    
    // Validate the form data
    const validationResult = validateForm(formData, showVehicleInfo);
    if (!validationResult.isValid) {
      setErrors(validationResult.errors);
      console.log("Form validation failed:", validationResult.errors);
      toast.error("Form Validation Failed", {
        description: "Please check the form for errors",
        duration: 6000,
      });
      setIsSubmitting(false);
      return;
    }

    setErrors({});
    console.log("Form validation passed, submitting...");

    try {
      // Prepare the submission data
      const submissionData = prepareSubmissionData(
        formData, 
        address, 
        allKeysLost, 
        hasUnusedKey,
        showVehicleInfo,
        recaptchaToken,
        location.pathname
      );

      console.log("Submitting booking data:", JSON.stringify(submissionData, null, 2));
      
      // Submit the actual data to Supabase
      const result = await submitFormData(submissionData);
      
      console.log("Booking submitted successfully, result:", result);
      
      toast.success("Your request has been submitted successfully!", {
        duration: 6000
      });
      
      // Use the improved redirect helper
      redirectToThankYou(navigate);

      // Track conversion
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
          'event_category': 'form',
          'event_label': 'booking_submission',
          'value': 1
        });
      }

    } catch (error: any) {
      console.error('Booking form submission error:', error);
      toast.error("Submission Failed", {
        description: error.message || "Please try again or contact us directly.",
        duration: 6000,
      });
      setIsSubmitting(false);
    }
  }, [
    recaptchaToken, 
    address, 
    showAllKeysLostField, 
    allKeysLost, 
    showUnusedKeyField, 
    hasUnusedKey, 
    validateForm, 
    showVehicleInfo, 
    setErrors, 
    location.pathname, 
    navigate
  ]);

  return {
    isSubmitting,
    submissionAttempted,
    handleSubmit
  };
};
