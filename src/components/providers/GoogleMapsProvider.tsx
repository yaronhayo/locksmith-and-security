
import { ReactNode } from "react";
import { ScriptsProvider, useScripts, ScriptLoadError } from "./ScriptsProvider";
import MapLoader from "../map/MapLoader";

interface GoogleMapsProviderProps {
  children: ReactNode;
}

const GoogleMapsProviderInner = ({ children }: GoogleMapsProviderProps) => {
  const { googleMapsStatus, googleMapsError } = useScripts();

  if (googleMapsStatus === 'loading') {
    return <MapLoader />;
  }
  
  if (googleMapsStatus === 'error') {
    return <ScriptLoadError error={googleMapsError} />;
  }
  
  return <>{children}</>;
};

const GoogleMapsProvider = ({ children }: GoogleMapsProviderProps) => {
  return (
    <ScriptsProvider>
      <GoogleMapsProviderInner>
        {children}
      </GoogleMapsProviderInner>
    </ScriptsProvider>
  );
};

export default GoogleMapsProvider;
