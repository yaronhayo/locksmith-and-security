
import { useMemo } from "react";
import { GoogleMap as GoogleMapComponent, LoadScript } from "@react-google-maps/api";
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

  console.log('Map render - markers:', visibleMarkers.length);

  return (
    <div className="w-full h-full min-h-[400px] relative">
      <LoadScript googleMapsApiKey={apiKey} libraries={libraries}>
        <GoogleMapComponent
          mapContainerStyle={{ width: '100%', height: '100%', minHeight: '400px' }}
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
      </LoadScript>
    </div>
  );
};

export default GoogleMap;
