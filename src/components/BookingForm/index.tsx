
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { BookingFormData, FormErrors } from "@/types/booking";
import PersonalInfoFields from "./FormFields/PersonalInfoFields";
import ServiceSelection from "./FormFields/ServiceSelection";
import VehicleFields from "./FormFields/VehicleFields";
import TimeframeSelection from "./FormFields/TimeframeSelection";
import OtherServiceField from "./FormFields/OtherServiceField";
import AdditionalNotes from "./FormFields/AdditionalNotes";
import SubmitButton from "./SubmitButton";
import { validateForm } from "./validation";
import { supabase } from "@/integrations/supabase/client";

const BookingForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [showVehicleInfo, setShowVehicleInfo] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

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

    try {
      setIsSubmitting(true);
      
      const formDataObj: any = {
        type: 'booking',
        name: formData.get('name'),
        phone: formData.get('phone'),
        address: formData.get('address'),
        service: formData.get('service'),
        timeframe: formData.get('timeframe'),
        notes: formData.get('notes'),
      };

      if (showVehicleInfo) {
        formDataObj.vehicleInfo = {
          year: formData.get('vehicleYear'),
          make: formData.get('vehicleMake'),
          model: formData.get('vehicleModel'),
        };
      }

      const { error: emailError } = await supabase.functions.invoke('send-form-email', {
        body: formDataObj
      });

      if (emailError) throw emailError;

      toast({
        title: "Request Submitted Successfully",
        description: "We'll contact you shortly to confirm your booking.",
      });

      (e.target as HTMLFormElement).reset();
      setSelectedService("");
      setShowVehicleInfo(false);
      setErrors({});
    } catch (error: any) {
      console.error('Form submission error:', error);
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
    <form onSubmit={handleSubmit} className="space-y-3" role="form" aria-label="Service booking form">
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
