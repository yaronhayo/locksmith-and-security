import { useEffect, useRef, useState } from "react";
import { Input } from "./input";
import { InputHTMLAttributes } from "react";
import { Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import { useScripts, ScriptError, ScriptLoading } from "@/components/providers/ScriptsProvider";

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
  const [error, setError] = useState<string | null>(null);
  const [initializationAttempted, setInitializationAttempted] = useState(false);
  const { googleMapsLoaded, isLoadingMaps, mapsError } = useScripts();

  // Initialize autocomplete
  useEffect(() => {
    // Only try to initialize if:
    // 1. We have the input element ref
    // 2. Google Maps API is available
    // 3. We haven't already attempted initialization
    if (!inputRef.current || !googleMapsLoaded || initializationAttempted) return;

    try {
      console.log('Initializing address autocomplete');
      setInitializationAttempted(true);

      // Clear existing listeners before creating new autocomplete instance
      if (autocompleteRef.current) {
        google.maps.event.clearInstanceListeners(autocompleteRef.current);
        autocompleteRef.current = null;
      }

      // Note: While the console shows a deprecation warning, we're keeping this implementation
      // for now as PlaceAutocompleteElement requires DOM manipulation which would be a larger
      // refactoring task. The current approach will continue to work until at least March 2025.
      autocompleteRef.current = new window.google.maps.places.Autocomplete(
        inputRef.current,
        {
          componentRestrictions: { country: "us" },
          fields: ["address_components", "formatted_address", "geometry", "place_id"],
          types: ["address"]
        }
      );

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

      return () => {
        // Only attempt cleanup if Google Maps is still available
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
  }, [onChange, googleMapsLoaded, initializationAttempted]);

  // Reset initialization attempted state when Google Maps loads
  useEffect(() => {
    if (googleMapsLoaded) {
      setInitializationAttempted(false);
    }
  }, [googleMapsLoaded]);

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

  const displayError = error || mapsError;

  return (
    <div className="relative w-full space-y-2">
      {isLoadingMaps && <ScriptLoading type="maps" />}
      
      {mapsError && <ScriptError type="maps" error={mapsError} />}
      
      <div className="relative">
        <Input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleInputChange}
          className={cn(className, "w-full", displayError ? 'border-red-500' : '')}
          disabled={disabled || isLoadingMaps || !!mapsError}
          placeholder={placeholder}
          aria-invalid={displayError ? "true" : "false"}
          aria-describedby={displayError ? "address-error" : undefined}
          {...props}
        />
        {isLoadingMaps && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <Loader2 className="h-4 w-4 animate-spin text-gray-400" />
          </div>
        )}
      </div>
      
      {error && !mapsError && (
        <Alert variant="destructive">
          <AlertDescription id="address-error">
            {error}
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default AddressAutocomplete;
