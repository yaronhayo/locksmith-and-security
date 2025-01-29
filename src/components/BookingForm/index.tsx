import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import PersonalInfoFields from "./PersonalInfoFields";
import ServiceSelection from "./ServiceSelection";
import VehicleFields from "./VehicleFields";
import TimeframeSelection from "./TimeframeSelection";
import { validateForm } from "./validation";
import SubmitButton from "./SubmitButton";

const BookingForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [showVehicleInfo, setShowVehicleInfo] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [address, setAddress] = useState("");

  const handleServiceChange = (value: string) => {
    setSelectedService(value);
    setShowVehicleInfo(value.toLowerCase().includes("car"));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("address", address);
    
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
      const formDataObj = Object.fromEntries(formData.entries());
      
      const { error } = await supabase
        .from('service_requests')
        .insert([
          {
            name: formDataObj.name,
            phone: formDataObj.phone,
            address: formDataObj.address,
            service: formDataObj.service,
            timeframe: formDataObj.timeframe,
            vehicle_year: formDataObj.vehicleYear || null,
            vehicle_make: formDataObj.vehicleMake || null,
            vehicle_model: formDataObj.vehicleModel || null,
            other_service: formDataObj.otherService || null,
            notes: formDataObj.notes || null,
            status: 'pending',
            created_at: new Date().toISOString(),
          }
        ]);

      if (error) throw error;

      toast({
        title: "Request Submitted Successfully",
        description: "We'll contact you shortly to confirm your booking.",
      });

      navigate("/thank-you");
    } catch (error) {
      console.error("Submission error:", error);
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
      <PersonalInfoFields 
        errors={errors}
        isSubmitting={isSubmitting}
        address={address}
        setAddress={setAddress}
      />
      
      <ServiceSelection 
        error={errors.service}
        isSubmitting={isSubmitting}
        onServiceChange={handleServiceChange}
      />

      {showVehicleInfo && (
        <VehicleFields errors={errors} isSubmitting={isSubmitting} />
      )}

      <TimeframeSelection isSubmitting={isSubmitting} />

      <SubmitButton isSubmitting={isSubmitting} />

      <p className="text-sm text-gray-500 text-center">
        Fast Response • Professional Service • 24/7 Available
      </p>
    </form>
  );
};

export default BookingForm;