import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { services } from "./constants";

interface ServiceSelectionProps {
  errors: Record<string, string>;
  isSubmitting: boolean;
  handleServiceChange: (value: string) => void;
}

const ServiceSelection = ({ errors, isSubmitting, handleServiceChange }: ServiceSelectionProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="service">Service Needed</Label>
      <Select 
        onValueChange={handleServiceChange} 
        name="service"
        disabled={isSubmitting}
      >
        <SelectTrigger 
          id="service"
          className={errors.service ? 'border-red-500' : ''}
        >
          <SelectValue placeholder="Select Service Needed" />
        </SelectTrigger>
        <SelectContent>
          {services.map((service) => (
            <SelectItem key={service} value={service}>
              {service}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {errors.service && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{errors.service}</AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default ServiceSelection;