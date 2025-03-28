
import React, { useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { 
  getNameError, 
  getPhoneError, 
  getServiceError, 
  getTimeframeError, 
  getAddressError 
} from "@/utils/inputValidation";
import PersonalInfoFields from "./FormFields/PersonalInfoFields";
import ServiceSelection from "./FormFields/ServiceSelection";
import TimeframeSelection from "./FormFields/TimeframeSelection";
import AddressFields from "./FormFields/AddressFields";
import VehicleFields from "./FormFields/VehicleFields";
import AdditionalNotes from "./FormFields/AdditionalNotes";
import RecaptchaField from "./RecaptchaField";
import FormContainer from "./FormContainer";
import FormLoadingSkeleton from "./FormLoadingSkeleton";
import FormFooter from "./FormFooter";
import OtherServiceField from "./FormFields/OtherServiceField";
import AllKeysLostField from "./FormFields/AllKeysLostField";
import UnusedKeyField from "./FormFields/UnusedKeyField";
import { useBookingSubmission } from "./hooks/useBookingSubmission";
import SubmitButton from "./SubmitButton";

const BookingForm = () => {
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

  const validateForm = useCallback((formData: FormData, showVehicleInfo: boolean) => {
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const service = formData.get("service") as string;
    const timeframe = formData.get("timeframe") as string;
    const address = formData.get("address") as string;
  
    let newErrors: Record<string, string> = {};
  
    const nameError = getNameError(name);
    if (nameError) newErrors.name = nameError;
  
    const phoneError = getPhoneError(phone);
    if (phoneError) newErrors.phone = phoneError;
  
    const serviceError = getServiceError(service);
    if (serviceError) newErrors.service = serviceError;
  
    const timeframeError = getTimeframeError(timeframe);
    if (timeframeError) newErrors.timeframe = timeframeError;
  
    const addressError = getAddressError(address);
    if (addressError) newErrors.address = addressError;
  
    if (showVehicleInfo) {
      const vehicleYear = formData.get("vehicle_year") as string;
      const vehicleMake = formData.get("vehicle_make") as string;
      const vehicleModel = formData.get("vehicle_model") as string;
  
      if (!vehicleYear) {
        newErrors.vehicleYear = "Please enter the vehicle year";
      }
      if (!vehicleMake) {
        newErrors.vehicleMake = "Please enter the vehicle make";
      }
      if (!vehicleModel) {
        newErrors.vehicleModel = "Please enter the vehicle model";
      }
    }
  
    return {
      isValid: Object.keys(newErrors).length === 0,
      errors: newErrors,
    };
  }, []);

  // Handle form submission
  const {
    isSubmitting,
    handleSubmit
  } = useBookingSubmission({
    validateForm,
    setErrors,
    showVehicleInfo,
    recaptchaToken,
    address,
    allKeysLost,
    hasUnusedKey,
    showAllKeysLostField,
    showUnusedKeyField
  });

  return (
    <div className="relative">
      {isLoading ? (
        <FormLoadingSkeleton />
      ) : (
        <>
          <FormContainer
            errors={errors}
            setErrors={setErrors}
            showVehicleInfo={showVehicleInfo}
            recaptchaToken={recaptchaToken}
            address={address}
            allKeysLost={allKeysLost}
            hasUnusedKey={hasUnusedKey}
            showAllKeysLostField={showAllKeysLostField}
            showUnusedKeyField={showUnusedKeyField}
            onSubmit={handleSubmit}
          >
            <PersonalInfoFields
              name={name}
              setName={setName}
              phone={phone}
              setPhone={setPhone}
              errors={errors}
              isSubmitting={isSubmitting}
            />
            
            <ServiceSelection
              service={service}
              setService={setService}
              error={errors.service}
              isSubmitting={isSubmitting}
              setShowVehicleInfo={setShowVehicleInfo}
              setShowAllKeysLostField={setShowAllKeysLostField}
              setShowUnusedKeyField={setShowUnusedKeyField}
            />
            
            {service === "Other" && (
              <OtherServiceField
                value={otherService}
                onChange={setOtherService}
                error={errors.otherService}
                isSubmitting={isSubmitting}
              />
            )}
            
            {/* Show vehicle information immediately after service selection when applicable */}
            {showVehicleInfo && (
              <div className="space-y-3">
                <VehicleFields errors={errors} isSubmitting={isSubmitting} />
                
                {showAllKeysLostField && (
                  <AllKeysLostField
                    value={allKeysLost}
                    onChange={setAllKeysLost}
                    isSubmitting={isSubmitting}
                  />
                )}
                
                {showUnusedKeyField && (
                  <UnusedKeyField
                    value={hasUnusedKey}
                    onChange={setHasUnusedKey}
                    isSubmitting={isSubmitting}
                  />
                )}
              </div>
            )}
            
            <AddressFields
              address={address}
              setAddress={setAddress}
              unitNumber={unitNumber}
              setUnitNumber={setUnitNumber}
              gateCode={gateCode}
              setGateCode={setGateCode}
              errors={errors}
              isSubmitting={isSubmitting}
            />
            
            <TimeframeSelection
              timeframe={timeframe}
              setTimeframe={setTimeframe}
              error={errors.timeframe}
              isSubmitting={isSubmitting}
            />
            
            <AdditionalNotes
              value={notes}
              onChange={setNotes}
              isSubmitting={isSubmitting}
            />
            
            <RecaptchaField
              onChange={setRecaptchaToken}
              error={errors.recaptcha}
            />
          </FormContainer>

          <SubmitButton 
            isSubmitting={isSubmitting} 
            disabled={Object.keys(errors).length > 0}
          />
        </>
      )}
      
      <FormFooter />
    </div>
  );
};

export default BookingForm;
