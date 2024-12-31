import { useEffect, useRef } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useState } from 'react';

interface Location {
  name: string;
  slug: string;
  coordinates: [number, number];
}

const locations: Location[] = [
  { name: "North Bergen", slug: "north-bergen", coordinates: [-74.0246, 40.7995] },
  { name: "Jersey City", slug: "jersey-city", coordinates: [-74.0776, 40.7282] },
  { name: "Union City", slug: "union-city", coordinates: [-74.0243, 40.7795] },
  { name: "West New York", slug: "west-new-york", coordinates: [-74.0143, 40.7857] },
  { name: "Secaucus", slug: "secaucus", coordinates: [-74.0565, 40.7799] },
  { name: "Weehawken", slug: "weehawken", coordinates: [-74.0246, 40.7684] },
  { name: "Hoboken", slug: "hoboken", coordinates: [-74.0323, 40.7439] },
  { name: "Guttenberg", slug: "guttenberg", coordinates: [-74.0043, 40.7920] }
];

const Map = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef<google.maps.Map | null>(null);

  const mapContainerStyle = {
    width: '100%',
    height: '600px'
  };

  const center = {
    lat: 40.7995,
    lng: -74.0246
  };

  const options = {
    disableDefaultUI: false,
    zoomControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    styles: [
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }]
      }
    ]
  };

  const onLoad = (map: google.maps.Map) => {
    mapRef.current = map;
    setMapLoaded(true);
  };

  const getMarkerIcon = () => {
    if (!window.google || !window.google.maps) return null;
    
    return {
      url: `data:image/svg+xml;utf-8,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path fill="#1E3A8A" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      `)}`,
      scaledSize: new window.google.maps.Size(36, 36),
      anchor: new window.google.maps.Point(18, 36),
    };
  };

  return (
    <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-lg">
      <LoadScript 
        googleMapsApiKey="AIzaSyA836rCuy6AkrT3L2yT_rfxUPUphH_b6lw"
        onLoad={() => console.log("Script loaded successfully")}
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={12}
          center={center}
          options={options}
          onLoad={onLoad}
        >
          {mapLoaded && locations.map((location) => (
            <Marker
              key={location.slug}
              position={{ lat: location.coordinates[1], lng: location.coordinates[0] }}
              onClick={() => setSelectedLocation(location)}
              icon={getMarkerIcon()}
            />
          ))}

          {selectedLocation && (
            <InfoWindow
              position={{
                lat: selectedLocation.coordinates[1],
                lng: selectedLocation.coordinates[0]
              }}
              onCloseClick={() => setSelectedLocation(null)}
            >
              <div className="p-2">
                <h3 className="font-semibold text-gray-900">{selectedLocation.name}</h3>
                <a
                  href={`/service-areas/${selectedLocation.slug}`}
                  className="text-sm text-primary hover:underline mt-1 block"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  View Details
                </a>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;