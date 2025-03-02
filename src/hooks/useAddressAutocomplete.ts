
import { useState, useEffect, useRef, useCallback } from "react";
import { toast } from "sonner";

interface UseAddressAutocompleteProps {
  initialValue?: string;
  onPlaceSelected?: (place: google.maps.places.PlaceResult) => void;
  onAddressSelect?: (address: string) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function useAddressAutocomplete({
  initialValue = "",
  onPlaceSelected,
  onAddressSelect,
  onChange
}: UseAddressAutocompleteProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const [internalValue, setInternalValue] = useState<string>(initialValue);
  const isInitialized = useRef(false);

  // Initialize Google Maps Places Autocomplete
  useEffect(() => {
    // Avoid multiple initializations
    if (isInitialized.current || !inputRef.current) return;

    // Guard clause - make sure Google is loaded
    if (!window.google?.maps?.places) {
      console.warn("Google Maps Places API not available yet");
      return;
    }
    
    try {
      // Create the autocomplete instance
      autocompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current, {
        componentRestrictions: { country: "us" },
        fields: ["address_components", "formatted_address", "geometry", "name"],
        types: ["address"],
      });

      isInitialized.current = true;
      console.log("Address autocomplete initialized successfully");

      // Add listener for place selection
      const listener = autocompleteRef.current.addListener("place_changed", () => {
        if (!autocompleteRef.current) return;
        
        const place = autocompleteRef.current.getPlace();
        console.log("Place selected:", place);
        
        if (!place || !place.formatted_address) {
          console.warn("Selected place has no formatted address");
          return;
        }
        
        if (onPlaceSelected) {
          onPlaceSelected(place);
        }
        
        if (place.formatted_address) {
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
      });

      return () => {
        if (window.google?.maps && listener) {
          window.google.maps.event.removeListener(listener);
          isInitialized.current = false;
        }
      };
    } catch (error) {
      console.error("Error initializing Google Maps Places Autocomplete:", error);
      toast.error("Address search unavailable", {
        description: "Please enter your address manually"
      });
    }
  }, [onPlaceSelected, onChange, onAddressSelect]);

  // Sync external value with internal state
  useEffect(() => {
    if (initialValue !== undefined) {
      const valueStr = typeof initialValue === 'string' ? initialValue : String(initialValue);
      setInternalValue(valueStr);
      
      // Only update the DOM input value if different
      if (inputRef.current && inputRef.current.value !== valueStr) {
        inputRef.current.value = valueStr;
      }
    }
  }, [initialValue]);

  // Handle internal onChange to update both internal state and propagate upward
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInternalValue(newValue);
    if (onChange) {
      onChange(e);
    }
  }, [onChange]);

  return {
    inputRef,
    internalValue,
    handleInputChange
  };
}
