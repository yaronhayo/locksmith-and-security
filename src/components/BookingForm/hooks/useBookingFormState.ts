
import { useState } from "react";
import { carKeyServices, allKeysLostServices, unusedKeyServices } from "../constants";

export const useBookingFormState = () => {
  const [selectedService, setSelectedService] = useState("");
  const [allKeysLost, setAllKeysLost] = useState("no");
  const [hasUnusedKey, setHasUnusedKey] = useState("no");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleServiceChange = (value: string) => {
    setSelectedService(value);
    
    // Clear vehicle info errors when changing service
    const { vehicleYear, vehicleMake, vehicleModel, ...remainingErrors } = errors;
    setErrors(remainingErrors);
  };

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
    selectedService,
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
