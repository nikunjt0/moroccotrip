'use client';

export default function Map() {
  // Map centered on Spain/Morocco region
  // Using OpenStreetMap with Leaflet-style embed
  const mapCenter = '32.5,-5.5'; // Center between Spain and Morocco
  const zoom = 6;

  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800">
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src={`https://www.openstreetmap.org/export/embed.html?bbox=-10.0%2C30.0%2C5.0%2C37.0&layer=mapnik&marker=32.5,-5.5`}
        style={{ border: 0 }}
        allowFullScreen
      />
    </div>
  );
}

