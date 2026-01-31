import { Github, Globe } from 'lucide-react';
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
    <div className="min-h-screen flex flex-col font-sans bg-[var(--background)] transition-colors duration-500">
      <header className="sticky top-0 z-50 w-full bg-slate-950/80 dark:bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center font-black text-white">N</div>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={toggleRtl}
              className="px-3 py-1.5 text-xs font-bold border border-white/10 rounded-full hover:bg-white/5 transition flex items-center gap-2 text-slate-400"
            >
              <Globe size={14} />
              {isRtl ? 'English' : 'عربي'}
            </button>
            <Github size={20} className="text-slate-400 hover:text-white cursor-pointer" />
          </div>
        </div>
      </header>

      <main className="flex-1 page-fade-in">
        <Outlet />
      </main>

      <footer className="py-12 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
           <p className="text-slate-500 text-sm font-medium">Build your own legend. NEXO Portfolio 2026.</p>
        </div>
      </footer>
    </div>
  );
}
