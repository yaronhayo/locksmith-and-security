
import { createContext, useContext } from "react";

export interface ScriptsContextType {
  googleMapsLoaded: boolean;
  recaptchaLoaded: boolean;
  mapsError: string | null;
  recaptchaError: string | null;
  isLoadingMaps: boolean;
  isLoadingRecaptcha: boolean;
}

export const ScriptsContext = createContext<ScriptsContextType | undefined>(undefined);

export const useScriptsContext = () => {
  const context = useContext(ScriptsContext);
  if (!context) {
    throw new Error('useScriptsContext must be used within a ScriptsProvider');
  }
  return context;
};
