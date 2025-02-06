
import { useState } from "react";
import { FormErrors } from "@/types/booking";

export const useBookingFormState = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [showVehicleInfo, setShowVehicleInfo] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleServiceChange = (value: string) => {
    setSelectedService(value);
    setShowVehicleInfo(value.toLowerCase().includes("car"));
  };

  return {
    isSubmitting,
    setIsSubmitting,
    selectedService,
    showVehicleInfo,
    errors,
    setErrors,
    handleServiceChange,
  };
};
