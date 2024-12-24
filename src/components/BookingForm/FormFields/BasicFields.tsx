import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface BasicFieldsProps {
  errors: Record<string, string>;
}

export const BasicFields = ({ errors }: BasicFieldsProps) => {
  return (
    <>
      <div className="space-y-1.5">
        <Label htmlFor="name" className="text-sm">Your Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          aria-describedby="name-error"
          className={`h-8 text-sm ${errors.name ? 'border-red-500' : ''}`}
        />
        {errors.name && (
          <Alert variant="destructive" className="py-1.5">
            <AlertCircle className="h-3 w-3" />
            <AlertDescription className="text-xs">{errors.name}</AlertDescription>
          </Alert>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="phone" className="text-sm">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          aria-describedby="phone-error"
          className={`h-8 text-sm ${errors.phone ? 'border-red-500' : ''}`}
        />
        {errors.phone && (
          <Alert variant="destructive" className="py-1.5">
            <AlertCircle className="h-3 w-3" />
            <AlertDescription className="text-xs">{errors.phone}</AlertDescription>
          </Alert>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="address" className="text-sm">Address</Label>
        <Input
          id="address"
          name="address"
          type="text"
          aria-describedby="address-error"
          className={`h-8 text-sm ${errors.address ? 'border-red-500' : ''}`}
        />
        {errors.address && (
          <Alert variant="destructive" className="py-1.5">
            <AlertCircle className="h-3 w-3" />
            <AlertDescription className="text-xs">{errors.address}</AlertDescription>
          </Alert>
        )}
      </div>
    </>
  );
};