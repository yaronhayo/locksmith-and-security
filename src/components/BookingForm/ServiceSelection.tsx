import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface ServiceSelectionProps {
  error?: string;
  isSubmitting: boolean;
  onServiceChange: (value: string) => void;
}

const services = [
  "Car Lockout",
  "Car Key Programming",
  "House Lockout",
  "Lock Change",
  "Lock Repair",
  "Lock Installation",
  "Key Duplication",
  "Other"
];

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