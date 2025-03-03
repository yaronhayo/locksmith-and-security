
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
      <Label htmlFor="vehicleYear">Vehicle Information</Label>
      <div className="grid grid-cols-3 gap-3">
        <div>
          <Input
            id="vehicleYear"
            name="vehicleYear"
            type="text"
            placeholder="Year"
            aria-describedby="vehicleYear-error"
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
            id="vehicleMake"
            name="vehicleMake"
            type="text"
            placeholder="Make"
            aria-describedby="vehicleMake-error"
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
            id="vehicleModel"
            name="vehicleModel"
            type="text"
            placeholder="Model"
            aria-describedby="vehicleModel-error"
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
