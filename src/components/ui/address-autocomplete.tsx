import { InputProps } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  forwardRef,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";

interface AddressAutocompleteProps {
  onChange: (address: string) => void;
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
          onChange(place.formatted_address);
        });
      }
    }, [onChange]);

    useEffect(() => {
      let googleMapScript: HTMLScriptElement | null = document.querySelector(
        'script[src*="maps.googleapis.com"]'
      );

      if (!googleMapScript) {
        googleMapScript = document.createElement("script");
        googleMapScript.src =
          `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
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
      onChange(e.target.value);
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
