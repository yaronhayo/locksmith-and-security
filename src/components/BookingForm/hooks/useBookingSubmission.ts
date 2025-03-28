
import { useState, useCallback } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { validateForm } from "../validation";
import { BookingFormValues, SubmissionStatus, FormErrors } from "../types";
import { submitBookingForm } from "../utils/submitForm";

interface UseBookingSubmissionProps {
  validateForm: (formValues: BookingFormValues) => { isValid: boolean; errors: FormErrors };
  setErrors: (errors: FormErrors) => void;
  showVehicleInfo: boolean;
  recaptchaToken: string | null;
  address: string;
  allKeysLost: string;
  hasUnusedKey: string;
  showAllKeysLostField: boolean;
  showUnusedKeyField: boolean;
}

export const useBookingSubmission = (props: UseBookingSubmissionProps) => {
  const navigate = useNavigate();
  const [status, setStatus] = useState<SubmissionStatus>("idle");

  const handleSubmit = useCallback(async (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }

    // Collect form data from the form elements
    const form = e?.target as HTMLFormElement;
    if (!form) return;

    const formData = new FormData(form);
    const formValues: BookingFormValues = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      address: props.address,
      unit_number: formData.get('unit_number') as string || undefined,
      gate_code: formData.get('gate_code') as string || undefined,
      service: formData.get('service') as string,
      timeframe: formData.get('timeframe') as string || 'ASAP',
      notes: formData.get('notes') as string || undefined,
      other_service: formData.get('other_service') as string || undefined,
      vehicle_info: props.showVehicleInfo ? {
        year: formData.get('vehicle_year') as string || undefined,
        make: formData.get('vehicle_make') as string || undefined,
        model: formData.get('vehicle_model') as string || undefined,
        all_keys_lost: props.showAllKeysLostField ? props.allKeysLost === 'yes' : undefined,
        has_unused_key: props.showUnusedKeyField ? props.hasUnusedKey === 'yes' : undefined
      } : undefined
    };

    // First validate the form
    const { isValid, errors } = validateForm(formValues);
    props.setErrors(errors);

    if (!isValid) {
      toast.error("Please fill in all required fields correctly");
      return;
    }

    if (!props.recaptchaToken) {
      props.setErrors({ ...errors, recaptcha: "Please complete the reCAPTCHA verification" });
      toast.error("Please complete the reCAPTCHA verification");
      return;
    }

    setStatus("submitting");

    try {
      await submitBookingForm({
        ...formValues,
        recaptchaToken: props.recaptchaToken,
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
  }, [props, navigate]);

  return {
    status,
    handleSubmit
  };
};
