import { AspectRatio } from "@/components/ui/aspect-ratio";
import GoogleMapsProvider from "@/components/providers/GoogleMapsProvider";
import GoogleMap from "@/components/map/GoogleMap";
import { useLocations } from "@/hooks/useLocations";

interface ServiceAreaMapProps {
  locationName: string;
}

const ServiceAreaMap = ({ locationName }: ServiceAreaMapProps) => {
  const { data: locations } = useLocations();
  
  if (!locations) {
    console.error(`No locations data available`);
    return null;
  }

  const location = locations.find(
    loc => loc.name.toLowerCase() === locationName.toLowerCase()
  );

  if (!location) {
    console.error(`Location not found: ${locationName}`);
    return null;
  }

  const markers = [{
    lat: location.lat,
    lng: location.lng,
    title: location.name,
    slug: location.slug
  }];

  return (
    <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
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
  );
};

export default ServiceAreaMap;
