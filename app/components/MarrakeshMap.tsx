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

// Marrakesh locations (approximate coordinates)
const darElBacha = [31.6250, -7.9880]; // Dar el Bacha Museum
const jardinsMajorelle = [31.6400, -7.9930]; // Jardins de la Majorelle
const bahiaPalace = [31.6194, -7.9786]; // Bahia Palace
const saadianTombs = [31.6178, -7.9783]; // Saadian Tombs (close to Bahia Palace)

// Route showing the path through the locations
const route = [
  darElBacha,
  jardinsMajorelle,
  bahiaPalace,
  saadianTombs,
];

export default function MarrakeshMap() {
  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800">
      <MapContainer
        center={[31.6285, -7.9850]} // Center between all locations
        zoom={13}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={darElBacha as [number, number]}>
          <Popup>
            <strong>Dar el Bacha</strong><br />
            Midday visit
          </Popup>
        </Marker>
        <Marker position={jardinsMajorelle as [number, number]}>
          <Popup>
            <strong>Jardins de la Majorelle</strong><br />
            Midday visit
          </Popup>
        </Marker>
        <Marker position={bahiaPalace as [number, number]}>
          <Popup>
            <strong>Bahia Palace</strong><br />
            Midday visit
          </Popup>
        </Marker>
        <Marker position={saadianTombs as [number, number]}>
          <Popup>
            <strong>Saadian Tombs</strong><br />
            Midday visit
          </Popup>
        </Marker>
        <Polyline
          positions={route as [number, number][]}
          color="#10b981"
          weight={3}
          opacity={0.7}
        />
      </MapContainer>
    </div>
  );
}

