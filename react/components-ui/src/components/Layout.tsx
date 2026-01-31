import { Globe, Layers } from 'lucide-react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Layout() {
  const [isRtl, setIsRtl] = useState(false);

  const toggleRtl = () => {
    const newRtl = !isRtl;
    setIsRtl(newRtl);
    document.documentElement.dir = newRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = newRtl ? 'ar' : 'en';
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[var(--background)] text-[var(--foreground)] transition-colors duration-500">
      <header className="h-16 border-b flex items-center justify-between px-6 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 backdrop-blur-lg">
        <div className="flex items-center gap-2 font-black text-xl">
          <Layers className="text-primary-600" /> NEXO UI
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={toggleRtl}
            className="text-xs font-bold border border-slate-200 dark:border-slate-700 rounded-full px-4 py-1.5 flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
          >
            <Globe size={14} /> {isRtl ? 'English' : 'عربي'}
          </button>
        </div>
      </header>

      <div className="flex flex-1">
        <aside className="w-64 border-r border-slate-200 dark:border-slate-800 hidden lg:block p-8">
           <nav className="space-y-4">
              <a className="block text-sm font-bold text-primary-600">Overview</a>
              <a className="block text-sm font-bold text-slate-400 hover:text-slate-900 dark:hover:text-white transition cursor-pointer">Atoms</a>
              <a className="block text-sm font-bold text-slate-400 hover:text-slate-900 dark:hover:text-white transition cursor-pointer">Organisms</a>
           </nav>
        </aside>
        <main className="flex-1 overflow-y-auto page-fade-in">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
