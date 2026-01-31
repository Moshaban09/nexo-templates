import { Globe, ShoppingBag, User } from 'lucide-react';
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
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="text-primary-600" />
            <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white">NEXO<span className="text-primary-600">SHOP</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wide">
            <a href="#" className="hover:text-primary-600 transition-colors">Shop</a>
            <a href="#" className="hover:text-primary-600 transition-colors">Categories</a>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={toggleRtl}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold border border-slate-200 dark:border-slate-700 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition"
            >
              <Globe size={14} />
              {isRtl ? 'English' : 'عربي'}
            </button>
            <User size={20} className="text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer" />
          </div>
        </div>
      </header>

      <main className="flex-1 page-fade-in">
        <Outlet />
      </main>

      <footer className="border-t py-12 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-6 text-center text-slate-500 text-xs font-bold uppercase tracking-widest">
           Powered by Nexo E-commerce Engine 2026.
        </div>
      </footer>
    </div>
  );
}
