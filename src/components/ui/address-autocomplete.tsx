
import { useEffect, useRef, useState } from "react";
import { Input } from "./input";
import { InputHTMLAttributes } from "react";
import { Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import { useScripts, ScriptError, ScriptLoading } from "@/components/providers/ScriptsProvider";
import { MapLoader } from "@/utils/mapLoader";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [initializationAttempted, setInitializationAttempted] = useState(false);
  const { googleMapsLoaded, isLoadingMaps, mapsError } = useScripts();
  const [showFallbackInput, setShowFallbackInput] = useState(false);

  // Initialize autocomplete
  useEffect(() => {
    // Only try to initialize if:
    // 1. We have the container and input element refs
    // 2. Google Maps API is available
    // 3. We haven't already attempted initialization
    if (!containerRef.current || !inputRef.current || !googleMapsLoaded || initializationAttempted) return;

    try {
      console.log('Initializing address autocomplete with standard Places Autocomplete');
      setInitializationAttempted(true);

      // Wait for the MapLoader to be ready
      MapLoader.onLoad(() => {
        try {
          if (!inputRef.current) return;
          
          // Check if the Google Maps Places API is available
          if (!window.google?.maps?.places) {
            console.error('Google Maps Places API not available');
            setError('Google Maps Places API not loaded correctly');
            setShowFallbackInput(true);
            return;
          }
          
          // Create and configure the autocomplete using the standard Autocomplete API
          const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
            types: ['address'],
            componentRestrictions: { country: 'us' },
            fields: ['formatted_address', 'address_components', 'geometry', 'place_id']
          });
          
          // Store the autocomplete instance
          autocompleteRef.current = autocomplete;
          
          // Add event listener for place selection
          autocomplete.addListener('place_changed', () => {
            const place = autocomplete.getPlace();
            if (place?.formatted_address) {
              onChange(place.formatted_address);
              setError(null);
            }
          });
          
        } catch (err) {
          console.error('Error initializing Places Autocomplete:', err);
          setError('Failed to initialize address autocomplete. Using fallback input instead.');
          setShowFallbackInput(true);
        }
      });
    } catch (err) {
      console.error('Error setting up address autocomplete:', err);
      setError(err instanceof Error ? err.message : 'Failed to initialize address autocomplete');
      setShowFallbackInput(true);
    }
    
    return () => {
      // Clean up the autocomplete instance
      if (autocompleteRef.current) {
        // No explicit cleanup needed for standard Autocomplete API
        autocompleteRef.current = null;
      }
    };
  }, [onChange, googleMapsLoaded, initializationAttempted, className, disabled, placeholder, value, props]);

  // Reset initialization attempted state when Google Maps loads
  useEffect(() => {
    if (googleMapsLoaded) {
      setInitializationAttempted(false);
    }
  }, [googleMapsLoaded]);

  // Always show fallback input if Google Maps fails to load or if initialization fails
  useEffect(() => {
    if (mapsError || !googleMapsLoaded) {
      setShowFallbackInput(true);
    }
  }, [mapsError, googleMapsLoaded]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    setError(null);
  };

  const displayError = error || mapsError;

  return (
    <div className="relative w-full space-y-2">
      {isLoadingMaps && <ScriptLoading type="maps" />}
      
      {mapsError && <ScriptError type="maps" error={mapsError} />}
      
      <div ref={containerRef} className="relative w-full">
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
