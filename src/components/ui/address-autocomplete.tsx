
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
import { toast } from "sonner";

// Define a union type for the address change handler
export type AddressChangeHandler = (addressOrEvent: string | ChangeEvent<HTMLInputElement>) => void;

interface AddressAutocompleteProps {
  onChange: AddressChangeHandler;
}

export const AddressAutocomplete = forwardRef<HTMLInputElement, InputProps & AddressAutocompleteProps>(
  ({ value, onChange, disabled, className, ...props }, ref) => {
    const [isLoading, setIsLoading] = useState(false);
    const [initialized, setInitialized] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const mergedRef = (ref || inputRef) as React.RefObject<HTMLInputElement>;
    const autocomplete = useRef<google.maps.places.Autocomplete | null>(null);
    const initAttempts = useRef(0);

    const isGoogleMapsLoaded = useCallback(() => {
      return typeof window !== 'undefined' && 
             typeof window.google !== 'undefined' && 
             typeof window.google.maps !== 'undefined' &&
             typeof window.google.maps.places !== 'undefined' &&
             typeof window.google.maps.places.Autocomplete !== 'undefined';
    }, []);

    const placeChangedListener = useCallback(() => {
      if (!autocomplete.current) return;
      
      const place = autocomplete.current.getPlace();
      if (!place?.formatted_address) {
        console.log("No formatted address available");
        return;
      }
      
      console.log("Address selected:", place.formatted_address);
      // Pass the formatted address string to the onChange handler
      onChange(place.formatted_address);
    }, [onChange]);

    const initAutocomplete = useCallback(() => {
      if (!isGoogleMapsLoaded() || !mergedRef.current) {
        console.warn("Cannot initialize autocomplete - Google Maps Places API or input ref not available");
        return false;
      }

      try {
        if (autocomplete.current) {
          // Already initialized
          return true;
        }

        console.log("Initializing autocomplete with input:", mergedRef.current);
        
        // Create autocomplete instance
        autocomplete.current = new window.google.maps.places.Autocomplete(
          mergedRef.current,
          {
            types: ["address"],
            componentRestrictions: { country: "us" },
            fields: ["address_components", "geometry", "formatted_address"],
          }
        );

        // Add the place_changed listener
        google.maps.event.addListener(
          autocomplete.current, 
          "place_changed", 
          placeChangedListener
        );
        
        console.log("Autocomplete initialized successfully");
        return true;
      } catch (error) {
        console.error("Error initializing autocomplete:", error);
        return false;
      }
    }, [isGoogleMapsLoaded, mergedRef, placeChangedListener]);

    // Initial setup once Google Maps is loaded
    useEffect(() => {
      if (initialized) return;
      
      const checkAndInitialize = () => {
        if (isGoogleMapsLoaded() && mergedRef.current) {
          const success = initAutocomplete();
          if (success) {
            setIsLoading(false);
            setInitialized(true);
            console.log("Address autocomplete successfully initialized");
            return true;
          }
        }
        return false;
      };

      if (checkAndInitialize()) return;

      // Set loading state and start polling for Maps API
      setIsLoading(true);
      
      const interval = setInterval(() => {
        initAttempts.current += 1;
        
        // Try to initialize
        if (checkAndInitialize()) {
          clearInterval(interval);
          return;
        }
        
        // Give up after 20 attempts (10 seconds)
        if (initAttempts.current > 20) {
          console.error("Failed to initialize Google Maps Places autocomplete after multiple attempts");
          setIsLoading(false);
          clearInterval(interval);
          
          // Only show error in development
          if (import.meta.env.DEV) {
            toast.error("Address autocomplete initialization failed");
          }
        }
      }, 500);
      
      return () => {
        clearInterval(interval);
        // Clean up event listeners
        if (autocomplete.current) {
          google.maps.event.clearInstanceListeners(autocomplete.current);
        }
      };
    }, [isGoogleMapsLoaded, initAutocomplete, mergedRef, initialized]);

    // Re-initialize when the input element changes
    useEffect(() => {
      // If we're initialized but the input ref changes, we need to re-initialize
      if (initialized && mergedRef.current && !autocomplete.current) {
        console.log("Input ref changed, reinitializing autocomplete");
        const success = initAutocomplete();
        if (!success) {
          setInitialized(false); // Trigger the initialization effect again
        }
      }
    }, [mergedRef, initialized, initAutocomplete]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      // Just pass the event to the onChange handler
      onChange(e);
    };
    
    return (
      <input
        ref={mergedRef}
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
