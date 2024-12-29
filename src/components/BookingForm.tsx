import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { FormFields } from "./BookingForm/FormFields";
import { SubmitButton } from "./BookingForm/SubmitButton";
import { validateForm, validateVehicleInfo } from "./BookingForm/BookingFormValidation";

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
    
    const { isValid, errors: formErrors } = validateForm(formData);
    
    if (showVehicleInfo) {
      const { isValid: isVehicleValid, errors: vehicleErrors } = validateVehicleInfo(formData);
      if (!isVehicleValid) {
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
        title: "Submission Error",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <FormFields
        errors={errors}
        showVehicleInfo={showVehicleInfo}
        selectedService={selectedService}
        handleServiceChange={handleServiceChange}
      />
      
      <SubmitButton isSubmitting={isSubmitting} />

      <p className="text-sm text-gray-500 text-center">
        Fast Response • Professional Service • 24/7 Available
      </p>
    </form>
  );
};

export default BookingForm;