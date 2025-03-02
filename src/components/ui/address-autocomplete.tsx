
import React, { useRef, useEffect, useState, forwardRef } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

// Define a union type that can handle both event handlers and direct string updates
export type AddressChangeHandler = 
  | ((address: string, placeId?: string) => void) 
  | React.ChangeEventHandler<HTMLInputElement>;

export interface AddressAutocompleteProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onAddressSelect?: (address: string, placeId?: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  required?: boolean;
  className?: string;
  placesOptions?: google.maps.places.AutocompleteOptions;
}

const AddressAutocomplete = forwardRef<HTMLInputElement, AddressAutocompleteProps>(
  (
    {
      onAddressSelect,
      placeholder = "Enter your address",
      disabled = false,
      error = false,
      required = false,
      className,
      placesOptions,
      ...props
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
    const [isInitialized, setIsInitialized] = useState(false);
    const [initializationAttempts, setInitializationAttempts] = useState(0);
    const maxAttempts = 5;

    useEffect(() => {
      if (!window.google || !window.google.maps || !window.google.maps.places) {
        if (initializationAttempts < maxAttempts) {
          console.log(`Waiting for Google Maps Places API... (attempt ${initializationAttempts + 1}/${maxAttempts})`);
          const timer = setTimeout(() => {
            setInitializationAttempts(prev => prev + 1);
          }, 1000);
          return () => clearTimeout(timer);
        } else {
          console.error("Google Maps Places API not available after multiple attempts");
          return;
        }
      }

      if (inputRef.current && !autocompleteRef.current) {
        try {
          const options: google.maps.places.AutocompleteOptions = {
            types: ["address"],
            componentRestrictions: { country: "us" },
            fields: ["address_components", "formatted_address", "place_id", "geometry"],
            ...placesOptions
          };

          const autocomplete = new google.maps.places.Autocomplete(
            inputRef.current,
            options
          );

          autocomplete.addListener("place_changed", () => {
            const place = autocomplete.getPlace();
            
            if (place && place.formatted_address) {
              console.log("Place selected:", place.formatted_address);
              if (onAddressSelect) {
                onAddressSelect(place.formatted_address, place.place_id);
              }
            } else {
              console.warn("Invalid place selected");
            }
          });

          autocompleteRef.current = autocomplete;
          setIsInitialized(true);
          console.log("Address autocomplete initialized successfully");
        } catch (error) {
          console.error("Error initializing address autocomplete:", error);
        }
      }

      return () => {
        if (autocompleteRef.current && window.google && window.google.maps) {
          google.maps.event.clearInstanceListeners(autocompleteRef.current);
          autocompleteRef.current = null;
          console.log("Address autocomplete cleaned up");
        }
      };
    }, [onAddressSelect, placesOptions, initializationAttempts]);

    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Enter" && document.activeElement === inputRef.current) {
          e.preventDefault();
        }
      };

      if (inputRef.current) {
        inputRef.current.addEventListener("keydown", handleKeyDown);
      }

      return () => {
        if (inputRef.current) {
          inputRef.current.removeEventListener("keydown", handleKeyDown);
        }
      };
    }, []);

    const setRefs = (element: HTMLInputElement) => {
      inputRef.current = element;
      if (typeof ref === 'function') {
        ref(element);
      } else if (ref) {
        ref.current = element;
      }
    };

    return (
      <div className="relative w-full">
        <Input
          ref={setRefs}
          className={cn(
            "w-full",
            error ? "border-red-500 focus-visible:ring-red-500" : "",
            className
          )}
          type="text"
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          aria-invalid={error ? "true" : "false"}
          {...props}
        />
        {!isInitialized && initializationAttempts >= maxAttempts && (
          <div className="text-xs text-red-500 mt-1">
            Address autocomplete unavailable
          </div>
        )}
      </div>
    );
  }
);

AddressAutocomplete.displayName = "AddressAutocomplete";

export { AddressAutocomplete };
