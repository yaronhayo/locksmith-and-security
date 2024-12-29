import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { serviceAreaLocations } from '@/data/serviceAreaLocations';

interface Marker {
  remove: () => void;
}

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markers = useRef<Marker[]>([]);

  useEffect(() => {
    if (!mapContainer.current) {
      console.error('Map container not found');
      return;
    }

    // Clean up existing markers
    markers.current.forEach(marker => marker.remove());
    markers.current = [];

    // Clean up existing map
    if (map.current) {
      map.current.remove();
    }

    try {
      mapboxgl.accessToken = 'pk.eyJ1IjoibG9ja3NtaXRoYW5kc2VjdXJpdHkiLCJhIjoiY201NHR5MGRkMWVhczJrcHF4ZWFvdGQzdiJ9.sZk4Db9u3Q21dXqtXeh2aw';
      
      if (!mapboxgl.accessToken) {
        throw new Error('Mapbox access token is required');
      }

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [-74.0060, 40.7128], // New York City coordinates
        zoom: 11,
        interactive: true,
      });

      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      // Add markers for service areas
      serviceAreaLocations.forEach(location => {
        const markerElement = document.createElement('div');
        markerElement.className = 'cursor-pointer';
        markerElement.innerHTML = `
          <div class="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg 
                      transform transition-transform duration-200 hover:scale-110">
            ${location.name}
          </div>
        `;

        const marker = new mapboxgl.Marker({
          element: markerElement,
          anchor: 'bottom',
        })
          .setLngLat([location.longitude, location.latitude])
          .addTo(map.current);

        markerElement.addEventListener('click', () => {
          window.location.href = `/service-areas/${location.slug}`;
        });

        markers.current.push(marker);
      });

      // Fit bounds to show all markers
      const bounds = new mapboxgl.LngLatBounds();
      serviceAreaLocations.forEach(location => {
        bounds.extend([location.longitude, location.latitude]);
      });

      map.current.fitBounds(bounds, {
        padding: 50,
        maxZoom: 12,
      });

    } catch (error) {
      console.error('Error initializing map:', error);
    }

    return () => {
      markers.current.forEach(marker => marker.remove());
      if (map.current) {
        map.current.remove();
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-lg border border-gray-200">
      <div ref={mapContainer} className="absolute inset-0" style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default Map;