import MarrakeshMap from '../components/MarrakeshMapWrapper';
import Image from 'next/image';
import PhotoGallery from '../components/PhotoGallery';
import UploadButton from '../components/UploadButton';

export default function Jan3() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
          January 3
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-8">
          Day 2 of your Morocco trip - Exploring Marrakesh
        </p>
        
        <div className="mb-8">
          <MarrakeshMap />
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-6 border border-zinc-200 dark:border-zinc-800">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            Itinerary
          </h2>
          <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Morning</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Wander the souks of the <strong>Medina</strong></li>
              </ul>
            </div>
            <div className="space-y-2 pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Midday</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Dar el Bacha</strong> , <strong>Jardins de la Majorelle</strong> , <strong>Bahia Palace & Saadian Tombs</strong></li>
              </ul>
            </div>
            <div className="space-y-2 pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Sunset</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Rooftop tea spot</li>
              </ul>
            </div>
            <div className="space-y-2 pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Night</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Hit <strong>Gueliz</strong> for bars/clubs</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 mb-8">
          <UploadButton day="jan-3" />
          <PhotoGallery day="jan-3" />
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800">
            <Image
              src="/jan-3/medina-marrakesh.jpg"
              alt="Medina, Marrakesh"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800">
            <Image
              src="/jan-3/medina-carpets.jpg"
              alt="Medina carpets, Marrakesh"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

