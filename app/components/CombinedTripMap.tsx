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

// Main route locations
const madrid = [40.4168, -3.7038]; // Madrid, Spain
const marrakesh = [31.6295, -7.9811]; // Marrakesh, Morocco
const imlil = [31.1333, -7.9167]; // Imlil, Atlas Mountains
const essaouira = [31.5085, -9.7596]; // Essaouira, Morocco
const ouarzazate = [30.9194, -6.8931]; // Ouarzazate, Morocco
const aitBenhaddou = [31.0472, -7.1233]; // Ait Benhaddou
const dadesValley = [31.5167, -5.5167]; // Dades Valley
const todraGorge = [31.5833, -5.5167]; // Todra Gorge
const merzouga = [31.0833, -4.0167]; // Merzouga
const zizValley = [32.6833, -4.7500]; // Ziz Valley
const fez = [34.0331, -5.0003]; // Fez
const chefchaouen = [35.1683, -5.2633]; // Chefchaouen (Blue City)
const tangier = [35.7595, -5.8340]; // Tangier
const tarifa = [36.0136, -5.6028]; // Tarifa, Spain (ferry port)
const seville = [37.3891, -5.9845]; // Seville, Spain

// Marrakesh city locations
const darElBacha = [31.6250, -7.9880]; // Dar el Bacha Museum
const jardinsMajorelle = [31.6400, -7.9930]; // Jardins de la Majorelle
const bahiaPalace = [31.6194, -7.9786]; // Bahia Palace
const saadianTombs = [31.6178, -7.9783]; // Saadian Tombs

// Routes
const flightRoute = [madrid, marrakesh]; // Blue - Flight route
const imlilRoute = [marrakesh, imlil]; // Orange - Day trip route
const essaouiraRoute = [marrakesh, essaouira]; // Purple - Bus route to Essaouira
const ouarzazateRoute = [essaouira, marrakesh, ouarzazate]; // Pink - Bus route to Ouarzazate
const merzougaRoute = [ouarzazate, aitBenhaddou, dadesValley, todraGorge, merzouga]; // Red - Car route to Merzouga
const fezRoute = [merzouga, zizValley, fez]; // Cyan - Car route to Fez
const chefchaouenRoute = [fez, chefchaouen]; // Teal - Bus route to Chefchaouen
const tangierRoute = [chefchaouen, tangier]; // Purple - Bus route to Tangier
const returnRoute = [tangier, tarifa, seville, madrid]; // Multi-color - Ferry, bus, train back to Madrid
const marrakeshCityRoute = [darElBacha, jardinsMajorelle, bahiaPalace, saadianTombs]; // Green - City exploration

