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
const merzouga = [31.0833, -4.0167]; // Merzouga
const zizValley = [32.6833, -4.7500]; // Ziz Valley (approximate)
const midelt = [32.6833, -4.7500]; // Midelt (approximate, close to Ziz Valley)
const fez = [34.0331, -5.0003]; // Fez

// Route: Merzouga → Ziz Valley/Midelt → Fez
const route = [
  merzouga,
  zizValley,
  fez,
];

export default function FezMap() {
  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800">
      <MapContainer
        center={[32.5, -4.5]} // Center of the route
        zoom={7}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={merzouga as [number, number]}>
          <Popup>
            <strong>Merzouga</strong><br />
            Starting point - Sunrise on dunes
          </Popup>
        </Marker>
        <Marker position={zizValley as [number, number]}>
          <Popup>
            <strong>Ziz Valley / Midelt</strong><br />
            Drive through
          </Popup>
        </Marker>
        <Marker position={fez as [number, number]}>
          <Popup>
            <strong>Fez</strong><br />
            Final destination - Arrive evening
          </Popup>
        </Marker>
        <Polyline
          positions={route as [number, number][]}
          color="#06b6d4"
          weight={3}
          opacity={0.7}
        />
      </MapContainer>
    </div>
  );
}

