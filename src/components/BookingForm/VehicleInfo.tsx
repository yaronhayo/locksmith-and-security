import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface VehicleInfoProps {
  errors: Record<string, string>;
  isSubmitting: boolean;
}

const VehicleInfo = ({ errors, isSubmitting }: VehicleInfoProps) => {
  return (
    <div className="space-y-3">
      <div className="space-y-2">
        <Label htmlFor="vehicleYear">Vehicle Year</Label>
        <Input
          id="vehicleYear"
          name="vehicleYear"
          type="text"
          aria-describedby="vehicleYear-error"
          className={`h-10 text-base ${errors.vehicleYear ? 'border-red-500' : ''}`}
          disabled={isSubmitting}
        />
        {errors.vehicleYear && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{errors.vehicleYear}</AlertDescription>
          </Alert>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="vehicleMake">Vehicle Make</Label>
        <Input
          id="vehicleMake"
          name="vehicleMake"
          type="text"
          aria-describedby="vehicleMake-error"
          className={`h-10 text-base ${errors.vehicleMake ? 'border-red-500' : ''}`}
          disabled={isSubmitting}
        />
        {errors.vehicleMake && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{errors.vehicleMake}</AlertDescription>
          </Alert>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="vehicleModel">Vehicle Model</Label>
        <Input
          id="vehicleModel"
          name="vehicleModel"
          type="text"
          aria-describedby="vehicleModel-error"
          className={`h-10 text-base ${errors.vehicleModel ? 'border-red-500' : ''}`}
          disabled={isSubmitting}
        />
        {errors.vehicleModel && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{errors.vehicleModel}</AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  );
};

export default VehicleInfo;