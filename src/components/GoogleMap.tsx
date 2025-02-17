
import { useMemo } from "react";
import { LoadScript, Libraries } from "@react-google-maps/api";
import { useMapConfig } from "@/hooks/useMap";
import MapError from "./map/MapError";
import MapLoader from "./map/MapLoader";
import MapContainer from "./map/MapContainer";
import { MapMarker } from "@/types/service-area";

const libraries: Libraries = ['places'];

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
  const { data: apiKey, error, isLoading } = useMapConfig();

  // Handle loading and error states
  if (isLoading) return <MapLoader />;
  if (error) return <MapError error={error.message} />;
  if (!apiKey) return <MapError error="No API key available" />;

  const visibleMarkers = showAllMarkers ? markers : markers.filter(m => m.slug === highlightedMarker);

  return (
    <div className="w-full h-[400px] relative rounded-lg overflow-hidden shadow-md">
      <LoadScript
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
      </LoadScript>
    </div>
  );
};

export default GoogleMap;
