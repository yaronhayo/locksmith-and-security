import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface VehicleFieldsProps {
  errors: Record<string, string>;
  defaultValues: Record<string, string>;
  onChange: (field: string, value: string) => void;
}

export const VehicleFields = ({ errors, defaultValues, onChange }: VehicleFieldsProps) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="vehicleYear">Vehicle Year</Label>
        <Input
          id="vehicleYear"
          name="vehicleYear"
          type="text"
          value={defaultValues.vehicleYear}
          onChange={e => onChange("vehicleYear", e.target.value)}
          aria-describedby="vehicleYear-error"
          className={`h-10 ${errors.vehicleYear ? 'border-red-500' : ''}`}
        />
        {errors.vehicleYear && (
          <Alert variant="destructive" className="py-2">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="text-xs">{errors.vehicleYear}</AlertDescription>
          </Alert>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="vehicleMake">Vehicle Make</Label>
        <Input
          id="vehicleMake"
          name="vehicleMake"
          type="text"
          value={defaultValues.vehicleMake}
          onChange={e => onChange("vehicleMake", e.target.value)}
          aria-describedby="vehicleMake-error"
          className={`h-10 ${errors.vehicleMake ? 'border-red-500' : ''}`}
        />
        {errors.vehicleMake && (
          <Alert variant="destructive" className="py-2">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="text-xs">{errors.vehicleMake}</AlertDescription>
          </Alert>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="vehicleModel">Vehicle Model</Label>
        <Input
          id="vehicleModel"
          name="vehicleModel"
          type="text"
          value={defaultValues.vehicleModel}
          onChange={e => onChange("vehicleModel", e.target.value)}
          aria-describedby="vehicleModel-error"
          className={`h-10 ${errors.vehicleModel ? 'border-red-500' : ''}`}
        />
        {errors.vehicleModel && (
          <Alert variant="destructive" className="py-2">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="text-xs">{errors.vehicleModel}</AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  );
};