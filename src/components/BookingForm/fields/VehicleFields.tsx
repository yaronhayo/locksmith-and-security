import BasicField from "./BasicField";

interface VehicleFieldsProps {
  errors: Record<string, string>;
  isSubmitting: boolean;
}

const VehicleFields = ({ errors, isSubmitting }: VehicleFieldsProps) => {
  return (
    <div className="space-y-3">
      <BasicField
        id="vehicleYear"
        label="Vehicle Year"
        error={errors.vehicleYear}
        disabled={isSubmitting}
        required
      />
      <BasicField
        id="vehicleMake"
        label="Vehicle Make"
        error={errors.vehicleMake}
        disabled={isSubmitting}
        required
      />
      <BasicField
        id="vehicleModel"
        label="Vehicle Model"
        error={errors.vehicleModel}
        disabled={isSubmitting}
        required
      />
    </div>
  );
};

export default VehicleFields;