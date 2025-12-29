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
          Day 13 of your trip - Train to Madrid & Departure Day
        </p>

        <div className="mb-8 bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-6 border border-zinc-200 dark:border-zinc-800">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            Transportation Booking
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                Bullet Train: Seville → Madrid (6:00 AM)
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
                Book high-speed train online (Renfe or Omio) - approximately 2.5 hours
              </p>
              <a
                href="https://www.omio.com/trains/seville/madrid"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                Book Train on Omio
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-6 border border-zinc-200 dark:border-zinc-800">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            Itinerary
          </h2>
          <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Early Morning</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Take <strong>6:00 AM bullet train</strong> from <strong>Seville</strong> to <strong>Madrid</strong></li>
                <li>Arrive in <strong>Madrid</strong> around 8:30 AM</li>
              </ul>
            </div>
            <div className="space-y-2 pt-4 border-t border-zinc-200 dark:border-zinc-800">
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

