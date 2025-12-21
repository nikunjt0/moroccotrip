import CombinedTripMap from '../components/CombinedTripMapWrapper';

export default function WholeTrip() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
          Whole Trip Overview
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-8">
          Complete itinerary for your Morocco trip from January 2-14
        </p>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            Complete Trip Map
          </h2>
          <CombinedTripMap />
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-6 border border-zinc-200 dark:border-zinc-800">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            Trip Summary
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            Your complete Morocco adventure itinerary. Click on any day in the menu above to see detailed plans for that specific day.
          </p>
        </div>
      </div>
    </div>
  );
}

