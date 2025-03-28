
import { useState, useCallback } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { validateForm } from "../validation";
import { BookingFormValues, SubmissionStatus, FormErrors } from "../types";
import { submitBookingForm } from "../utils/submitForm";

export const useBookingSubmission = (formValues: BookingFormValues) => {
  const navigate = useNavigate();
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [recaptchaError, setRecaptchaError] = useState<string | null>(null);

  const handleRecaptchaChange = useCallback((token: string | null) => {
    setRecaptchaToken(token);
    setRecaptchaError(token ? null : "Please complete the reCAPTCHA verification");
  }, []);

  const handleSubmit = useCallback(async (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }

    // First validate the form
    const { isValid, errors } = validateForm(formValues);
    setFormErrors(errors);

    if (!isValid) {
      toast.error("Please fill in all required fields correctly");
      return;
    }

    if (!recaptchaToken) {
      setRecaptchaError("Please complete the reCAPTCHA verification");
      toast.error("Please complete the reCAPTCHA verification");
      return;
    }

    setStatus("submitting");

    try {
      await submitBookingForm({
        ...formValues,
        recaptchaToken,
        source_url: window.location.pathname
      });

      setStatus("success");
      toast.success("Booking request submitted successfully");
      
      // Set session storage flag for thank-you page
      sessionStorage.setItem('fromFormSubmission', 'true');
      
      // Use window.location for a hard redirect instead of navigate
      window.location.href = '/thank-you';
      
    } catch (error: any) {
      console.error("Form submission error:", error);
      setStatus("error");
      toast.error(error.message || "Failed to submit form. Please try again later.");
    }
  }, [formValues, recaptchaToken, navigate]);

  return {
    status,
    formErrors,
    recaptchaToken,
    recaptchaError,
    handleRecaptchaChange,
    handleSubmit
  };
};
