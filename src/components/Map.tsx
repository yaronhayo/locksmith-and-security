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

  return (
    <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-lg">
      <LoadScript googleMapsApiKey="AIzaSyDxRw7-lukZWyTTPd7hr1i1rvmaUEzl_Ns">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={12}
          center={center}
          options={options}
        >
          {locations.map((location) => (
            <Marker
              key={location.slug}
              position={{ lat: location.coordinates[1], lng: location.coordinates[0] }}
              onClick={() => setSelectedLocation(location)}
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