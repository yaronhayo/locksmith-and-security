import { useState, useCallback, useEffect } from 'react';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';
import { Loader2, AlertCircle } from "lucide-react";
import { defaultMapCenter, defaultMapZoom, mapStyles } from '@/config/constants';
import { MapLocation } from '@/types/map';
import { supabase } from '@/integrations/supabase/client';

interface MapProps {
  center?: { lat: number; lng: number };
  zoom?: number;
  markers?: MapLocation[];
  hoveredMarker?: string | null;
}

const mapContainerStyle = {
  width: '100%',
  height: '600px',
  borderRadius: '0.5rem'
};

const mapOptions = {
  disableDefaultUI: false,
  zoomControl: true,
  mapTypeControl: true,
  scaleControl: true,
  streetViewControl: true,
  rotateControl: true,
  fullscreenControl: true,
  styles: mapStyles
};

const Map = ({ 
  center = defaultMapCenter,
  zoom = defaultMapZoom,
  markers = [],
  hoveredMarker = null
}: MapProps) => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [isRetrying, setIsRetrying] = useState(false);

  const fetchApiKey = async () => {
    console.log('Starting to fetch Google Maps API key...');
    try {
      const { data, error } = await supabase
        .from('settings')
        .select('value')
        .eq('key', 'GOOGLE_MAPS_API_KEY')
        .maybeSingle();

      if (error) {
        console.error('Supabase error:', error);
        throw new Error(`Database error: ${error.message}`);
      }

      if (!data) {
        console.error('No API key found in settings');
        throw new Error('Google Maps API key not found in database');
      }

      console.log('API key retrieved successfully');
      setApiKey(data.value);
      setLoadError(null);
      setIsRetrying(false);
    } catch (error) {
      console.error('Fetch error:', error);
      setLoadError(error instanceof Error ? error.message : 'Failed to fetch API key');
      setIsRetrying(true);
    }
  };

  useEffect(() => {
    fetchApiKey();
    
    let retryTimeout: NodeJS.Timeout;
    if (isRetrying) {
      retryTimeout = setTimeout(() => {
        console.log('Retrying API key fetch...');
        fetchApiKey();
      }, 5000);
    }

    return () => {
      if (retryTimeout) {
        clearTimeout(retryTimeout);
      }
    };
  }, [isRetrying]);

  const handleMarkerClick = useCallback((slug?: string) => {
    if (slug) {
      navigate(`/service-areas/${slug}`);
      window.scrollTo(0, 0);
    }
  }, [navigate]);

  if (loadError) {
    return (
      <div className="w-full h-[600px] flex items-center justify-center bg-gray-50 rounded-lg">
        <div className="text-center space-y-4">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto" />
          <p className="text-red-500 font-medium">Error loading map: {loadError}</p>
          <p className="text-sm text-gray-600">
            {isRetrying ? 'Attempting to reconnect...' : 'Please try refreshing the page'}
          </p>
          {isRetrying && (
            <Loader2 className="h-6 w-6 animate-spin text-primary mx-auto" />
          )}
        </div>
      </div>
    );
  }

  if (!apiKey) {
    return (
      <div className="w-full h-[600px] flex items-center justify-center bg-gray-50 rounded-lg">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="relative w-full rounded-lg overflow-hidden shadow-lg h-[600px]">
      <LoadScript 
        googleMapsApiKey={apiKey}
        onLoad={() => {
          console.log('Google Maps script loaded successfully');
          setLoadError(null);
        }}
        onError={(error) => {
          console.error('LoadScript error:', error);
          setLoadError(`Failed to load Google Maps: ${error.message}`);
        }}
      >
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}
        
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={zoom}
          options={mapOptions}
          onLoad={(map) => {
            console.log('Map component loaded successfully');
            setMap(map);
            setIsLoaded(true);
          }}
        >
          {isLoaded && markers.map((marker, index) => (
            <Marker
              key={`${marker.slug}-${index}`}
              position={{ lat: marker.lat, lng: marker.lng }}
              title={marker.title}
              onClick={() => handleMarkerClick(marker.slug)}
              animation={hoveredMarker === marker.slug ? google.maps.Animation.BOUNCE : undefined}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;