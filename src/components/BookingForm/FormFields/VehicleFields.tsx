import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface VehicleFieldsProps {
  errors: Record<string, string>;
}

export const VehicleFields = ({ errors }: VehicleFieldsProps) => {
  return (
    <div className="space-y-2">
      <div className="space-y-1.5">
        <Label htmlFor="vehicleYear" className="text-sm">Vehicle Year</Label>
        <Input
          id="vehicleYear"
          name="vehicleYear"
          type="text"
          aria-describedby="vehicleYear-error"
          className={`h-8 text-sm ${errors.vehicleYear ? 'border-red-500' : ''}`}
        />
        {errors.vehicleYear && (
          <Alert variant="destructive" className="py-1.5">
            <AlertCircle className="h-3 w-3" />
            <AlertDescription className="text-xs">{errors.vehicleYear}</AlertDescription>
          </Alert>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="vehicleMake" className="text-sm">Vehicle Make</Label>
        <Input
          id="vehicleMake"
          name="vehicleMake"
          type="text"
          aria-describedby="vehicleMake-error"
          className={`h-8 text-sm ${errors.vehicleMake ? 'border-red-500' : ''}`}
        />
        {errors.vehicleMake && (
          <Alert variant="destructive" className="py-1.5">
            <AlertCircle className="h-3 w-3" />
            <AlertDescription className="text-xs">{errors.vehicleMake}</AlertDescription>
          </Alert>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="vehicleModel" className="text-sm">Vehicle Model</Label>
        <Input
          id="vehicleModel"
          name="vehicleModel"
          type="text"
          aria-describedby="vehicleModel-error"
          className={`h-8 text-sm ${errors.vehicleModel ? 'border-red-500' : ''}`}
        />
        {errors.vehicleModel && (
          <Alert variant="destructive" className="py-1.5">
            <AlertCircle className="h-3 w-3" />
            <AlertDescription className="text-xs">{errors.vehicleModel}</AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  );
};