import PhotoGallery from '../components/PhotoGallery';
import UploadButton from '../components/UploadButton';

export default function Jan14() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
          January 14
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-8">
          Day 13 of your Morocco trip - Departure Day
        </p>

        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-6 border border-zinc-200 dark:border-zinc-800">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            Itinerary
          </h2>
          <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Morning</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Get breakfast in <strong>Madrid</strong></li>
                <li>Get to airport by <strong>9:30 AM</strong></li>
              </ul>
            </div>
            <div className="space-y-2 pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Departure</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Flight at <strong>12:00 PM</strong></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 mb-8">
          <UploadButton day="jan-14" />
          <PhotoGallery day="jan-14" />
        </div>
      </div>
    </div>
  );
}

