import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import AddressAutocomplete from "@/components/ui/address-autocomplete";

interface PersonalInfoFieldsProps {
  errors: Record<string, string>;
  isSubmitting: boolean;
  address: string;
  setAddress: (address: string) => void;
}

const PersonalInfoFields = ({ errors, isSubmitting, address, setAddress }: PersonalInfoFieldsProps) => {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="name">Your Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          aria-describedby="name-error"
          className={`h-10 text-base ${errors.name ? 'border-red-500' : ''}`}
          disabled={isSubmitting}
        />
        {errors.name && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{errors.name}</AlertDescription>
          </Alert>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          aria-describedby="phone-error"
          className={`h-10 text-base ${errors.phone ? 'border-red-500' : ''}`}
          disabled={isSubmitting}
        />
        {errors.phone && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{errors.phone}</AlertDescription>
          </Alert>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="address">Address</Label>
        <AddressAutocomplete
          id="address"
          value={address}
          onChange={setAddress}
          className={`h-10 text-base ${errors.address ? 'border-red-500' : ''}`}
          placeholder="Enter your address"
          disabled={isSubmitting}
          aria-describedby="address-error"
        />
        {errors.address && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{errors.address}</AlertDescription>
          </Alert>
        )}
      </div>
    </>
  );
};

export default PersonalInfoFields;