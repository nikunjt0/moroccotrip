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
const tangier = [35.7595, -5.8340]; // Tangier, Morocco
const tarifa = [36.0136, -5.6028]; // Tarifa, Spain (ferry port)
const seville = [37.3891, -5.9845]; // Seville, Spain
const madrid = [40.4168, -3.7038]; // Madrid, Spain

// Route: Tangier → Tarifa (ferry) → Seville (bus) → Madrid (train)
const ferryRoute = [tangier, tarifa]; // Ferry across Strait of Gibraltar
const busRoute = [tarifa, seville]; // Bus to Seville
const trainRoute = [seville, madrid]; // Train to Madrid

export default function MadridReturnMap() {
  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800">
      <MapContainer
        center={[38.0, -4.5]} // Center of the route
        zoom={6}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={tangier as [number, number]}>
          <Popup>
            <strong>Tangier, Morocco</strong><br />
            Ferry departure
          </Popup>
        </Marker>
        <Marker position={tarifa as [number, number]}>
          <Popup>
            <strong>Tarifa, Spain</strong><br />
            Ferry arrival - Strait of Gibraltar
          </Popup>
        </Marker>
        <Marker position={seville as [number, number]}>
          <Popup>
            <strong>Seville, Spain</strong><br />
            Bus arrival - Transfer to train
          </Popup>
        </Marker>
        <Marker position={madrid as [number, number]}>
          <Popup>
            <strong>Madrid, Spain</strong><br />
            Final destination - Train arrival
          </Popup>
        </Marker>
        <Polyline
          positions={ferryRoute as [number, number][]}
          color="#0ea5e9"
          weight={3}
          opacity={0.7}
          dashArray="10, 5"
        />
        <Polyline
          positions={busRoute as [number, number][]}
          color="#f97316"
          weight={3}
          opacity={0.7}
        />
        <Polyline
          positions={trainRoute as [number, number][]}
          color="#84cc16"
          weight={3}
          opacity={0.7}
        />
      </MapContainer>
    </div>
  );
}

