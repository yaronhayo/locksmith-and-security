
import React, { forwardRef } from "react";
import { Input } from "./input";
import { cn } from "@/lib/utils";
import { useAddressAutocomplete } from "@/hooks/useAddressAutocomplete";

export interface AddressAutocompleteProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onPlaceSelected?: (place: google.maps.places.PlaceResult) => void;
  onAddressSelect?: (address: string) => void;
  error?: boolean;
}

const AddressAutocomplete = forwardRef<HTMLInputElement, AddressAutocompleteProps>(
  ({ className, onPlaceSelected, onAddressSelect, onChange, value, error, ...props }, ref) => {
    const {
      inputRef,
      internalValue,
      handleInputChange
    } = useAddressAutocomplete({
      initialValue: value?.toString() || "",
      onPlaceSelected,
      onAddressSelect,
      onChange
    });
    
    // Ensure proper ref handling
    const handleRef = (node: HTMLInputElement | null) => {
      // Set both refs - the forwarded one and our internal one
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
      inputRef.current = node;
    };
    
    return (
      <Input
        ref={handleRef}
        value={internalValue}
        onChange={handleInputChange}
        className={cn(
          "address-autocomplete", 
          error ? "border-red-500" : "", 
          className
        )}
        aria-label="Address autocomplete"
        {...props}
      />
    );
  }
);

AddressAutocomplete.displayName = "AddressAutocomplete";

export { AddressAutocomplete };
