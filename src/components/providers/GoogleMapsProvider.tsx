
import { ReactNode } from "react";
import MapError from "../map/MapError";
import MapLoader from "../map/MapLoader";
import { useScripts } from "./ScriptsProvider";

interface GoogleMapsProviderProps {
  children: ReactNode;
}

const GoogleMapsProvider = ({ children }: GoogleMapsProviderProps) => {
  const { googleMapsLoaded, isLoadingMaps, mapsError } = useScripts();

  if (isLoadingMaps) return <MapLoader />;
  if (mapsError) return <MapError error={mapsError} />;
  if (!googleMapsLoaded) return <MapError error="Google Maps API not available" />;

  return <>{children}</>;
};

export default GoogleMapsProvider;
