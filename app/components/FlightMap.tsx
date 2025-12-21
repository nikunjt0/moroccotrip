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

// Madrid coordinates
const madrid = [40.4168, -3.7038];
// Marrakesh coordinates
const marrakesh = [31.6295, -7.9811];

// Route coordinates (Madrid to Marrakesh)
const route = [
  madrid,
  marrakesh,
];

export default function FlightMap() {
  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800">
      <MapContainer
        center={[36.0, -5.0]} // Center between Madrid and Marrakesh
        zoom={5}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={madrid as [number, number]}>
          <Popup>
            <strong>Madrid, Spain</strong><br />
            Landing point
          </Popup>
        </Marker>
        <Marker position={marrakesh as [number, number]}>
          <Popup>
            <strong>Marrakesh, Morocco</strong><br />
            Destination
          </Popup>
        </Marker>
        <Polyline
          positions={route as [number, number][]}
          color="#3b82f6"
          weight={3}
          opacity={0.7}
        />
      </MapContainer>
    </div>
  );
}

