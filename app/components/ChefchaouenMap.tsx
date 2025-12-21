'use client';

import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

// Locations
const fez = [34.0331, -5.0003]; // Fez
const chefchaouen = [35.1683, -5.2633]; // Chefchaouen (Blue City)

// Route: Fez → Chefchaouen
const route = [
  fez,
  chefchaouen,
];

export default function ChefchaouenMap() {
  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800">
      <MapContainer
        center={[34.6, -5.13]} // Center between Fez and Chefchaouen
        zoom={8}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={fez as [number, number]}>
          <Popup>
            <strong>Fez</strong><br />
            Starting point - 4 hr bus ride
          </Popup>
        </Marker>
        <Marker position={chefchaouen as [number, number]}>
          <Popup>
            <strong>Chefchaouen (Blue City)</strong><br />
            Destination - Sunset viewpoint hike, chill evening
          </Popup>
        </Marker>
        <Polyline
          positions={route as [number, number][]}
          color="#14b8a6"
          weight={3}
          opacity={0.7}
        />
      </MapContainer>
    </div>
  );
}

