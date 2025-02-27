
import GoogleMapsProvider from "@/components/providers/GoogleMapsProvider";
import GoogleMap from "@/components/map/GoogleMap";
import { MapMarker } from "@/types/service-area";
import { ErrorBoundary } from "react-error-boundary";
import MapError from "@/components/map/MapError";

interface ServiceAreaMapProps {
  locationName: string;
  lat: number;
  lng: number;
}

const ServiceAreaMap = ({ locationName, lat, lng }: ServiceAreaMapProps) => {
  const markers: MapMarker[] = [
    {
      lat,
      lng,
      title: `${locationName} Locksmith Services`,
      slug: locationName.toLowerCase().replace(/\s+/g, '-')
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-4 bg-gray-50 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800">Serving {locationName}, NJ</h3>
        <p className="text-sm text-gray-600">Fast response to all areas of {locationName}</p>
      </div>
      <div className="h-[400px]">
        <ErrorBoundary FallbackComponent={MapError}>
          <GoogleMapsProvider>
            <GoogleMap
              markers={markers}
              showAllMarkers={true}
              zoom={14}
              center={{ lat, lng }}
            />
          </GoogleMapsProvider>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default ServiceAreaMap;
