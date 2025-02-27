
import { useState } from "react";
import { carKeyServices } from "../constants";

export const useBookingFormState = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [allKeysLost, setAllKeysLost] = useState("no");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleServiceChange = (value: string) => {
    setSelectedService(value);
    
    // Clear vehicle info errors when changing service
    const { vehicle_year, vehicle_make, vehicle_model, ...remainingErrors } = errors;
    setErrors(remainingErrors);
  };

  const handleAllKeysLostChange = (value: string) => {
    setAllKeysLost(value);
  };

  const showVehicleInfo = selectedService === "Car Lockout" || carKeyServices.includes(selectedService);
  const showAllKeysLostField = carKeyServices.includes(selectedService);

  return {
    isSubmitting,
    setIsSubmitting,
    selectedService,
    allKeysLost,
    showVehicleInfo,
    showAllKeysLostField,
    errors,
    setErrors,
    handleServiceChange,
    handleAllKeysLostChange,
  };
};
