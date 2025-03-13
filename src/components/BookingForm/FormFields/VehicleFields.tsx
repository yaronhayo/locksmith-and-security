
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface VehicleFieldsProps {
  errors: Record<string, string>;
  isSubmitting: boolean;
}

const VehicleFields = ({ errors, isSubmitting }: VehicleFieldsProps) => {
  return (
    <div className="space-y-3">
      <Label htmlFor="vehicle_year">Vehicle Information</Label>
      <div className="grid grid-cols-3 gap-3">
        <div>
          <Input
            id="vehicle_year"
            name="vehicle_year"
            type="text"
            placeholder="Year"
            aria-describedby="vehicle_year-error"
            className={`h-10 text-base ${errors.vehicleYear ? 'border-red-500' : ''}`}
            disabled={isSubmitting}
            autoComplete="off"
            required
          />
          {errors.vehicleYear && (
            <Alert variant="destructive" className="mt-1 py-1">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{errors.vehicleYear}</AlertDescription>
            </Alert>
          )}
        </div>

        <div>
          <Input
            id="vehicle_make"
            name="vehicle_make"
            type="text"
            placeholder="Make"
            aria-describedby="vehicle_make-error"
            className={`h-10 text-base ${errors.vehicleMake ? 'border-red-500' : ''}`}
            disabled={isSubmitting}
            autoComplete="off"
            required
          />
          {errors.vehicleMake && (
            <Alert variant="destructive" className="mt-1 py-1">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{errors.vehicleMake}</AlertDescription>
            </Alert>
          )}
        </div>

        <div>
          <Input
            id="vehicle_model"
            name="vehicle_model"
            type="text"
            placeholder="Model"
            aria-describedby="vehicle_model-error"
            className={`h-10 text-base ${errors.vehicleModel ? 'border-red-500' : ''}`}
            disabled={isSubmitting}
            autoComplete="off"
            required
          />
          {errors.vehicleModel && (
            <Alert variant="destructive" className="mt-1 py-1">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{errors.vehicleModel}</AlertDescription>
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default VehicleFields;
