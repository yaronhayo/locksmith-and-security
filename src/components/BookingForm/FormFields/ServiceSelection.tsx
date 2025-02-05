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
import { services } from "../constants";

interface ServiceSelectionProps {
  error?: string;
  isSubmitting: boolean;
  onServiceChange: (value: string) => void;
}

const ServiceSelection = ({ error, isSubmitting, onServiceChange }: ServiceSelectionProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="service">Service Needed</Label>
      <Select onValueChange={onServiceChange} name="service" disabled={isSubmitting}>
        <SelectTrigger 
          id="service"
          className={`h-10 text-base ${error ? 'border-red-500' : ''}`}
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
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default ServiceSelection;