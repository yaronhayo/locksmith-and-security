
import React from "react";
import VehicleFields from "../FormFields/VehicleFields";
import AllKeysLostField from "../FormFields/AllKeysLostField";
import UnusedKeyField from "../FormFields/UnusedKeyField";
import FormSection from "./FormSection";

interface VehicleSectionProps {
  errors: Record<string, string>;
  isSubmitting: boolean;
  showAllKeysLostField: boolean;
  showUnusedKeyField: boolean;
  allKeysLost: string;
  setAllKeysLost: (value: string) => void;
  hasUnusedKey: string;
  setHasUnusedKey: (value: string) => void;
}

const VehicleSection: React.FC<VehicleSectionProps> = ({
  errors,
  isSubmitting,
  showAllKeysLostField,
  showUnusedKeyField,
  allKeysLost,
  setAllKeysLost,
  hasUnusedKey,
  setHasUnusedKey
}) => {
  return (
    <FormSection>
      <VehicleFields 
        errors={errors} 
        isSubmitting={isSubmitting} 
      />
      
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
    </FormSection>
  );
};

export default VehicleSection;
