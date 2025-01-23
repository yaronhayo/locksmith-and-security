import { useState } from "react";
import { BookingFormState, BookingFormActions } from "./types";

export const useBookingForm = (): [BookingFormState, BookingFormActions] => {
  const [selectedService, setSelectedService] = useState("");
  const [showVehicleInfo, setShowVehicleInfo] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  return [
    {
      selectedService,
      showVehicleInfo,
      isSubmitting,
      errors,
      recaptchaToken,
    },
    {
      setSelectedService,
      setShowVehicleInfo,
      setIsSubmitting,
      setErrors,
      setRecaptchaToken,
    },
  ];
};