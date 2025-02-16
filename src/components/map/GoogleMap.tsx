
import { useEffect, useMemo, useState } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import MapMarkers from "./MapMarkers";
import MapLoader from "./MapLoader";
import MapError from "./MapError";
import { useSettings } from "@/hooks/useSettings";
import { useLocations } from "@/hooks/useLocations";
import { MapMarker } from "@/types/service-area";

const defaultCenter = { lat: 40.7795, lng: -74.0324 }; // North Bergen coordinates
const DEFAULT_ZOOM = 12;

interface MapProps {
  center?: { lat: number; lng: number };
  zoom?: number;
  showAllMarkers?: boolean;
  highlightedMarker?: string | null;
  className?: string;
  height?: string;
}

const GoogleMapComponent = ({
  center = defaultCenter,
  zoom = DEFAULT_ZOOM,
  showAllMarkers = true,
  highlightedMarker = null,
  className = "w-full h-[400px]",
  height = "400px",
}: MapProps) => {
  const navigate = useNavigate();
  const { data: settings } = useSettings();
  const { data: locations, isLoading: locationsLoading, error: locationsError } = useLocations();
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(highlightedMarker);

  // Get Google Maps API key from settings
  const apiKey = settings?.google_maps_api_key || '';

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

  // Convert locations to markers
  const markers: MapMarker[] = useMemo(() => {
    if (!locations) return [];
    return locations.map(location => ({
      lat: location.lat,
      lng: location.lng,
      title: location.name,
      slug: location.slug
    }));
  }, [locations]);

  // Map options
  const options = useMemo(() => ({
    disableDefaultUI: false,
    zoomControl: true,
    streetViewControl: false,
    mapTypeControl: false,
    fullscreenControl: false,
    styles: [
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
    ],
  }), []);

  if (loadError) {
    console.error("Error loading Google Maps:", loadError);
    return <MapError error="Failed to load Google Maps" onRetry={() => window.location.reload()} isRetrying={false} />;
  }

  if (!isLoaded || locationsLoading) {
    return <MapLoader />;
  }

  if (locationsError) {
    console.error("Error loading locations:", locationsError);
    return <MapError error="Failed to load service areas" onRetry={() => window.location.reload()} isRetrying={false} />;
  }

  return (
    <div className={`relative rounded-lg overflow-hidden ${className}`} style={{ height }}>
      <GoogleMap
        mapContainerClassName="w-full h-full"
        center={center}
        zoom={zoom}
        options={options}
      >
        <MapMarkers 
          markers={showAllMarkers ? markers : markers.filter(m => m.slug === highlightedMarker)}
          hoveredMarker={hoveredMarker}
        />
      </GoogleMap>
    </div>
  );
};

export default GoogleMapComponent;
