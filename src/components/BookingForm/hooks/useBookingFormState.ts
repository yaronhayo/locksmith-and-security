
import { useState, useCallback } from "react";
import { carKeyServices, allKeysLostServices, unusedKeyServices } from "../constants";

export const useBookingFormState = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [allKeysLost, setAllKeysLost] = useState("no");
  const [hasUnusedKey, setHasUnusedKey] = useState("no");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleServiceChange = useCallback((value: string) => {
    setSelectedService(value);
    
    // Clear vehicle info errors when changing service
    const { vehicle_year, vehicle_make, vehicle_model, ...remainingErrors } = errors;
    setErrors(remainingErrors);
  }, [errors]);

  const handleAllKeysLostChange = (value: string) => {
    setAllKeysLost(value);
  };

  const handleUnusedKeyChange = (value: string) => {
    setHasUnusedKey(value);
  };

  const showVehicleInfo = selectedService === "Car Lockout" || carKeyServices.includes(selectedService);
  const showAllKeysLostField = allKeysLostServices.includes(selectedService);
  const showUnusedKeyField = unusedKeyServices.includes(selectedService);

  return {
    isSubmitting,
    setIsSubmitting,
    selectedService,
    setSelectedService,
    allKeysLost,
    hasUnusedKey,
    showVehicleInfo,
    showAllKeysLostField,
    showUnusedKeyField,
    errors,
    setErrors,
    handleServiceChange,
    handleAllKeysLostChange,
    handleUnusedKeyChange,
  };
};
