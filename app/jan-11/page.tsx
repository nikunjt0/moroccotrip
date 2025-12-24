import SevilleMap from '../components/SevilleMapWrapper';
import Image from 'next/image';
import PhotoGallery from '../components/PhotoGallery';
import UploadButton from '../components/UploadButton';

export default function Jan11() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
          January 11
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-8">
          Day 10 of your trip - Seville Activities
        </p>
        
        <div className="mb-8">
          <SevilleMap />
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-6 border border-zinc-200 dark:border-zinc-800">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            Itinerary
          </h2>
          <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Day</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Explore <strong>Seville Cathedral</strong> and <strong>Giralda Tower</strong></li>
                <li>Visit the <strong>Alcázar of Seville</strong> - stunning royal palace</li>
                <li>Wander through <strong>Barrio Santa Cruz</strong> - historic Jewish quarter</li>
                <li>Visit <strong>Plaza de España</strong></li>
              </ul>
            </div>
            <div className="space-y-2 pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Evening & Night</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Enjoy <strong>tapas</strong> and <strong>flamenco</strong> shows</li>
                <li>Experience Seville's vibrant nightlife</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 mb-8">
          <UploadButton day="jan-11" />
          <PhotoGallery day="jan-11" />
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800">
            <Image
              src="/jan-13/madrid-night.avif"
              alt="Seville, Spain"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800">
            <Image
              src="/jan-13/gibraltar-ferry.jpg"
              alt="Seville architecture, Spain"
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

