import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import PersonalInfoFields from "./FormFields/PersonalInfoFields";
import ServiceSelection from "./FormFields/ServiceSelection";
import TimeframeSelection from "./FormFields/TimeframeSelection";
import AdditionalNotes from "./FormFields/AdditionalNotes";
import OtherServiceField from "./FormFields/OtherServiceField";
import VehicleFields from "./FormFields/VehicleFields";
import SubmitButton from "./SubmitButton";
import { validateForm } from "./validation";

const BookingForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [showVehicleInfo, setShowVehicleInfo] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleServiceChange = (value: string) => {
    setSelectedService(value);
    setShowVehicleInfo(value.toLowerCase().includes("car"));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const validationResult = validateForm(formData, showVehicleInfo);
    if (!validationResult.isValid) {
      setErrors(validationResult.errors);
      toast({
        title: "Validation Error",
        description: "Please check the form for errors",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Request Submitted Successfully",
        description: "We'll contact you shortly to confirm your booking.",
      });

      (e.target as HTMLFormElement).reset();
      setSelectedService("");
      setShowVehicleInfo(false);
      setErrors({});
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
    <form onSubmit={handleSubmit} className="space-y-3">
      <PersonalInfoFields errors={errors} isSubmitting={isSubmitting} />
      
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

      <SubmitButton isSubmitting={isSubmitting} />
    </form>
  );
};

export default BookingForm;