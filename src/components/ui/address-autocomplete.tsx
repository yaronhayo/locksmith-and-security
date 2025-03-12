
import { useEffect, useRef, useState } from "react";
import { Input } from "./input";
import { InputHTMLAttributes } from "react";
import { Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import { useScripts } from "@/components/providers/ScriptsProvider";

type AddressAutocompleteProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  value: string;
  onChange: (value: string) => void;
};

const AddressAutocomplete = ({
  value,
  onChange,
  className,
  disabled,
  placeholder,
  ...props
}: AddressAutocompleteProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const { googleMapsStatus, googleMapsError } = useScripts();
  const [error, setError] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize autocomplete when Google Maps is loaded
  useEffect(() => {
    if (googleMapsStatus !== 'loaded' || !inputRef.current || isInitialized) return;

    try {
      console.log('Initializing address autocomplete');
      
      // Clean up existing autocomplete instance
      if (autocompleteRef.current) {
        google.maps.event.clearInstanceListeners(autocompleteRef.current);
        autocompleteRef.current = null;
      }
      
      // Create new autocomplete instance
      autocompleteRef.current = new google.maps.places.Autocomplete(
        inputRef.current,
        {
          componentRestrictions: { country: "us" },
          fields: ["address_components", "formatted_address", "geometry", "place_id"],
          types: ["address"]
        }
      );
      
      // Add place_changed listener
      const listener = autocompleteRef.current.addListener(
        "place_changed",
        () => {
          const place = autocompleteRef.current?.getPlace();
          if (place?.formatted_address) {
            onChange(place.formatted_address);
            setError(null);
          }
        }
      );
      
      setIsInitialized(true);
      setError(null);
      
      // Cleanup function
      return () => {
        if (window.google?.maps?.event && listener) {
          listener.remove();
        }
        if (window.google?.maps?.event && autocompleteRef.current) {
          google.maps.event.clearInstanceListeners(autocompleteRef.current);
          autocompleteRef.current = null;
        }
      };
    } catch (err) {
      console.error('Error initializing address autocomplete:', err);
      setError(err instanceof Error ? err.message : 'Failed to initialize address autocomplete');
    }
  }, [googleMapsStatus, onChange, isInitialized]);

  // Listen for Google Maps script load event
  useEffect(() => {
    const handleGoogleMapsLoaded = () => {
      setIsInitialized(false); // Reset initialization flag to trigger re-initialization
    };
    
    document.addEventListener('google-maps-loaded', handleGoogleMapsLoaded);
    
    return () => {
      document.removeEventListener('google-maps-loaded', handleGoogleMapsLoaded);
    };
  }, []);

  // Prevent form submission on Enter key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && autocompleteRef.current) {
        e.preventDefault();
      }
    };

    const input = inputRef.current;
    if (input) {
      input.addEventListener('keydown', handleKeyDown);
      return () => {
        input.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    setError(null);
  };

  const displayError = error || (googleMapsError?.message ?? null);
  const isLoading = googleMapsStatus === 'loading' || (googleMapsStatus === 'loaded' && !isInitialized);

  return (
    <div className="relative w-full space-y-2">
      <div className="relative">
        <Input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleInputChange}
          className={cn(className, "w-full", displayError ? 'border-red-500' : '')}
          disabled={disabled || isLoading || googleMapsStatus === 'error'}
          placeholder={placeholder}
          aria-invalid={displayError ? "true" : "false"}
          aria-describedby={displayError ? "address-error" : undefined}
          {...props}
        />
        {isLoading && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <Loader2 className="h-4 w-4 animate-spin text-gray-400" />
          </div>
        )}
      </div>
      
      {displayError && (
        <Alert variant="destructive">
          <AlertDescription id="address-error">
            {displayError}
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default AddressAutocomplete;
