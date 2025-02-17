
import { useMemo } from "react";
import { useLoadScript } from "@react-google-maps/api";
import { useMapConfig } from "@/hooks/useMap";
import MapError from "./MapError";
import MapLoader from "./MapLoader";
import MapContainer from "./MapContainer";
import { MapMarker } from "@/types/service-area";
import { ErrorBoundary } from "react-error-boundary";

const libraries: ("places")[] = ['places'];

interface GoogleMapProps {
  markers?: MapMarker[];
  highlightedMarker?: string | null;
  showAllMarkers?: boolean;
  zoom?: number;
  center?: { lat: number; lng: number };
  onClick?: (e: google.maps.MapMouseEvent) => void;
}

const MapErrorFallback = ({ error }: { error: Error }) => (
  <MapError error={error.message || 'An error occurred loading the map'} />
);

const GoogleMap = ({
  markers = [],
  highlightedMarker = null,
  showAllMarkers = true,
  zoom = 12,
  center = { lat: 40.7795, lng: -74.0324 },
  onClick
}: GoogleMapProps) => {
  const { apiKey, error: apiKeyError, isLoading: isLoadingKey } = useMapConfig();

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey || '',
    libraries,
    id: 'google-map-script'
  });

  const visibleMarkers = useMemo(() => 
    showAllMarkers ? markers : markers.filter(m => m.slug === highlightedMarker),
    [markers, showAllMarkers, highlightedMarker]
  );

  if (isLoadingKey) return <MapLoader />;
  if (apiKeyError) return <MapError error={apiKeyError.message} />;
  if (!apiKey) return <MapError error="Google Maps API key not found" />;
  if (loadError) return <MapError error="Failed to load Google Maps" />;
  if (!isLoaded) return <MapLoader />;

  return (
    <div className="w-full h-[400px] relative rounded-lg overflow-hidden shadow-md">
      <ErrorBoundary FallbackComponent={MapErrorFallback}>
        <MapContainer
          center={center}
          zoom={zoom}
          markers={visibleMarkers}
          hoveredMarker={highlightedMarker}
          onClick={onClick}
        />
      </ErrorBoundary>
    </div>
  );
};

export default GoogleMap;
