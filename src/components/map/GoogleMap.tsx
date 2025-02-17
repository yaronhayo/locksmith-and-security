
import { useMemo } from "react";
import { LoadScript, Libraries } from "@react-google-maps/api";
import { useMapConfig } from "@/hooks/useMap";
import MapError from "./MapError";
import MapLoader from "./MapLoader";
import MapContainer from "./MapContainer";
import { MapMarker } from "@/types/service-area";
import { ErrorBoundary } from "react-error-boundary";

const libraries: Libraries = ['places'];

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
  const { apiKey, error, isLoading } = useMapConfig();
  
  const scriptOptions = useMemo(() => ({
    googleMapsApiKey: apiKey || '',
    libraries,
  }), [apiKey]);

  const visibleMarkers = useMemo(() => 
    showAllMarkers ? markers : markers.filter(m => m.slug === highlightedMarker),
    [markers, showAllMarkers, highlightedMarker]
  );

  if (isLoading) return <MapLoader />;
  if (error) return <MapError error={error.message} />;
  if (!apiKey) return <MapError error="Google Maps API key not found" />;

  return (
    <div className="w-full h-[400px] relative rounded-lg overflow-hidden shadow-md">
      <ErrorBoundary FallbackComponent={MapErrorFallback}>
        <LoadScript {...scriptOptions}>
          <MapContainer
            center={center}
            zoom={zoom}
            markers={visibleMarkers}
            hoveredMarker={highlightedMarker}
            onClick={onClick}
          />
        </LoadScript>
      </ErrorBoundary>
    </div>
  );
};

export default GoogleMap;
