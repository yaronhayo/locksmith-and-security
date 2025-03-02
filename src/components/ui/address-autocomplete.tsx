
import React, { useState, useEffect, useRef, forwardRef } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

// Interface for the Google Maps Autocomplete component
interface AddressAutocompleteProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onAddressSelect?: (address: string) => void;
  error?: boolean;
}

// Default options for the Places Autocomplete
const defaultPlacesOptions = {
  componentRestrictions: { country: "us" },
  fields: ["formatted_address", "geometry", "name"],
};

/**
 * AddressAutocomplete component that enhances an input with Google Places Autocomplete
 */
export const AddressAutocomplete = forwardRef<HTMLInputElement, AddressAutocompleteProps>(
  ({ className, onAddressSelect, error, ...props }, ref) => {
    const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);
    const [initializationAttempts, setInitializationAttempts] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const combinedRef = useCombinedRefs(ref, inputRef);
    const placesOptions = { ...defaultPlacesOptions };

    // Initialize Google Maps Places Autocomplete
    useEffect(() => {
      // Make sure Google Maps API is loaded
      if (
        typeof window === "undefined" ||
        !window.google ||
        !window.google.maps ||
        !window.google.maps.places
      ) {
        // If Google Maps API isn't loaded yet, try again in 500ms
        if (initializationAttempts < 10) {
          const timer = setTimeout(() => {
            setInitializationAttempts(prev => prev + 1);
          }, 500);
          return () => clearTimeout(timer);
        }
        
        console.error("Google Maps API not loaded after multiple attempts");
        return;
      }

      // If the autocomplete already exists, skip initialization
      if (autocomplete) {
        return;
      }

      try {
        if (inputRef.current) {
          // Create the autocomplete instance
          const newAutocomplete = new window.google.maps.places.Autocomplete(
            inputRef.current,
            placesOptions
          );
          
          // Store the autocomplete instance
          setAutocomplete(newAutocomplete);
          
          // Add place_changed listener
          newAutocomplete.addListener("place_changed", () => {
            const place = newAutocomplete.getPlace();
            
            if (place && place.formatted_address) {
              console.log("Place selected:", place.formatted_address);
              
              // Directly update the input value to show the full address
              if (inputRef.current) {
                // Use the native setter to ensure the value is properly registered
                const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
                  window.HTMLInputElement.prototype,
                  "value"
                )?.set;
                
                if (nativeInputValueSetter) {
                  nativeInputValueSetter.call(inputRef.current, place.formatted_address);
                  
                  // Create and dispatch both input and change events to ensure all listeners are notified
                  const inputEvent = new Event('input', { bubbles: true });
                  inputRef.current.dispatchEvent(inputEvent);
                  
                  const changeEvent = new Event('change', { bubbles: true });
                  inputRef.current.dispatchEvent(changeEvent);
                } else {
                  // Fallback if native setter isn't available
                  inputRef.current.value = place.formatted_address;
                }
              }
              
              // Call the onAddressSelect callback if provided
              if (onAddressSelect) {
                onAddressSelect(place.formatted_address);
              }
              
              // Also trigger the onChange handler for form state updates
              if (props.onChange) {
                // Create a synthetic event if onChange expects an event
                if (typeof props.onChange === 'function') {
                   const syntheticEvent = {
                     target: {
                       name: props.name || 'address',
                       value: place.formatted_address,
                     },
                   } as React.ChangeEvent<HTMLInputElement>;
                   
                   props.onChange(syntheticEvent);
                }
              }
            } else {
              console.warn("Invalid place selected or missing formatted_address");
            }
          });

          console.info("Address autocomplete initialized successfully");
        }
      } catch (error) {
        console.error("Error initializing address autocomplete:", error);
      }

      // Cleanup function
      return () => {
        if (autocomplete) {
          // Remove all event listeners to prevent memory leaks
          google.maps.event.clearInstanceListeners(autocomplete);
        }
        console.info("Address autocomplete cleaned up");
      };
    }, [onAddressSelect, placesOptions, initializationAttempts, props.name, props.onChange, autocomplete]);

    // Prevent form submission on Enter key press when autocomplete is active
    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Enter" && document.activeElement === inputRef.current) {
          e.preventDefault();
        }
      };

      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, []);

    // Ensure the value is properly set when the component is first rendered or when the value prop changes
    useEffect(() => {
      if (inputRef.current && props.value !== undefined) {
        inputRef.current.value = props.value.toString();
      }
    }, [props.value]);

    return (
      <Input
        {...props}
        ref={combinedRef}
        className={cn(
          error ? "border-red-500 focus-visible:ring-red-500" : "",
          className
        )}
        autoComplete="off"
      />
    );
  }
);

AddressAutocomplete.displayName = "AddressAutocomplete";

// Utility function to combine refs
function useCombinedRefs<T>(
  ...refs: (React.Ref<T> | React.MutableRefObject<T> | null)[]
) {
  const targetRef = useRef<T>(null);

  useEffect(() => {
    refs.forEach((ref) => {
      if (!ref) return;

      if (typeof ref === "function") {
        ref(targetRef.current);
      } else {
        (ref as React.MutableRefObject<T | null>).current = targetRef.current;
      }
    });
  }, [refs]);

  return targetRef;
}
