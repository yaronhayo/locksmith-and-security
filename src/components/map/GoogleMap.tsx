
import { useMemo } from "react";
import { LoadScriptNext } from "@react-google-maps/api";
import { useMapConfig } from "@/hooks/useMap";
import MapError from "./MapError";
import MapLoader from "./MapLoader";
import MapContainer from "./MapContainer";
import { MapMarker } from "@/types/service-area";

const libraries: ("places")[] = ['places'];

interface GoogleMapProps {
  markers?: MapMarker[];
  highlightedMarker?: string | null;
  showAllMarkers?: boolean;
  zoom?: number;
  center?: { lat: number; lng: number };
  onClick?: (e: google.maps.MapMouseEvent) => void;
}

const GoogleMap = ({
  markers = [],
  highlightedMarker = null,
  showAllMarkers = true,
  zoom = 12,
  center = { lat: 40.7795, lng: -74.0324 },
  onClick
}: GoogleMapProps) => {
  const { data: apiKey, error: apiKeyError, isLoading } = useMapConfig();

  const visibleMarkers = useMemo(() => 
    showAllMarkers ? markers : markers.filter(m => m.slug === highlightedMarker),
    [markers, showAllMarkers, highlightedMarker]
  );

  if (isLoading) return <MapLoader />;
  if (apiKeyError) return <MapError error={apiKeyError.message} />;
  if (!apiKey) return <MapError error="Google Maps API key not found" />;

  console.log('Rendering map with', visibleMarkers.length, 'markers');

  return (
    <LoadScriptNext
      googleMapsApiKey={apiKey}
      libraries={libraries}
    >
      <MapContainer
        center={center}
        zoom={zoom}
        markers={visibleMarkers}
        hoveredMarker={highlightedMarker}
        onClick={onClick}
      />
    </LoadScriptNext>
  );
};

export default GoogleMap;
