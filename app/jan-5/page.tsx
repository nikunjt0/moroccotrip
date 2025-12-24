import MerzougaMap from '../components/MerzougaMapWrapper';
import Image from 'next/image';
import PhotoGallery from '../components/PhotoGallery';
import UploadButton from '../components/UploadButton';

export default function Jan5() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
          January 5
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-8">
          Day 4 of your Morocco trip - Drive to Merzouga (Part of 4-Day Desert Voyage)
        </p>
        
        <div className="mb-8">
          <MerzougaMap />
        </div>

        <div className="mb-8 bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-6 border border-zinc-200 dark:border-zinc-800">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            Hostel/Camping - Merzouga
          </h2>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
              <div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">Location</p>
                <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  Merzouga, Morocco
                </p>
              </div>
              <div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">Check-in</p>
                <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  January 5, 2026
                </p>
              </div>
              <div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">Check-out</p>
                <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  January 7, 2026
                </p>
              </div>
              <div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">Guests</p>
                <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  5 Guests
                </p>
              </div>
            </div>
            <a
              href="https://www.hostelworld.com/pwa/s?q=Merzouga,%20Morocco&country=Merzouga&city=Merzouga&type=city&id=6011&from=2026-01-05&to=2026-01-07&guests=5&page=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Book Hostel/Camping on Hostelworld
            </a>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-6 border border-zinc-200 dark:border-zinc-800">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            Itinerary
          </h2>
          <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Day</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Drive from <strong>Ouarzazate</strong> to <strong>Merzouga</strong> (part of 4-day desert voyage with tour guide)</li>
                <li>Arrive in <strong>Merzouga</strong> - gateway to the Sahara Desert</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 mb-8">
          <UploadButton day="jan-5" />
          <PhotoGallery day="jan-5" />
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800">
            <Image
              src="/jan-8/merzouga.jpg"
              alt="Merzouga, Morocco"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800">
            <Image
              src="/jan-7/todra_valley.jpg"
              alt="Todra Valley, Morocco"
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

