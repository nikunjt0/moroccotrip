import TangierMap from '../components/TangierMapWrapper';
import Image from 'next/image';
import PhotoGallery from '../components/PhotoGallery';
import UploadButton from '../components/UploadButton';

export default function Jan8() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
          January 8
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-8">
          Day 7 of your Morocco trip - Full Day in Tangier
        </p>
        
        <div className="mb-8">
          <TangierMap />
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-6 border border-zinc-200 dark:border-zinc-800">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            Itinerary
          </h2>
          <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Morning</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Arrive in <strong>Tangier</strong> from overnight coach</li>
                <li>Check into hostel and freshen up</li>
              </ul>
            </div>
            <div className="space-y-2 pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Day</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Explore <strong>Tangier</strong> - vibrant port city</li>
                <li>Visit the <strong>Kasbah area</strong></li>
                <li>Explore the <strong>medina</strong> and <strong>souks</strong></li>
                <li>Visit <strong>Hercules Caves</strong></li>
                <li>Explore the <strong>beaches</strong> and <strong>coastline</strong></li>
              </ul>
            </div>
            <div className="space-y-2 pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Evening & Night</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Kasbah area</strong> at sunset</li>
                <li>Enjoy <strong>Tangier's</strong> vibrant nightlife</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 mb-8">
          <UploadButton day="jan-8" />
          <PhotoGallery day="jan-8" />
        </div>

      </div>
    </div>
  );
}

