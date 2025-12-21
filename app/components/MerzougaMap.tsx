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
const ouarzazate = [30.9194, -6.8931]; // Ouarzazate
const aitBenhaddou = [31.0472, -7.1233]; // Ait Benhaddou
const dadesValley = [31.5167, -5.5167]; // Dades Valley (approximate)
const todraGorge = [31.5833, -5.5167]; // Todra Gorge (approximate)
const merzouga = [31.0833, -4.0167]; // Merzouga

// Route: Ouarzazate → Ait Benhaddou → Dades Valley → Todra Gorge → Merzouga
const route = [
  ouarzazate,
  aitBenhaddou,
  dadesValley,
  todraGorge,
  merzouga,
];

export default function MerzougaMap() {
  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800">
      <MapContainer
        center={[31.0, -6.0]} // Center of the route
        zoom={8}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={ouarzazate as [number, number]}>
          <Popup>
            <strong>Ouarzazate</strong><br />
            Starting point
          </Popup>
        </Marker>
        <Marker position={aitBenhaddou as [number, number]}>
          <Popup>
            <strong>Ait Benhaddou</strong><br />
            Morning exploration
          </Popup>
        </Marker>
        <Marker position={dadesValley as [number, number]}>
          <Popup>
            <strong>Dades Valley</strong><br />
            Quick hike stop
          </Popup>
        </Marker>
        <Marker position={todraGorge as [number, number]}>
          <Popup>
            <strong>Todra Gorge</strong><br />
            Quick hike stop
          </Popup>
        </Marker>
        <Marker position={merzouga as [number, number]}>
          <Popup>
            <strong>Merzouga</strong><br />
            Final destination - 5 hr drive
          </Popup>
        </Marker>
        <Polyline
          positions={route as [number, number][]}
          color="#dc2626"
          weight={3}
          opacity={0.7}
        />
      </MapContainer>
    </div>
  );
}

