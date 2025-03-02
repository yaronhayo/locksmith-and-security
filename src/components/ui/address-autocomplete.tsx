
import { InputProps } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  forwardRef,
  useState,
  useEffect,
  useRef,
  useCallback,
  ChangeEvent,
} from "react";

// Define a union type that accepts both a string and a ChangeEvent
type AddressChangeHandler = 
  | ((address: string) => void)
  | ((event: ChangeEvent<HTMLInputElement>) => void);

interface AddressAutocompleteProps {
  onChange: AddressChangeHandler;
}

export const AddressAutocomplete = forwardRef<HTMLInputElement, InputProps & AddressAutocompleteProps>(
  ({ value, onChange, disabled, className, ...props }, ref) => {
    const [isLoading, setIsLoading] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const autocomplete = useRef<google.maps.places.Autocomplete | null>(null);

    const initAutocomplete = useCallback(() => {
      if (window.google && inputRef.current) {
        autocomplete.current = new window.google.maps.places.Autocomplete(
          inputRef.current,
          {
            types: ["address"],
            componentRestrictions: { country: "us" },
            fields: ["address_components", "geometry", "formatted_address"],
          }
        );

        autocomplete.current.addListener("place_changed", () => {
          const place = autocomplete.current?.getPlace();
          if (!place?.formatted_address) {
            return;
          }
          
          // Handle both function signatures
          if (typeof onChange === 'function') {
            // Check if the onChange handler expects a string or an event
            if (onChange.length === 1) {
              // If it expects one parameter, we pass the address as string
              (onChange as (address: string) => void)(place.formatted_address);
            }
          }
        });
      }
    }, [onChange]);

    useEffect(() => {
      let googleMapScript: HTMLScriptElement | null = document.querySelector(
        'script[src*="maps.googleapis.com"]'
      );

      if (!googleMapScript) {
        // Get the API key from the MapConfig hook
        const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';
        
        googleMapScript = document.createElement("script");
        googleMapScript.src =
          `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
        googleMapScript.async = true;
        googleMapScript.defer = true;
        document.head.appendChild(googleMapScript);

        googleMapScript.addEventListener("load", () => {
          setIsLoading(false);
          initAutocomplete();
        });
      } else {
        setIsLoading(false);
        initAutocomplete();
      }

      return () => {
        if (googleMapScript) {
          googleMapScript.removeEventListener("load", initAutocomplete);
        }
      };
    }, [initAutocomplete]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      // Handle both function signatures
      if (typeof onChange === 'function') {
        if (onChange.length === 1) {
          // For components expecting just the string value
          (onChange as (address: string) => void)(e.target.value);
        } else {
          // For components expecting the full event
          (onChange as (event: ChangeEvent<HTMLInputElement>) => void)(e);
        }
      }
    };
    
    return (
      <input
        ref={ref || inputRef}
        type="text"
        value={value}
        onChange={handleInputChange}
        disabled={disabled || isLoading}
        autoComplete="off"
        className={cn("text-gray-900 placeholder:text-gray-500", className)}
        {...props}
      />
    );
  }
);

AddressAutocomplete.displayName = "AddressAutocomplete";