export default function CombinedTripMap() {
  return (
    <div className="w-full h-[600px] rounded-lg overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800">
      <MapContainer
        center={[35.0, -5.0]} // Center between Spain and Morocco
        zoom={6}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
        minZoom={5}
        maxZoom={15}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Main route markers */}
        <Marker position={madrid as [number, number]}>
          <Popup>
            <strong>Madrid, Spain</strong><br />
            Landing point (Jan 2), Return (Jan 13-14)
          </Popup>
        </Marker>
        <Marker position={marrakesh as [number, number]}>
          <Popup>
            <strong>Marrakesh, Morocco</strong><br />
            Main destination (Jan 2-5)
          </Popup>
        </Marker>
        <Marker position={imlil as [number, number]}>
          <Popup>
            <strong>Imlil, Atlas Mountains</strong><br />
            Day trip (Jan 4)
          </Popup>
        </Marker>
        <Marker position={essaouira as [number, number]}>
          <Popup>
            <strong>Essaouira</strong><br />
            Coastal destination (Jan 5-6)
          </Popup>
        </Marker>
        <Marker position={ouarzazate as [number, number]}>
          <Popup>
            <strong>Ouarzazate</strong><br />
            Desert gateway (Jan 6-7)
          </Popup>
        </Marker>
        <Marker position={aitBenhaddou as [number, number]}>
          <Popup>
            <strong>Ait Benhaddou</strong><br />
            Morning exploration (Jan 7)
          </Popup>
        </Marker>
        <Marker position={dadesValley as [number, number]}>
          <Popup>
            <strong>Dades Valley</strong><br />
            Quick hike (Jan 7)
          </Popup>
        </Marker>
        <Marker position={todraGorge as [number, number]}>
          <Popup>
            <strong>Todra Gorge</strong><br />
            Quick hike (Jan 7)
          </Popup>
        </Marker>
        <Marker position={merzouga as [number, number]}>
          <Popup>
            <strong>Merzouga</strong><br />
            Desert experience (Jan 7-9)
          </Popup>
        </Marker>
        <Marker position={fez as [number, number]}>
          <Popup>
            <strong>Fez</strong><br />
            Arrival evening (Jan 9-11)
          </Popup>
        </Marker>
        <Marker position={chefchaouen as [number, number]}>
          <Popup>
            <strong>Chefchaouen (Blue City)</strong><br />
            Sunset viewpoint, chill evening (Jan 11-12)
          </Popup>
        </Marker>
        <Marker position={tangier as [number, number]}>
          <Popup>
            <strong>Tangier</strong><br />
            Kasbah area, night out (Jan 12-13)
          </Popup>
        </Marker>
        <Marker position={tarifa as [number, number]}>
          <Popup>
            <strong>Tarifa, Spain</strong><br />
            Ferry arrival (Jan 13)
          </Popup>
        </Marker>
        <Marker position={seville as [number, number]}>
          <Popup>
            <strong>Seville, Spain</strong><br />
            Bus arrival, train transfer (Jan 13)
          </Popup>
        </Marker>

        {/* Marrakesh city locations */}
        <Marker position={darElBacha as [number, number]}>
          <Popup>
            <strong>Dar el Bacha</strong><br />
            Marrakesh (Jan 3)
          </Popup>
        </Marker>
        <Marker position={jardinsMajorelle as [number, number]}>
          <Popup>
            <strong>Jardins de la Majorelle</strong><br />
            Marrakesh (Jan 3)
          </Popup>
        </Marker>
        <Marker position={bahiaPalace as [number, number]}>
          <Popup>
            <strong>Bahia Palace</strong><br />
            Marrakesh (Jan 3)
          </Popup>
        </Marker>
        <Marker position={saadianTombs as [number, number]}>
          <Popup>
            <strong>Saadian Tombs</strong><br />
            Marrakesh (Jan 3)
          </Popup>
        </Marker>

        {/* Routes */}
        <Polyline
          positions={flightRoute as [number, number][]}
          color="#3b82f6"
          weight={3}
          opacity={0.7}
        />
        <Polyline
          positions={imlilRoute as [number, number][]}
          color="#f59e0b"
          weight={3}
          opacity={0.7}
        />
        <Polyline
          positions={essaouiraRoute as [number, number][]}
          color="#8b5cf6"
          weight={3}
          opacity={0.7}
        />
        <Polyline
          positions={ouarzazateRoute as [number, number][]}
          color="#ec4899"
          weight={3}
          opacity={0.7}
        />
        <Polyline
          positions={merzougaRoute as [number, number][]}
          color="#dc2626"
          weight={3}
          opacity={0.7}
        />
        <Polyline
          positions={fezRoute as [number, number][]}
          color="#06b6d4"
          weight={3}
          opacity={0.7}
        />
        <Polyline
          positions={chefchaouenRoute as [number, number][]}
          color="#14b8a6"
          weight={3}
          opacity={0.7}
        />
        <Polyline
          positions={tangierRoute as [number, number][]}
          color="#a855f7"
          weight={3}
          opacity={0.7}
        />
        <Polyline
          positions={returnRoute as [number, number][]}
          color="#6366f1"
          weight={3}
          opacity={0.7}
        />
        <Polyline
          positions={marrakeshCityRoute as [number, number][]}
          color="#10b981"
          weight={2}
          opacity={0.6}
        />
      </MapContainer>
    </div>
  );
}

