import ImlilMap from '../components/ImlilMapWrapper';
import Image from 'next/image';

export default function Jan4() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
          January 4
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-8">
          Day 3 of your Morocco trip - Atlas Mountains Day Trip
        </p>
        
        <div className="mb-8">
          <ImlilMap />
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-6 border border-zinc-200 dark:border-zinc-800">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            Itinerary
          </h2>
          <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Morning</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Go <strong>Marrakesh → Imlil</strong> (~1.5 hrs by taxi/car) high up in the Atlas Mountains.</li>
              </ul>
            </div>
            <div className="space-y-2 pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Midday</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Do a <strong>2–4 hour hike</strong> up to Aroumd (waterfalls / valley views / lunch in a Berber village)</li>
              </ul>
            </div>
            <div className="space-y-2 pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Evening & Night</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Back to <strong>Marrakesh</strong> for dinner + night out</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800">
            <Image
              src="/jan-4/imlil-morocco.jpg"
              alt="Imlil, Atlas Mountains, Morocco"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800">
            <Image
              src="/jan-4/aroumd-morocco.jpg"
              alt="Aroumd, Atlas Mountains, Morocco"
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

