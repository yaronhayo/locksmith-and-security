
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
      <Label htmlFor="vehicle_year" className="block text-sm font-medium">Vehicle Information</Label>
      <div className="grid grid-cols-3 gap-3">
        <div>
          <Input
            id="vehicle_year"
            name="vehicle_year"
            type="text"
            placeholder="Year"
            aria-describedby={errors.vehicle_year ? "vehicle_year-error" : undefined}
            className={`h-10 text-base ${errors.vehicle_year ? 'border-red-500' : ''}`}
            disabled={isSubmitting}
            autoComplete="off"
            required
          />
          {errors.vehicle_year && (
            <Alert variant="destructive" className="mt-1 py-1">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription id="vehicle_year-error">{errors.vehicle_year}</AlertDescription>
            </Alert>
          )}
        </div>

        <div>
          <Label htmlFor="vehicle_make" className="sr-only">Vehicle Make</Label>
          <Input
            id="vehicle_make"
            name="vehicle_make"
            type="text"
            placeholder="Make"
            aria-describedby={errors.vehicle_make ? "vehicle_make-error" : undefined}
            className={`h-10 text-base ${errors.vehicle_make ? 'border-red-500' : ''}`}
            disabled={isSubmitting}
            autoComplete="off"
            required
          />
          {errors.vehicle_make && (
            <Alert variant="destructive" className="mt-1 py-1">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription id="vehicle_make-error">{errors.vehicle_make}</AlertDescription>
            </Alert>
          )}
        </div>

        <div>
          <Label htmlFor="vehicle_model" className="sr-only">Vehicle Model</Label>
          <Input
            id="vehicle_model"
            name="vehicle_model"
            type="text"
            placeholder="Model"
            aria-describedby={errors.vehicle_model ? "vehicle_model-error" : undefined}
            className={`h-10 text-base ${errors.vehicle_model ? 'border-red-500' : ''}`}
            disabled={isSubmitting}
            autoComplete="off"
            required
          />
          {errors.vehicle_model && (
            <Alert variant="destructive" className="mt-1 py-1">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription id="vehicle_model-error">{errors.vehicle_model}</AlertDescription>
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default VehicleFields;
