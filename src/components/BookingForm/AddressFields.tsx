
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import AddressAutocomplete from "@/components/ui/address-autocomplete";

interface AddressFieldsProps {
  address: string;
  onChange: (address: string) => void;
  errors: Record<string, string>;
  isSubmitting: boolean;
}

const AddressFields = ({ address, onChange, errors, isSubmitting }: AddressFieldsProps) => {
  return (
    <>
      <div className="space-y-1.5">
        <Label htmlFor="address" className="text-sm">
          Service Address
        </Label>
        <AddressAutocomplete
          value={address}
          onChange={onChange}
          placeholder="Enter your service address"
          disabled={isSubmitting}
          required
        />
        {errors.address && (
          <p className="text-xs text-red-500 mt-1">{errors.address}</p>
        )}
      </div>

      {address && (
        <>
          <div className="space-y-1.5">
            <Label htmlFor="unit_number" className="text-sm">
              Unit Number (Optional)
            </Label>
            <Input
              id="unit_number"
              name="unit_number"
              type="text"
              className="h-9 text-sm"
              disabled={isSubmitting}
              placeholder="Apartment, suite, unit number"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="gate_code" className="text-sm">
              Gate Code (Optional)
            </Label>
            <Input
              id="gate_code"
              name="gate_code"
              type="text"
              className="h-9 text-sm"
              disabled={isSubmitting}
              placeholder="Enter gate code if applicable"
            />
          </div>
        </>
      )}
    </>
  );
};

export default AddressFields;
