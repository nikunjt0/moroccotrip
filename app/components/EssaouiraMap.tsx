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
// Essaouira coordinates
const essaouira = [31.5085, -9.7596];

// Route from Marrakesh to Essaouira
const route = [
  marrakesh,
  essaouira,
];

export default function EssaouiraMap() {
  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800">
      <MapContainer
        center={[31.57, -8.87]} // Center between Marrakesh and Essaouira
        zoom={9}
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
            Starting point - ~3 hrs bus ride to Essaouira
          </Popup>
        </Marker>
        <Marker position={essaouira as [number, number]}>
          <Popup>
            <strong>Essaouira</strong><br />
            Coastal destination - Windsurfing, beach, ramparts, port
          </Popup>
        </Marker>
        <Polyline
          positions={route as [number, number][]}
          color="#8b5cf6"
          weight={3}
          opacity={0.7}
        />
      </MapContainer>
    </div>
  );
}

