import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useNavigate } from 'react-router-dom';
import { serviceAreaLocations } from '@/data/serviceAreaLocations';

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoibG9ja3NtaXRoYW5kc2VjdXJpdHkiLCJhIjoiY201NHR5MGRkMWVhczJrcHF4ZWFvdGQzdiJ9.sZk4Db9u3Q21dXqtXeh2aw';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markers = useRef<mapboxgl.Marker[]>([]);
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    try {
      mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [-74.0060, 40.7128],
        zoom: 11
      });

      map.current.on('load', () => {
        serviceAreaLocations.forEach((location) => {
          const marker = new mapboxgl.Marker()
            .setLngLat([location.longitude, location.latitude])
            .setPopup(
              new mapboxgl.Popup({ offset: 25 })
                .setHTML(`
                  <h3 class="font-semibold">${location.name}</h3>
                  <p class="text-sm">${location.description}</p>
                `)
            )
            .addTo(map.current!);

          marker.getElement().addEventListener('click', () => {
            navigate(`/service-areas/${location.slug}`);
          });

          markers.current.push(marker);
        });
      });

    } catch (err) {
      console.error('Map initialization error:', err);
      setError('Failed to load map. Please try again later.');
    }

    return () => {
      markers.current.forEach(marker => marker.remove());
      if (map.current) {
        map.current.remove();
      }
    };
  }, [navigate]);

  if (error) {
    return (
      <div className="h-[600px] flex items-center justify-center bg-gray-100 rounded-lg">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div 
      ref={mapContainer} 
      className="h-[600px] w-full rounded-lg overflow-hidden"
      style={{ position: 'relative' }}
    />
  );
};

export default Map;