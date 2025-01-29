import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PersonalInfoFields from "./PersonalInfoFields";
import ServiceSelection from "./ServiceSelection";
import VehicleFields from "./VehicleFields";
import TimeframeSelection from "./TimeframeSelection";
import { validateForm } from "./validation";
import SubmitButton from "./SubmitButton";
import { useServiceRequests } from "@/hooks/useServiceRequests";

const BookingForm = () => {
  const navigate = useNavigate();
  const { createServiceRequest } = useServiceRequests();
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
      return;
    }

    const formDataObj = Object.fromEntries(formData.entries());
    
    try {
      await createServiceRequest.mutateAsync({
        name: formDataObj.name as string,
        phone: formDataObj.phone as string,
        address: formDataObj.address as string,
        service: formDataObj.service as string,
        timeframe: formDataObj.timeframe as string,
        vehicle_year: formDataObj.vehicleYear as string,
        vehicle_make: formDataObj.vehicleMake as string,
        vehicle_model: formDataObj.vehicleModel as string,
        other_service: formDataObj.otherService as string,
        notes: formDataObj.notes as string,
      });

      navigate("/thank-you");
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <PersonalInfoFields 
        errors={errors}
        isSubmitting={createServiceRequest.isPending}
        address={address}
        setAddress={setAddress}
      />
      
      <ServiceSelection 
        error={errors.service}
        isSubmitting={createServiceRequest.isPending}
        onServiceChange={handleServiceChange}
      />

      {showVehicleInfo && (
        <VehicleFields errors={errors} isSubmitting={createServiceRequest.isPending} />
      )}

      <TimeframeSelection isSubmitting={createServiceRequest.isPending} />

      <SubmitButton isSubmitting={createServiceRequest.isPending} />

      <p className="text-sm text-gray-500 text-center">
        Fast Response • Professional Service • 24/7 Available
      </p>
    </form>
  );
};

export default BookingForm;