
import { useEffect, useRef, useState } from "react";
import { Input } from "./input";
import { InputHTMLAttributes } from "react";
import { Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import { useScripts, ScriptError } from "@/components/providers/ScriptsProvider";
import { Button } from "./button";

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
  const { googleMapsLoaded, isLoadingMaps, mapsError, reloadMapsScript } = useScripts();

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
          google.maps.event.clearInstanceListeners(listener);
        }
        if (window.google?.maps?.event && autocompleteRef.current) {
          google.maps.event.clearInstanceListeners(autocompleteRef.current);
          autocompleteRef.current = null;
        }
      };
    } catch (err) {
      console.error('Error initializing address autocomplete:', err);
      const errorMessage = err instanceof Error ? err.message : 'Failed to initialize address autocomplete';
      setError(errorMessage);
      
      // Check if this is a billing error
      if (errorMessage.toLowerCase().includes('billing') || 
          errorMessage.toLowerCase().includes('payment') ||
          errorMessage.toLowerCase().includes('api key')) {
        setError("Google Maps API billing issue. Please enable billing in Google Cloud Console.");
      }
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

  const handleRetry = () => {
    setError(null);
    setInitializationAttempted(false);
    reloadMapsScript();
  };

  const displayError = error || mapsError;
  const isBillingError = displayError?.toLowerCase().includes('billing') || 
                          displayError?.toLowerCase().includes('payment') ||
                          displayError?.toLowerCase().includes('development');

  return (
    <div className="relative w-full space-y-2">
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
      
      {displayError && (
        <Alert variant="destructive">
          <AlertDescription id="address-error" className="space-y-2">
            <p>{displayError}</p>
            
            {isBillingError && (
              <div className="text-xs mt-1">
                <p>To resolve this issue:</p>
                <ol className="list-decimal ml-4 mt-1">
                  <li>Enable billing for your Google Cloud Project</li>
                  <li>Ensure the Maps JavaScript API and Places API are enabled</li>
                </ol>
                <div className="mt-2 flex space-x-2">
                  <Button 
                    variant="link" 
                    className="p-0 h-6 text-xs text-blue-500 hover:text-blue-700" 
                    onClick={() => window.open("https://console.cloud.google.com/project/_/billing/enable", '_blank')}
                  >
                    Google Cloud Console
                  </Button>
                  <Button
                    variant="link"
                    className="p-0 h-6 text-xs text-blue-500 hover:text-blue-700"
                    onClick={handleRetry}
                  >
                    Retry Loading
                  </Button>
                </div>
              </div>
            )}
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default AddressAutocomplete;
