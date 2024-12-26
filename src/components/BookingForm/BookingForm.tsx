import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { FormLoadingOverlay } from "./LoadingStates";
import { validateForm, validateVehicleInfo } from "./BookingFormValidation";
import { sendLeadNotification } from "@/utils/emailjs";
import FormFields from "./FormFields";
import SubmitButton from "./SubmitButton";
import Recaptcha from "../ui/recaptcha";

const BookingForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [showVehicleInfo, setShowVehicleInfo] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const handleServiceChange = (value: string) => {
    setSelectedService(value);
    setShowVehicleInfo(value.toLowerCase().includes("car"));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!recaptchaToken) {
      toast({
        title: "Validation Error",
        description: "Please complete the reCAPTCHA verification",
        variant: "destructive",
      });
      return;
    }

    const formData = new FormData(e.currentTarget);
    
    const { isValid, errors: formErrors } = validateForm(formData);
    
    if (showVehicleInfo) {
      const { isValid: vehicleValid, errors: vehicleErrors } = validateVehicleInfo(formData);
      if (!vehicleValid) {
        setErrors({ ...formErrors, ...vehicleErrors });
        toast({
          title: "Validation Error",
          description: "Please check the vehicle information",
          variant: "destructive",
        });
        return;
      }
    }
    
    if (!isValid) {
      setErrors(formErrors);
      toast({
        title: "Validation Error",
        description: "Please check all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const formDataObj: Record<string, any> = {};
      formData.forEach((value, key) => {
        formDataObj[key] = value;
      });

      // Add recaptcha token to form data
      formDataObj.recaptchaToken = recaptchaToken;

      await sendLeadNotification(formDataObj);

      toast({
        title: "Request Submitted Successfully",
        description: "We'll contact you shortly to confirm your booking.",
      });

      (e.target as HTMLFormElement).reset();
      setSelectedService("");
      setShowVehicleInfo(false);
      setErrors({});
      setRecaptchaToken(null);
    } catch (error) {
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
    <form onSubmit={handleSubmit} className="space-y-3 relative">
      {isSubmitting && <FormLoadingOverlay />}
      
      <FormFields
        errors={errors}
        showVehicleInfo={showVehicleInfo}
        selectedService={selectedService}
        isSubmitting={isSubmitting}
        handleServiceChange={handleServiceChange}
      />

      <Recaptcha onChange={setRecaptchaToken} />
      
      <SubmitButton isSubmitting={isSubmitting} />

      <p className="text-sm text-gray-500 text-center">
        Fast Response • Professional Service • 24/7 Available
      </p>
    </form>
  );
};

export default BookingForm;