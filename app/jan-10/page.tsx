import ChefchaouenMap from '../components/ChefchaouenMapWrapper';
import Image from 'next/image';
import PhotoGallery from '../components/PhotoGallery';
import UploadButton from '../components/UploadButton';

export default function Jan10() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
          January 10
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-8">
          Day 9 of your trip - Day Trip to Chefchaouen, then Head to Seville
        </p>
        
        <div className="mb-8">
          <ChefchaouenMap />
        </div>

        <div className="mb-8 bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-6 border border-zinc-200 dark:border-zinc-800">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            Transportation Bookings
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                1. Day Trip: Tangier → Chefchaouen → Tangier
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
                Book bus or tour for day trip to Chefchaouen (Blue City)
              </p>
            </div>
            <div className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                2. Ferry: Tangier → Spain (Strait of Gibraltar)
              </h3>
              <a
                href="https://www.omio.com/app/search-frontend/results/EFFA4029D2B5D4332B99851062730D976/ferry?locale=en&_gl=1*oqz9wv*_up*MQ..*_gs*MQ..&gbraid=0AAAAAoKnniwhrjHtT5BVb7vJB9XtZtmQE&gclid=Cj0KCQiA0p7KBhCkARIsAE6Xlal7jqoBzSnaEnrAW3fd3cn2_Y2sMJVXX7vbf_kcrVewrOgFJSatdikaAhBtEALw_wcB&def_sort=s&easy=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                Book Ferry on Omio
              </a>
            </div>
            <div className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                3. Bus: Tarifa → Seville
              </h3>
              <a
                href="https://www.omio.com/buses/tarifa/seville"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                Book Bus on Omio
              </a>
            </div>
          </div>
        </div>

        <div className="mb-8 bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-6 border border-zinc-200 dark:border-zinc-800">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            Hostel Booking - Seville
          </h2>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
              <div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">Location</p>
                <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  Seville, Spain
                </p>
              </div>
              <div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">Check-in</p>
                <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  January 10, 2026
                </p>
              </div>
              <div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">Check-out</p>
                <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  January 14, 2026
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
              href="https://www.hostelworld.com/pwa/s?q=Seville,%20Spain&country=Spain&city=Seville&type=city&id=118&from=2026-01-10&to=2026-01-14&guests=5&page=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Book Hostel on Hostelworld
            </a>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-6 border border-zinc-200 dark:border-zinc-800">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            Itinerary
          </h2>
          <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Morning & Day</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Day trip to <strong>Chefchaouen</strong> (Blue City) from <strong>Tangier</strong></li>
                <li>Explore the beautiful blue-painted streets</li>
                <li>Return to <strong>Tangier</strong> in the afternoon</li>
              </ul>
            </div>
            <div className="space-y-2 pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Afternoon & Evening</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Take ferry from <strong>Tangier</strong> to <strong>Spain</strong> (Strait of Gibraltar)</li>
                <li>Bus from <strong>Tarifa</strong> to <strong>Seville</strong></li>
                <li>Arrive in <strong>Seville</strong> and check into hostel</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 mb-8">
          <UploadButton day="jan-10" />
          <PhotoGallery day="jan-10" />
        </div>

      </div>
    </div>
  );
}

