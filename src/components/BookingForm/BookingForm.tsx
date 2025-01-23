import { useToast } from "@/hooks/use-toast";
import { FormLoadingOverlay } from "./LoadingStates";
import { validateForm, validateVehicleInfo } from "./BookingFormValidation";
import { sendLeadNotification, sendErrorReport } from "@/utils/emailjs";
import FormFields from "./FormFields";
import FormHeader from "./FormHeader";
import FormFooter from "./FormFooter";
import SubmitButton from "./SubmitButton";
import Recaptcha from "../ui/recaptcha";
import { useBookingForm } from "./useBookingForm";

const BookingForm = () => {
  const { toast } = useToast();
  const [state, actions] = useBookingForm();

  const handleServiceChange = (value: string) => {
    actions.setSelectedService(value);
    actions.setShowVehicleInfo(value.toLowerCase().includes("car"));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (!state.recaptchaToken) {
        throw new Error("reCAPTCHA verification required");
      }

      const formData = new FormData(e.currentTarget);
      
      const { isValid, errors: formErrors } = validateForm(formData);
      
      if (state.showVehicleInfo) {
        const { isValid: vehicleValid, errors: vehicleErrors } = validateVehicleInfo(formData);
        if (!vehicleValid) {
          actions.setErrors({ ...formErrors, ...vehicleErrors });
          throw new Error("Vehicle information validation failed");
        }
      }
      
      if (!isValid) {
        actions.setErrors(formErrors);
        throw new Error("Form validation failed");
      }

      actions.setIsSubmitting(true);

      const formDataObj: Record<string, any> = {};
      formData.forEach((value, key) => {
        formDataObj[key] = value;
      });

      formDataObj.recaptchaToken = state.recaptchaToken;

      await sendLeadNotification(formDataObj);

      toast({
        title: "Request Submitted Successfully",
        description: "We'll contact you shortly to confirm your booking.",
      });

      (e.target as HTMLFormElement).reset();
      actions.setSelectedService("");
      actions.setShowVehicleInfo(false);
      actions.setErrors({});
      actions.setRecaptchaToken(null);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
      
      await sendErrorReport(error, {
        formData: Object.fromEntries(new FormData(e.target as HTMLFormElement)),
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
      });

      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly. Our team has been notified.",
        variant: "destructive",
      });

      console.error("Form submission error:", error);
    } finally {
      actions.setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 relative">
      {state.isSubmitting && <FormLoadingOverlay />}
      
      <FormHeader isSubmitting={state.isSubmitting} />
      
      <FormFields
        errors={state.errors}
        showVehicleInfo={state.showVehicleInfo}
        selectedService={state.selectedService}
        isSubmitting={state.isSubmitting}
        handleServiceChange={handleServiceChange}
      />

      <Recaptcha onChange={actions.setRecaptchaToken} />
      
      <SubmitButton isSubmitting={state.isSubmitting} />

      <FormFooter />
    </form>
  );
};

export default BookingForm;