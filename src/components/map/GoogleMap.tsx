
import { useMemo } from "react";
import { LoadScriptNext, GoogleMap as GoogleMapComponent } from "@react-google-maps/api";
import { useMapConfig } from "@/hooks/useMap";
import MapError from "./MapError";
import MapLoader from "./MapLoader";
import MapMarkers from "./MapMarkers";
import { MapMarker } from "@/types/service-area";

const libraries: ("places")[] = ['places'];

const mapOptions = {
  zoomControl: true,
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: false,
  gestureHandling: 'cooperative'
};

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

  console.log('Rendering map with API key:', apiKey.substring(0, 10) + '...');

  return (
    <div className="w-full h-full relative">
      <LoadScriptNext googleMapsApiKey={apiKey} libraries={libraries}>
        <GoogleMapComponent
          mapContainerClassName="w-full h-full"
          center={center}
          zoom={zoom}
          options={mapOptions}
          onClick={onClick}
        >
          {visibleMarkers.map((marker, index) => (
            <MapMarkers
              key={`${marker.slug || ''}-${index}`}
              markers={[marker]}
              hoveredMarker={highlightedMarker}
            />
          ))}
        </GoogleMapComponent>
      </LoadScriptNext>
    </div>
  );
};

export default GoogleMap;
