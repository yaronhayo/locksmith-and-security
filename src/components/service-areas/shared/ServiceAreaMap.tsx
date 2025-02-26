
import { AspectRatio } from "@/components/ui/aspect-ratio";
import GoogleMapsProvider from "@/components/providers/GoogleMapsProvider";
import GoogleMap from "@/components/map/GoogleMap";
import { useLocations } from "@/hooks/useLocations";
import MapError from "@/components/map/MapError";
import { ErrorBoundary } from "react-error-boundary";
import LoadingSpinner from "@/components/LoadingSpinner";

interface ServiceAreaMapProps {
  locationName: string;
}

const ServiceAreaMap = ({ locationName }: ServiceAreaMapProps) => {
  const { data: locations, error, isLoading } = useLocations();
  
  if (error) {
    return <MapError error={error.message} />;
  }

  if (isLoading || !locations) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center bg-gray-50 rounded-xl">
        <LoadingSpinner />
      </div>
    );
  }

  const location = locations.find(
    loc => loc.name.toLowerCase() === locationName.toLowerCase()
  );

  if (!location) {
    console.error(`Location not found: ${locationName}`);
    return <MapError error={`Location not found: ${locationName}`} />;
  }

  const markers = [{
    lat: location.lat,
    lng: location.lng,
    title: location.name,
    slug: location.slug
  }];

  return (
    <ErrorBoundary FallbackComponent={MapError}>
      <div className="relative w-full rounded-xl overflow-hidden shadow-lg">
        <AspectRatio ratio={16/9}>
          <GoogleMapsProvider>
            <GoogleMap
              markers={markers}
              showAllMarkers={true}
              zoom={14}
              center={{ lat: location.lat, lng: location.lng }}
            />
          </GoogleMapsProvider>
        </AspectRatio>
      </div>
    </ErrorBoundary>
  );
};

export default ServiceAreaMap;
