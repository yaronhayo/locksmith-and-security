
import React, { useState, useEffect, useRef, forwardRef } from "react";
import { Input } from "./input";
import { cn } from "@/lib/utils";

export interface AddressAutocompleteProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onPlaceSelected?: (place: google.maps.places.PlaceResult) => void;
  onAddressSelect?: (address: string) => void;
  error?: boolean;
}

const AddressAutocomplete = forwardRef<HTMLInputElement, AddressAutocompleteProps>(
  ({ className, onPlaceSelected, onAddressSelect, onChange, value, error, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
    const [internalValue, setInternalValue] = useState<string>("");
    
    // Initialize Google Maps Places Autocomplete
    useEffect(() => {
      if (window.google && window.google.maps && window.google.maps.places && inputRef.current) {
        try {
          autocompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current, {
            componentRestrictions: { country: "us" },
            fields: ["address_components", "formatted_address", "geometry", "name"],
            types: ["address"],
          });

          // Add listener for place selection
          const listener = autocompleteRef.current.addListener("place_changed", () => {
            if (autocompleteRef.current) {
              const place = autocompleteRef.current.getPlace();
              console.log("Place selected:", place);
              if (place && onPlaceSelected) {
                onPlaceSelected(place);
              }
              if (place && place.formatted_address) {
                setInternalValue(place.formatted_address);
                
                // Call the onAddressSelect callback if provided
                if (onAddressSelect) {
                  onAddressSelect(place.formatted_address);
                }
                
                // Create a synthetic event to propagate the change
                if (onChange && inputRef.current) {
                  const syntheticEvent = {
                    target: {
                      value: place.formatted_address,
                      name: inputRef.current.name,
                      id: inputRef.current.id
                    }
                  } as React.ChangeEvent<HTMLInputElement>;
                  onChange(syntheticEvent);
                }
              }
            }
          });

          return () => {
            if (window.google && window.google.maps && listener) {
              window.google.maps.event.removeListener(listener);
            }
          };
        } catch (error) {
          console.error("Error initializing Google Maps Places Autocomplete:", error);
        }
      }
    }, [onPlaceSelected, onChange, onAddressSelect]);

    // Sync external value with internal state
    useEffect(() => {
      if (value !== undefined) {
        const valueStr = value.toString();
        setInternalValue(valueStr);
        
        // Ensure the DOM input value is synchronized with the React state
        if (inputRef.current && inputRef.current.value !== valueStr) {
          inputRef.current.value = valueStr;
        }
      }
    }, [value]);

    // Handle internal onChange to update both internal state and propagate upward
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInternalValue(newValue);
      if (onChange) {
        onChange(e);
      }
    };

    return (
      <Input
        ref={(node) => {
          // Set both refs - the forwarded one and our internal one
          if (typeof ref === 'function') {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
          inputRef.current = node;
        }}
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
