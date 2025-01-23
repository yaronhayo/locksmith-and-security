import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { timeframes } from "./constants";
import BasicField from "./fields/BasicField";
import VehicleFields from "./fields/VehicleFields";
import ServiceField from "./fields/ServiceField";

interface FormFieldsProps {
  errors: Record<string, string>;
  showVehicleInfo: boolean;
  selectedService: string;
  isSubmitting: boolean;
  handleServiceChange: (value: string) => void;
}

const FormFields = ({
  errors,
  showVehicleInfo,
  selectedService,
  isSubmitting,
  handleServiceChange,
}: FormFieldsProps) => {
  return (
    <>
      <BasicField
        id="name"
        label="Your Name"
        error={errors.name}
        disabled={isSubmitting}
        required
      />

      <BasicField
        id="phone"
        label="Phone Number"
        type="tel"
        error={errors.phone}
        disabled={isSubmitting}
        required
      />

      <BasicField
        id="address"
        label="Address"
        error={errors.address}
        disabled={isSubmitting}
        required
      />

      <ServiceField
        error={errors.service}
        isSubmitting={isSubmitting}
        handleServiceChange={handleServiceChange}
      />

      {showVehicleInfo && (
        <VehicleFields errors={errors} isSubmitting={isSubmitting} />
      )}

      <div className="space-y-2">
        <Label htmlFor="timeframe">When do you need service?</Label>
        <Select name="timeframe" disabled={isSubmitting}>
          <SelectTrigger id="timeframe" className="h-10 text-base">
            <SelectValue placeholder="When do you need service?" />
          </SelectTrigger>
          <SelectContent>
            {timeframes.map((timeframe) => (
              <SelectItem key={timeframe} value={timeframe}>
                {timeframe}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {selectedService === "Other" && (
        <BasicField
          id="otherService"
          label="Please specify the service needed"
          disabled={isSubmitting}
          required
        />
      )}

      <div className="space-y-2">
        <Label htmlFor="notes">Additional Notes</Label>
        <Textarea
          id="notes"
          name="notes"
          placeholder="Additional Notes..."
          className="h-20 text-base resize-none"
          disabled={isSubmitting}
        />
      </div>
    </>
  );
};

export default FormFields;