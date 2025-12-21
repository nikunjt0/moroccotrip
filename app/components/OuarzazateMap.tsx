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
const essaouira = [31.5085, -9.7596]; // Essaouira
const marrakesh = [31.6295, -7.9811]; // Marrakesh
const ouarzazate = [30.9194, -6.8931]; // Ouarzazate

// Route: Essaouira → Marrakesh → Ouarzazate
const route = [
  essaouira,
  marrakesh,
  ouarzazate,
];

export default function OuarzazateMap() {
  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800">
      <MapContainer
        center={[31.27, -8.32]} // Center of the route
        zoom={8}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={essaouira as [number, number]}>
          <Popup>
            <strong>Essaouira</strong><br />
            Morning: Surfing
          </Popup>
        </Marker>
        <Marker position={marrakesh as [number, number]}>
          <Popup>
            <strong>Marrakesh</strong><br />
            Transfer point - CTM/Supratour Bus
          </Popup>
        </Marker>
        <Marker position={ouarzazate as [number, number]}>
          <Popup>
            <strong>Ouarzazate</strong><br />
            Final destination
          </Popup>
        </Marker>
        <Polyline
          positions={route as [number, number][]}
          color="#ec4899"
          weight={3}
          opacity={0.7}
        />
      </MapContainer>
    </div>
  );
}

