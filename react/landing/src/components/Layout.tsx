import { Globe, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Layout() {
  const [isRtl, setIsRtl] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleRtl = () => {
    const newRtl = !isRtl;
    setIsRtl(newRtl);
    document.documentElement.dir = newRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = newRtl ? 'ar' : 'en';
  };

  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-500">
      <nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-lg border-b border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tighter text-primary-600">
            NEXO<span className="text-slate-900 dark:text-white">LAND</span>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm font-bold text-slate-600 dark:text-slate-400">
            <a href="#features" className="hover:text-primary-600 transition-colors">Features</a>
            <a href="#testimonials" className="hover:text-primary-600 transition-colors">Testimonials</a>
            <a href="#faq" className="hover:text-primary-600 transition-colors">FAQ</a>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={toggleRtl}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold border border-slate-200 dark:border-slate-700 rounded-full hover:bg-slate-50 dark:hover:bg-slate-900 transition"
            >
              <Globe size={14} />
              {isRtl ? 'English' : 'عربي'}
            </button>
            <button className="hidden md:block px-6 py-2.5 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-full text-sm font-bold hover:scale-105 transition active:scale-95 shadow-xl">
              Get Started
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-slate-900 dark:text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 p-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
            <a href="#features" className="block text-lg font-bold">Features</a>
            <a href="#testimonials" className="block text-lg font-bold">Testimonials</a>
            <a href="#faq" className="block text-lg font-bold">FAQ</a>
            <button className="w-full py-3 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-xl font-bold">Get Started</button>
          </div>
        )}
      </nav>

      <main className="flex-1 pt-20 page-fade-in">
        <Outlet />
      </main>

      <footer className="bg-slate-950 text-white py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="text-3xl font-black tracking-tighter mb-6">NEXO<span className="text-primary-500">LAND</span></div>
            <p className="text-slate-400 max-w-sm mb-8 font-medium">
              Building the future of high-conversion landing pages with Nexo CLI and React 19.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Features</a></li>
              <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition">Updates</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
              <li><a href="#" className="hover:text-white transition">Legal</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
