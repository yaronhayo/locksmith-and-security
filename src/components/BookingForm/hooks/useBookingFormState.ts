
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useSearchParams } from "react-router-dom";
import { validateForm } from "../validation";
import { carKeyServices, allKeysLostServices, unusedKeyServices } from "../constants";

export const useBookingFormState = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [otherService, setOtherService] = useState("");
  const [timeframe, setTimeframe] = useState("");
  const [address, setAddress] = useState("");
  const [unitNumber, setUnitNumber] = useState("");
  const [gateCode, setGateCode] = useState("");
  const [notes, setNotes] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  // Vehicle-related state
  const [showVehicleInfo, setShowVehicleInfo] = useState(false);
  const [allKeysLost, setAllKeysLost] = useState("no");
  const [hasUnusedKey, setHasUnusedKey] = useState("no");
  const [showAllKeysLostField, setShowAllKeysLostField] = useState(false);
  const [showUnusedKeyField, setShowUnusedKeyField] = useState(false);
  
  // Handlers for service selection changes
  const handleServiceChange = (value: string) => {
    setService(value);
    
    // Determine if vehicle info should be shown based on service
    const shouldShowVehicleInfo = value === "Car Lockout" || 
      ["Car Key Replacement", "Car Key Programming", "Ignition Repair"].includes(value);
    setShowVehicleInfo(shouldShowVehicleInfo);
    
    // Determine if all keys lost field should be shown
    const shouldShowAllKeysLostField = ["Car Key Replacement", "Car Key Programming"].includes(value);
    setShowAllKeysLostField(shouldShowAllKeysLostField);
    
    // Determine if unused key field should be shown
    const shouldShowUnusedKeyField = ["Car Key Programming"].includes(value);
    setShowUnusedKeyField(shouldShowUnusedKeyField);
    
    // Clear vehicle info errors when changing service
    const { vehicleYear, vehicleMake, vehicleModel, ...remainingErrors } = errors;
    setErrors(remainingErrors);
  };

  // Handler for all keys lost
  const handleAllKeysLostChange = (value: string) => {
    setAllKeysLost(value);
  };

  // Handler for unused key
  const handleUnusedKeyChange = (value: string) => {
    setHasUnusedKey(value);
  };

  return {
    isLoading,
    setIsLoading,
    name,
    setName,
    phone,
    setPhone,
    service,
    setService,
    otherService,
    setOtherService,
    timeframe,
    setTimeframe,
    address,
    setAddress,
    unitNumber,
    setUnitNumber,
    gateCode,
    setGateCode,
    notes,
    setNotes,
    showVehicleInfo,
    setShowVehicleInfo,
    allKeysLost,
    setAllKeysLost,
    hasUnusedKey,
    setHasUnusedKey,
    showAllKeysLostField,
    setShowAllKeysLostField,
    showUnusedKeyField,
    setShowUnusedKeyField,
    recaptchaToken,
    setRecaptchaToken,
    errors,
    setErrors,
    validateForm,
    handleServiceChange,
    handleAllKeysLostChange,
    handleUnusedKeyChange
  };
};

export const useBookingForm = useBookingFormState;
