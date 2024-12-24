import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface BasicFieldsProps {
  errors: Record<string, string>;
  defaultValues: Record<string, string>;
  onChange: (field: string, value: string) => void;
}

export const BasicFields = ({ errors, defaultValues, onChange }: BasicFieldsProps) => {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="name">Your Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          value={defaultValues.name}
          onChange={e => onChange("name", e.target.value)}
          aria-describedby="name-error"
          className={`h-10 ${errors.name ? 'border-red-500' : ''}`}
        />
        {errors.name && (
          <Alert variant="destructive" className="py-2">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="text-xs">{errors.name}</AlertDescription>
          </Alert>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={defaultValues.phone}
          onChange={e => onChange("phone", e.target.value)}
          aria-describedby="phone-error"
          className={`h-10 ${errors.phone ? 'border-red-500' : ''}`}
        />
        {errors.phone && (
          <Alert variant="destructive" className="py-2">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="text-xs">{errors.phone}</AlertDescription>
          </Alert>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="address">Service Address</Label>
        <Input
          id="address"
          name="address"
          type="text"
          value={defaultValues.address}
          onChange={e => onChange("address", e.target.value)}
          aria-describedby="address-error"
          className={`h-10 ${errors.address ? 'border-red-500' : ''}`}
        />
        {errors.address && (
          <Alert variant="destructive" className="py-2">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="text-xs">{errors.address}</AlertDescription>
          </Alert>
        )}
      </div>
    </>
  );
};