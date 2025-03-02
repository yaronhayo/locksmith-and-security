
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
      if (window.google && window.google.maps && window.google.maps.places && inputRef.current) {
        console.log("Initializing autocomplete with input:", inputRef.current);
        try {
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
              console.log("No formatted address available");
              return;
            }
            
            console.log("Address selected:", place.formatted_address);
            // Pass the formatted address string to the onChange handler
            onChange(place.formatted_address);
          });
          
          console.log("Autocomplete initialized successfully");
        } catch (error) {
          console.error("Error initializing autocomplete:", error);
        }
      } else {
        console.warn("Google Maps or Places not available for autocomplete initialization");
      }
    }, [onChange]);

    useEffect(() => {
      if (isGoogleMapsLoaded()) {
        console.log("Google Maps already loaded, initializing autocomplete");
        setIsLoading(false);
        initAutocomplete();
        return;
      }
      
      setIsLoading(true);
      const checkGoogleMapsInterval = setInterval(() => {
        if (isGoogleMapsLoaded()) {
          console.log("Google Maps became available, initializing autocomplete");
          clearInterval(checkGoogleMapsInterval);
          setIsLoading(false);
          initAutocomplete();
        }
      }, 500);
      
      return () => {
        clearInterval(checkGoogleMapsInterval);
      };
    }, [initAutocomplete]);

    const isGoogleMapsLoaded = () => {
      return typeof window !== 'undefined' && 
             typeof window.google !== 'undefined' && 
             typeof window.google.maps !== 'undefined' &&
             typeof window.google.maps.places !== 'undefined';
    };

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
