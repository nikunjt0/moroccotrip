'use client';

import dynamic from 'next/dynamic';

const FezMap = dynamic(() => import('./FezMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
      <p className="text-zinc-600 dark:text-zinc-400">Loading map...</p>
    </div>
  ),
});

export default FezMap;

