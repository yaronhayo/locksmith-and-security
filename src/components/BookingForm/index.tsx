
import { useNavigate, useLocation } from "react-router-dom";
import { validateForm } from "./validation";
import { useBookingFormState } from "./hooks/useBookingFormState";
import { submitBookingForm } from "./utils/submitForm";
import PersonalInfoFields from "./FormFields/PersonalInfoFields";
import ServiceSelection from "./FormFields/ServiceSelection";
import VehicleFields from "./FormFields/VehicleFields";
import TimeframeSelection from "./FormFields/TimeframeSelection";
import OtherServiceField from "./FormFields/OtherServiceField";
import AdditionalNotes from "./FormFields/AdditionalNotes";
import SubmitButton from "./SubmitButton";
import Recaptcha from "@/components/ui/recaptcha";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import AddressAutocomplete from "@/components/ui/address-autocomplete";
import GoogleMapsProvider from "@/components/providers/GoogleMapsProvider";

const BookingForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [address, setAddress] = useState("");
  const {
    isSubmitting,
    setIsSubmitting,
    selectedService,
    showVehicleInfo,
    errors,
    setErrors,
    handleServiceChange,
  } = useBookingFormState();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!recaptchaToken) {
      toast({
        title: "Verification Required",
        description: "Please complete the reCAPTCHA verification",
        variant: "destructive",
      });
      return;
    }

    const formData = new FormData(e.currentTarget);
    formData.set('address', address);
    
    const validationResult = validateForm(formData, showVehicleInfo);
    if (!validationResult.isValid) {
      setErrors(validationResult.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      await submitBookingForm(formData, showVehicleInfo, location.pathname, recaptchaToken, address);
      window.sessionStorage.setItem('fromFormSubmission', 'true');
      
      toast({
        title: "Booking Received!",
        description: "We'll contact you shortly to confirm your appointment.",
        variant: "default",
      });

      if (typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
          'event_category': 'form',
          'event_label': 'booking_submission',
          'value': 1
        });
      }

      navigate('/thank-you');
    } catch (error: any) {
      console.error('Booking form submission error:', error);
      toast({
        title: "Submission Failed",
        description: error.message || "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2.5" role="form" aria-label="Service booking form">
      <div className="space-y-2.5">
        <PersonalInfoFields errors={errors} isSubmitting={isSubmitting} />
        
        <div className="form-group">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
            Service Address
          </label>
          <GoogleMapsProvider>
            <AddressAutocomplete
              value={address}
              onChange={setAddress}
              placeholder="Enter your service address"
              disabled={isSubmitting}
              required
            />
          </GoogleMapsProvider>
          {errors.address && (
            <p className="text-xs text-red-500 mt-1">{errors.address}</p>
          )}
        </div>
        
        <ServiceSelection 
          error={errors.service}
          isSubmitting={isSubmitting}
          onServiceChange={handleServiceChange}
        />

        {showVehicleInfo && (
          <VehicleFields errors={errors} isSubmitting={isSubmitting} />
        )}

        <TimeframeSelection isSubmitting={isSubmitting} />

        {selectedService === "Other" && (
          <OtherServiceField isSubmitting={isSubmitting} />
        )}

        <AdditionalNotes isSubmitting={isSubmitting} />
      </div>

      <div className="pt-2">
        <Recaptcha onChange={setRecaptchaToken} />
      </div>

      <SubmitButton isSubmitting={isSubmitting} />
    </form>
  );
};

export default BookingForm;
