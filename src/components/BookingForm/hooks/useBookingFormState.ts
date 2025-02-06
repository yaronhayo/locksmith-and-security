
import { useState } from "react";
import { BookingFormState } from "../types";

export const useBookingFormState = () => {
  const [state, setState] = useState<BookingFormState>({
    isSubmitting: false,
    selectedService: "",
    showVehicleInfo: false,
    errors: {},
  });

  const handleServiceChange = (value: string) => {
    setState(prev => ({
      ...prev,
      selectedService: value,
      showVehicleInfo: value.toLowerCase().includes("car")
    }));
  };

  const setIsSubmitting = (isSubmitting: boolean) => {
    setState(prev => ({ ...prev, isSubmitting }));
  };

  const setErrors = (errors: Record<string, string>) => {
    setState(prev => ({ ...prev, errors }));
  };

  return {
    ...state,
    setIsSubmitting,
    setErrors,
    handleServiceChange,
  };
};
