'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { label: 'Whole Trip', path: '/whole-trip' },
  { label: 'Jan 2', path: '/jan-2' },
  { label: 'Jan 3', path: '/jan-3' },
  { label: 'Jan 4', path: '/jan-4' },
  { label: 'Jan 5', path: '/jan-5' },
  { label: 'Jan 6', path: '/jan-6' },
  { label: 'Jan 7', path: '/jan-7' },
  { label: 'Jan 8', path: '/jan-8' },
  { label: 'Jan 9', path: '/jan-9' },
  { label: 'Jan 10', path: '/jan-10' },
  { label: 'Jan 11', path: '/jan-11' },
  { label: 'Jan 12', path: '/jan-12' },
  { label: 'Jan 13', path: '/jan-13' },
  { label: 'Jan 14', path: '/jan-14' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto scrollbar-hide py-4 gap-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.path || (pathname === '/' && item.path === '/whole-trip');
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

