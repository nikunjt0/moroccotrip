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
const chefchaouen = [35.1683, -5.2633]; // Chefchaouen (Blue City)
const tangier = [35.7595, -5.8340]; // Tangier

// Route: Chefchaouen → Tangier
const route = [
  chefchaouen,
  tangier,
];

export default function TangierMap() {
  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800">
      <MapContainer
        center={[35.46, -5.55]} // Center between Chefchaouen and Tangier
        zoom={9}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={chefchaouen as [number, number]}>
          <Popup>
            <strong>Chefchaouen</strong><br />
            Starting point - ~2h45 bus ride
          </Popup>
        </Marker>
        <Marker position={tangier as [number, number]}>
          <Popup>
            <strong>Tangier</strong><br />
            Destination - Kasbah area, night out
          </Popup>
        </Marker>
        <Polyline
          positions={route as [number, number][]}
          color="#a855f7"
          weight={3}
          opacity={0.7}
        />
      </MapContainer>
    </div>
  );
}

