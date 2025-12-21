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

// Marrakesh coordinates
const marrakesh = [31.6295, -7.9811];
// Imlil coordinates (Atlas Mountains)
const imlil = [31.1333, -7.9167];

// Route from Marrakesh to Imlil
const route = [
  marrakesh,
  imlil,
];

export default function ImlilMap() {
  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800">
      <MapContainer
        center={[31.38, -7.95]} // Center between Marrakesh and Imlil
        zoom={10}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={marrakesh as [number, number]}>
          <Popup>
            <strong>Marrakesh</strong><br />
            Starting point - ~1.5 hrs drive to Imlil
          </Popup>
        </Marker>
        <Marker position={imlil as [number, number]}>
          <Popup>
            <strong>Imlil, Atlas Mountains</strong><br />
            Day trip destination - 2-4 hour hike
          </Popup>
        </Marker>
        <Polyline
          positions={route as [number, number][]}
          color="#f59e0b"
          weight={3}
          opacity={0.7}
        />
      </MapContainer>
    </div>
  );
}

