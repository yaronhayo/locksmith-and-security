
import { useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { validateForm } from "../validation";

export const useBookingForm = () => {
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
  const [showVehicleInfo, setShowVehicleInfo] = useState(false);
  const [allKeysLost, setAllKeysLost] = useState("no");
  const [hasUnusedKey, setHasUnusedKey] = useState("no");
  const [showAllKeysLostField, setShowAllKeysLostField] = useState(false);
  const [showUnusedKeyField, setShowUnusedKeyField] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

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
    recaptchaToken,
    setRecaptchaToken,
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
    errors,
    setErrors,
    validateForm
  };
};
