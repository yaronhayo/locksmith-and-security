
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

// Define a union type for the address change handler
export type AddressChangeHandler = (addressOrEvent: string | ChangeEvent<HTMLInputElement>) => void;

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
          
          // Pass the formatted address string to the onChange handler
          onChange(place.formatted_address);
        });
      }
    }, [onChange]);

    useEffect(() => {
      let googleMapScript: HTMLScriptElement | null = document.querySelector(
        'script[src*="maps.googleapis.com"]'
      );

      if (!googleMapScript) {
        // Get the API key from environment variables
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
      // Just pass the event to the onChange handler
      onChange(e);
    };
    
    return (
      <input
        ref={ref || inputRef}
        type="text"
        value={value}
        onChange={handleInputChange}
        disabled={disabled || isLoading}
        autoComplete="off"
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-gray-900 placeholder:text-gray-500",
          className
        )}
        {...props}
      />
    );
  }
);

AddressAutocomplete.displayName = "AddressAutocomplete";
