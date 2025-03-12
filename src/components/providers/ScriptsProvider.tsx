
import { ReactNode, useMemo } from "react";
import { useGoogleMapsApiKey, useRecaptchaKey } from "@/hooks/useApiKeys";
import { ScriptsContext } from "@/hooks/useScriptsContext";
import { useGoogleMapsScript } from "@/hooks/useGoogleMapsScript";
import { useRecaptchaScript } from "@/hooks/useRecaptchaScript";
import { useScriptReload } from "@/hooks/useScriptReload";

export { ScriptError } from "../scripts/ScriptError";
export { ScriptLoading } from "../scripts/ScriptLoading";
export { useScriptsContext as useScripts } from "@/hooks/useScriptsContext";

interface ScriptsProviderProps {
  children: ReactNode;
}

export const ScriptsProvider = ({ children }: ScriptsProviderProps) => {
  // Fetch API keys
  const { 
    data: mapsApiKey, 
    error: mapsKeyError, 
    isLoading: isLoadingMapsKey
  } = useGoogleMapsApiKey();
  
  const { 
    data: recaptchaKey, 
    error: recaptchaKeyError, 
    isLoading: isLoadingRecaptchaKey
  } = useRecaptchaKey();

  // Load scripts
  const { 
    googleMapsLoaded, 
    mapsError, 
    setGoogleMapsLoaded 
  } = useGoogleMapsScript(mapsApiKey, isLoadingMapsKey, mapsKeyError);
  
  const { 
    recaptchaLoaded, 
    recaptchaError, 
    setRecaptchaLoaded 
  } = useRecaptchaScript(recaptchaKey, isLoadingRecaptchaKey, recaptchaKeyError);

  // Setup script reload handlers
  useScriptReload(setGoogleMapsLoaded, setRecaptchaLoaded);

  // Create context value
  const contextValue = useMemo(() => ({
    googleMapsLoaded,
    recaptchaLoaded,
    mapsError: mapsKeyError ? mapsKeyError.message : mapsError,
    recaptchaError: recaptchaKeyError ? recaptchaKeyError.message : recaptchaError,
    isLoadingMaps: isLoadingMapsKey || (!googleMapsLoaded && !mapsError && !mapsKeyError),
    isLoadingRecaptcha: isLoadingRecaptchaKey || (!recaptchaLoaded && !recaptchaError && !recaptchaKeyError)
  }), [
    googleMapsLoaded, 
    recaptchaLoaded, 
    mapsError, 
    recaptchaError, 
    mapsKeyError, 
    recaptchaKeyError,
    isLoadingMapsKey,
    isLoadingRecaptchaKey
  ]);

  return (
    <ScriptsContext.Provider value={contextValue}>
      {children}
    </ScriptsContext.Provider>
  );
};
