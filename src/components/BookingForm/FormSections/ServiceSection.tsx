
import React from "react";
import ServiceSelection from "../FormFields/ServiceSelection";
import OtherServiceField from "../FormFields/OtherServiceField";
import FormSection from "./FormSection";

interface ServiceSectionProps {
  service: string;
  setService: (service: string) => void;
  otherService: string;
  setOtherService: (service: string) => void;
  errors: Record<string, string>;
  isSubmitting: boolean;
  setShowVehicleInfo: (show: boolean) => void;
  setShowAllKeysLostField: (show: boolean) => void;
  setShowUnusedKeyField: (show: boolean) => void;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  service,
  setService,
  otherService,
  setOtherService,
  errors,
  isSubmitting,
  setShowVehicleInfo,
  setShowAllKeysLostField,
  setShowUnusedKeyField
}) => {
  return (
    <FormSection>
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
    </FormSection>
  );
};

export default ServiceSection;
