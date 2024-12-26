import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

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
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markers = useRef<mapboxgl.Marker[]>([]);

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = 'pk.eyJ1IjoibG9ja3NtaXRoYW5kc2VjdXJpdHkiLCJhIjoiY201NHR5MGRkMWVhczJrcHF4ZWFvdGQzdiJ9.sZk4Db9u3Q21dXqtXeh2aw';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-74.0246, 40.7995],
      zoom: 12,
      keyboard: true, // Enable keyboard controls
      interactive: true // Enable all interactive controls
    });

    // Add navigation controls with keyboard support
    map.current.addControl(
      new mapboxgl.NavigationControl({
        showCompass: true,
        showZoom: true,
        visualizePitch: true
      }),
      'top-right'
    );

    // Add markers for each location with improved accessibility
    locations.forEach((location) => {
      const markerElement = document.createElement('div');
      markerElement.className = 'cursor-pointer';
      markerElement.setAttribute('role', 'button');
      markerElement.setAttribute('aria-label', `View services in ${location.name}`);
      markerElement.setAttribute('tabindex', '0');
      markerElement.innerHTML = `
        <div class="relative group">
          <div class="w-6 h-6 bg-primary rounded-full flex items-center justify-center transform transition-transform group-hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="Location marker">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            ${location.name}
          </div>
        </div>
      `;

      // Add keyboard support for markers
      markerElement.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          window.location.href = `/service-areas/${location.slug}`;
        }
      });

      markerElement.addEventListener('click', () => {
        window.location.href = `/service-areas/${location.slug}`;
      });

      const marker = new mapboxgl.Marker({ element: markerElement })
        .setLngLat(location.coordinates)
        .addTo(map.current);

      markers.current.push(marker);
    });

    // Cleanup
    return () => {
      markers.current.forEach(marker => marker.remove());
      map.current?.remove();
    };
  }, []);

  return (
    <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-lg">
      <div ref={mapContainer} className="absolute inset-0" role="application" aria-label="Service areas map" />
      {/* Text alternative for screen readers */}
      <div className="sr-only">
        <h3>Our Service Areas</h3>
        <ul>
          {locations.map((location) => (
            <li key={location.slug}>
              <a href={`/service-areas/${location.slug}`}>
                {location.name} - Click to view services
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Map;