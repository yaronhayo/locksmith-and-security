import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { LoadingOverlay } from "./LoadingStates";
import { validateForm, validateVehicleInfo } from "./BookingFormValidation";
import { sendLeadNotification, sendErrorReport } from "@/utils/emailjs";
import { FormFields } from "./FormFields";
import { SubmitButton } from "./SubmitButton";
import Recaptcha from "../ui/recaptcha";
import { verifyRecaptcha } from "@/utils/recaptcha";

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

    try {
      if (!recaptchaToken) {
        toast({
          title: "Validation Error",
          description: "Please complete the reCAPTCHA verification",
          variant: "destructive",
        });
        return;
      }

      // Verify reCAPTCHA token
      const isValid = await verifyRecaptcha(recaptchaToken, "BOOKING");
      if (!isValid) {
        toast({
          title: "Validation Error",
          description: "reCAPTCHA verification failed. Please try again.",
          variant: "destructive",
        });
        return;
      }

      const formData = new FormData(e.currentTarget);
      
      const { isValid: formValid, errors: formErrors } = validateForm(formData);
      
      if (showVehicleInfo) {
        const { isValid: vehicleValid, errors: vehicleErrors } = validateVehicleInfo(formData);
        if (!vehicleValid) {
          setErrors({ ...formErrors, ...vehicleErrors });
          throw new Error("Vehicle information validation failed");
        }
      }
      
      if (!formValid) {
        setErrors(formErrors);
        throw new Error("Form validation failed");
      }

      setIsSubmitting(true);

      const formDataObj: Record<string, any> = {};
      formData.forEach((value, key) => {
        formDataObj[key] = value;
      });

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
      const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
      
      await sendErrorReport(error, {
        formData: Object.fromEntries(new FormData(e.target as HTMLFormElement)),
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
      });

      toast({
        title: "Submission Failed",
        description: errorMessage,
        variant: "destructive",
      });

      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 relative">
      {isSubmitting && <LoadingOverlay />}
      
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