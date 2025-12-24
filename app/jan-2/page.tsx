import FlightMap from '../components/FlightMapWrapper';
import Image from 'next/image';
import PhotoGallery from '../components/PhotoGallery';
import UploadButton from '../components/UploadButton';

export default function Jan2() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
          January 2
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-8">
          Day 1 of your Morocco trip - Flight from Madrid to Marrakesh
        </p>
        
        <div className="mb-8">
          <FlightMap />
        </div>

        <div className="mb-8 bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-6 border border-zinc-200 dark:border-zinc-800">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            Flight Booking - Ryanair
          </h2>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
              <div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">Route</p>
                <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  Madrid (MAD) → Marrakesh (RAK)
                </p>
              </div>
              <div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">Date</p>
                <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  January 2, 2026
                </p>
              </div>
              <div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">Passengers</p>
                <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  4 Adults
                </p>
              </div>
            </div>
            <a
              href="https://www.ryanair.com/us/en/trip/flights/select?adults=4&teens=0&children=0&infants=0&dateOut=2026-01-02&dateIn=&isConnectedFlight=false&discount=0&promoCode=&isReturn=false&originIata=MAD&destinationIata=RAK&tpAdults=4&tpTeens=0&tpChildren=0&tpInfants=0&tpStartDate=2026-01-02&tpEndDate=&tpDiscount=0&tpPromoCode=&tpOriginIata=MAD&tpDestinationIata=RAK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Book Flight on Ryanair
            </a>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Note: Ryanair's website cannot be embedded due to security restrictions. Click the button above to open the booking page in a new tab.
            </p>
          </div>
        </div>

        <div className="mb-8 bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-6 border border-zinc-200 dark:border-zinc-800">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            Hostel Booking - Marrakesh
          </h2>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
              <div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">Location</p>
                <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  Marrakesh, Morocco
                </p>
              </div>
              <div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">Check-in</p>
                <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  January 2, 2026
                </p>
              </div>
              <div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">Check-out</p>
                <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  January 4, 2026
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
              href="https://www.hostelworld.com/pwa/s?q=Marrakech,%20Morocco&country=Morocco&city=Marrakech&type=city&id=427&from=2026-01-02&to=2026-01-04&guests=5&page=1"
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
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Arrivals</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Aman:</strong> Lands in Marrakesh at 6:00 PM</li>
                <li><strong>Nikunj, Arjun, Arjav, and Tanmay:</strong> Land in Madrid at 8:30 AM, then need to take a flight to Marrakesh</li>
              </ul>
            </div>
            <div className="space-y-2 pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Evening</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Check into Riad/Hostel</li>
                <li>Explore <strong>Jemaa el-Fnaa</strong> at night</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 mb-8">
          <UploadButton day="jan-2" />
          <PhotoGallery day="jan-2" />
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800">
            <Image
              src="/jan-2/jemaa-square-marrakesh.jpg"
              alt="Jemaa el-Fnaa Square, Marrakesh"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800">
            <Image
              src="/jan-2/jemaa-el-fnaa-night.jpg"
              alt="Jemaa el-Fnaa at night, Marrakesh"
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

